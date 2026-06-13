import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Avatar() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 360;
    let height = container.clientHeight || 480;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    // Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Soft Purple Rim Light Left
    const rimLightLeft = new THREE.PointLight(0xa78bfa, 2.5, 10);
    rimLightLeft.position.set(-3, 2, 1.5);
    scene.add(rimLightLeft);

    // Soft Pink Rim Light Right
    const rimLightRight = new THREE.PointLight(0xeb4d6d, 2.5, 10);
    rimLightRight.position.set(3, -2, 2);
    scene.add(rimLightRight);

    // Mouse and Gyro Trackers
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInWindow = true;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      isMouseInWindow = true;
    };

    const handleMouseLeave = () => {
      isMouseInWindow = false;
    };

    const handleMouseEnter = () => {
      isMouseInWindow = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let useGyro = false;
    let gyroX = 0;
    let gyroY = 0;

    const handleOrientation = (e) => {
      if (e.beta !== null && e.gamma !== null) {
        useGyro = true;
        gyroX = e.gamma / 40;
        gyroY = (e.beta - 50) / 40;
        gyroX = Math.max(-1, Math.min(1, gyroX));
        gyroY = Math.max(-1, Math.min(1, gyroY));
      }
    };

    window.addEventListener('deviceorientation', handleOrientation, { passive: true });

    // Model nodes
    let avatarScene = null;
    let pbrBody = null;
    let pbrHead = null;
    let pbrEyeLeft = null;
    let pbrEyeRight = null;
    let pbrArmLeft = null;
    let pbrArmRight = null;

    let originalLeftArmRotation = new THREE.Euler();
    let originalRightArmRotation = new THREE.Euler();

    let hoverScale = 1.0;
    let targetHoverScale = 1.0;
    let hoverGlow = 0.0;
    let targetHoverGlow = 0.0;

    let activeAnimation = null;
    let animationTime = 0;

    const clock = new THREE.Clock();
    const loader = new GLTFLoader();

    // Use absolute URL from / public root
    loader.load(
      '/avatar.glb',
      (gltf) => {
        avatarScene = gltf.scene;
        scene.add(avatarScene);

        pbrBody = avatarScene.getObjectByName('PBR_Body');
        pbrHead = avatarScene.getObjectByName('PBR_Head');
        pbrEyeLeft = avatarScene.getObjectByName('PBR_EyeLeft');
        pbrEyeRight = avatarScene.getObjectByName('PBR_EyeRight');
        pbrArmLeft = avatarScene.getObjectByName('PBR_ArmLeft');
        pbrArmRight = avatarScene.getObjectByName('PBR_ArmRight');

        if (pbrArmLeft) originalLeftArmRotation.copy(pbrArmLeft.rotation);
        if (pbrArmRight) originalRightArmRotation.copy(pbrArmRight.rotation);

        avatarScene.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;

            if (node.name.startsWith('Emissive')) {
              node.visible = false;
            } else {
              if (node.material) {
                node.material.roughness = 0.35;
                node.material.metalness = 0.25;
                node.material.emissive = new THREE.Color(0x000000);
                node.material.emissiveIntensity = 0;
              }
            }
          }
        });

        avatarScene.scale.set(1.0, 1.0, 1.0);
        avatarScene.position.set(0, 0, 0);

        activeAnimation = 'greet';
        animationTime = 0;

        setLoading(false);
        bindInteractiveEvents();

        // Hide global loading overlay
        const overlay = document.getElementById('loader-overlay');
        if (overlay) {
          overlay.classList.add('fade-out');
          setTimeout(() => {
            overlay.style.display = 'none';
          }, 1000);
        }
      },
      (xhr) => {
        const totalBytes = xhr.total || 13931836;
        const pct = Math.min(100, Math.floor((xhr.loaded / totalBytes) * 100));
        setProgress(pct);
      },
      (error) => {
        console.error('Error loading avatar GLTF model:', error);
        setLoading(false);
        setLoadError(true);
        
        // Hide global loading overlay on error
        const overlay = document.getElementById('loader-overlay');
        if (overlay) {
          overlay.classList.add('fade-out');
          setTimeout(() => {
            overlay.style.display = 'none';
          }, 1000);
        }
      }
    );

    const triggerClickReaction = () => {
      if (activeAnimation) return;
      const anims = ['jump', 'giggle'];
      activeAnimation = anims[Math.floor(Math.random() * anims.length)];
      animationTime = 0;
    };

    const bindInteractiveEvents = () => {
      const parentWrap = document.getElementById('about-avatar-wrap');
      if (parentWrap) {
        parentWrap.addEventListener('mouseenter', handleMouseEnterWrap);
        parentWrap.addEventListener('mouseleave', handleMouseLeaveWrap);
        parentWrap.addEventListener('click', triggerClickReaction);
      }
    };

    const handleMouseEnterWrap = () => {
      targetHoverScale = 1.08;
      targetHoverGlow = 1.0;
    };

    const handleMouseLeaveWrap = () => {
      targetHoverScale = 1.0;
      targetHoverGlow = 0.0;
    };

    let reqId = null;

    // Render loop
    const renderLoop = () => {
      reqId = requestAnimationFrame(renderLoop);

      const time = clock.getElapsedTime();

      // Smooth hover lerping
      hoverScale += (targetHoverScale - hoverScale) * 0.12;
      hoverGlow += (targetHoverGlow - hoverGlow) * 0.10;

      // Pulse rim lights on hover
      rimLightLeft.intensity = 2.5 + hoverGlow * 1.5;
      rimLightRight.intensity = 2.5 + hoverGlow * 1.5;

      let breatheY = 0;
      let breatheScaleY = 1.0;
      let animOffsetX = 0;
      let animOffsetY = 0;
      let animOffsetZ = 0;
      let animRotX = 0;
      let animRotY = 0;
      let animRotZ = 0;

      if (!activeAnimation) {
        breatheY = Math.sin(time * 1.5) * 0.035;
        breatheScaleY = 1.0 + Math.sin(time * 1.5) * 0.008;
      } else {
        animationTime += 0.016;

        if (activeAnimation === 'jump') {
          const duration = 0.7;
          const prog = animationTime / duration;
          if (prog >= 1.0) {
            activeAnimation = null;
          } else {
            animOffsetY = Math.sin(prog * Math.PI) * 0.45;
            const squash = Math.sin(prog * Math.PI * 2);
            breatheScaleY = 1.0 + (prog < 0.5 ? squash * 0.06 : squash * 0.1);
          }
        } else if (activeAnimation === 'giggle') {
          const duration = 1.0;
          const prog = animationTime / duration;
          if (prog >= 1.0) {
            activeAnimation = null;
          } else {
            animOffsetX = Math.sin(animationTime * 40) * 0.025;
            animRotZ = Math.sin(animationTime * 30) * 0.03;
            animRotX = 0.12;

            const pulseGlow = 0.5 + Math.sin(animationTime * 50) * 0.5;
            if (avatarScene) {
              avatarScene.traverse((node) => {
                if (node.isMesh && node.name.includes('Head')) {
                  if (node.material && node.material.emissive) {
                    node.material.emissive.setHex(0xeb4d6d);
                    node.material.emissiveIntensity = pulseGlow * 2.0;
                  }
                }
              });
            }
          }
        } else if (activeAnimation === 'greet') {
          const duration = 1.4;
          const prog = animationTime / duration;
          if (prog >= 1.0) {
            activeAnimation = null;
          } else {
            animRotZ = Math.sin(prog * Math.PI * 2) * 0.05;
            animOffsetX = Math.sin(prog * Math.PI * 2) * 0.03;
            animRotX = Math.sin(prog * Math.PI * 4) * 0.1;
          }
        }
      }

      if (pbrBody) {
        pbrBody.position.y = -0.95 + breatheY + animOffsetY;
        pbrBody.position.x = animOffsetX;
        pbrBody.position.z = animOffsetZ;
        const uniformScale = breatheScaleY;
        pbrBody.scale.set(0.95 * hoverScale * uniformScale, 0.95 * hoverScale * uniformScale, 0.95 * hoverScale * uniformScale);
        pbrBody.rotation.z = animRotZ;
      }

      if (pbrArmLeft && pbrArmRight) {
        let armLeftRot = originalLeftArmRotation.z + Math.sin(time * 1.5) * 0.02;
        let armRightRot = originalRightArmRotation.z - Math.sin(time * 1.5) * 0.02;

        if (activeAnimation === 'greet') {
          const duration = 1.4;
          const prog = animationTime / duration;
          const envelope = Math.sin(prog * Math.PI);
          const waveAngle = -1.5 + Math.sin(animationTime * 18) * 0.35;
          armRightRot = originalRightArmRotation.z + waveAngle * envelope;
        }

        pbrArmLeft.rotation.x = originalLeftArmRotation.x;
        pbrArmLeft.rotation.y = originalLeftArmRotation.y;
        pbrArmLeft.rotation.z = armLeftRot;

        pbrArmRight.rotation.x = originalRightArmRotation.x;
        pbrArmRight.rotation.y = originalRightArmRotation.y;
        pbrArmRight.rotation.z = armRightRot;
      }

      if (pbrHead) {
        let targetX = useGyro ? gyroY : mouseY;
        let targetY = useGyro ? gyroX : mouseX;

        if (!isMouseInWindow || activeAnimation === 'greet') {
          targetX = 0;
          targetY = 0;
        }

        const maxHeadYaw = 0.38;
        const maxHeadPitch = 0.18;

        const headYaw = targetY * maxHeadYaw;
        const headPitch = -targetX * maxHeadPitch;

        pbrHead.rotation.y += (headYaw - pbrHead.rotation.y) * 0.08;
        pbrHead.rotation.x += (headPitch - pbrHead.rotation.x) * 0.08;
        pbrHead.rotation.x += animRotX;
        pbrHead.rotation.y += animRotY;

        if (!activeAnimation || activeAnimation !== 'giggle') {
          if (avatarScene) {
            avatarScene.traverse((node) => {
              if (node.isMesh && (node.name.includes('Head') || node.name.includes('Eye'))) {
                if (node.material && node.material.emissive) {
                  node.material.emissive.setHex(0xeb4d6d);
                  node.material.emissiveIntensity = hoverGlow * 1.5;
                }
              }
            });
          }
        }
      }

      if (pbrEyeLeft && pbrEyeRight) {
        let targetX = useGyro ? gyroY : mouseY;
        let targetY = useGyro ? gyroX : mouseX;

        if (!isMouseInWindow || activeAnimation === 'greet') {
          targetX = 0;
          targetY = 0;
        }

        const maxEyeYaw = 0.5;
        const maxEyePitch = 0.28;

        const eyeYaw = targetY * maxEyeYaw;
        const eyePitch = -targetX * maxEyePitch;

        pbrEyeLeft.rotation.y += (eyeYaw - pbrEyeLeft.rotation.y) * 0.14;
        pbrEyeLeft.rotation.x += (eyePitch - pbrEyeLeft.rotation.x) * 0.14;

        pbrEyeRight.rotation.y += (eyeYaw - pbrEyeRight.rotation.y) * 0.14;
        pbrEyeRight.rotation.x += (eyePitch - pbrEyeRight.rotation.x) * 0.14;
      }

      renderer.render(scene, camera);
    };

    const resizeCanvas = () => {
      width = container.clientWidth || 360;
      height = container.clientHeight || 480;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', resizeCanvas);
    renderLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('deviceorientation', handleOrientation);

      const parentWrap = document.getElementById('about-avatar-wrap');
      if (parentWrap) {
        parentWrap.removeEventListener('mouseenter', handleMouseEnterWrap);
        parentWrap.removeEventListener('mouseleave', handleMouseLeaveWrap);
        parentWrap.removeEventListener('click', triggerClickReaction);
      }

      try {
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      } catch (err) {
        console.warn("Cleanup error:", err);
      }
    };
  }, []);

  if (loadError) {
    return (
      <img 
        src="/assets/profile.png" 
        alt="Pawan Singh Avatar Fallback" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} 
      />
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'var(--color-primary-light)',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.9rem',
          letterSpacing: '1px',
          textAlign: 'center'
        }}>
          LOADING 3D AVATAR... {progress}%
        </div>
      )}
      <div ref={containerRef} className="avatar-canvas-container" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
