/* ============================================================
   PAWAN SINGH — Portfolio Interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  console.log("ANTIGRAVITY SCRIPT RUNNING");

  // --- Typewriter Effect ---
  const roles = ["AI Enthusiast", "CS Student"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterEl = document.getElementById('hero-typewriter');

  function type() {
    if (!typewriterEl) return;
    
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  // Start typewriter after hero title entry transition completes
  setTimeout(type, 800);

  // --- DOM Refs ---
  const menuToggle = document.getElementById('menu-toggle');
  const navDropdown = document.getElementById('nav-dropdown');
  const resumeOverlay = document.getElementById('resume-overlay');
  const resumeCloseBtn = document.getElementById('resume-close');
  const resumeCloseBtn2 = document.getElementById('resume-close-2');
  const navResumeBtn = document.getElementById('nav-resume-btn');
  const aboutResumeBtn = document.getElementById('about-resume-btn');
  const contactForm = document.getElementById('contact-form');

  // ============================================================
  // NAV DROPDOWN TOGGLE
  // ============================================================
  let navOpen = false;

  function toggleNav() {
    navOpen = !navOpen;
    navDropdown.classList.toggle('active', navOpen);
    menuToggle.setAttribute('aria-expanded', navOpen);
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNav();
  });

  navDropdown.querySelectorAll('.nav-dropdown__link').forEach(link => {
    link.addEventListener('click', () => {
      if (navOpen) toggleNav();
    });
  });

  document.addEventListener('click', (e) => {
    if (navOpen && !navDropdown.contains(e.target) && !menuToggle.contains(e.target)) {
      toggleNav();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (navOpen) toggleNav();
      if (resumeOverlay.classList.contains('active')) closeResume();
    }
  });

  // ============================================================
  // RESUME MODAL
  // ============================================================
  function openResume() {
    resumeOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (navOpen) toggleNav();
  }

  function closeResume() {
    resumeOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  navResumeBtn.addEventListener('click', openResume);
  aboutResumeBtn.addEventListener('click', openResume);
  resumeCloseBtn.addEventListener('click', closeResume);
  resumeCloseBtn2.addEventListener('click', closeResume);

  resumeOverlay.addEventListener('click', (e) => {
    if (e.target === resumeOverlay) closeResume();
  });

  // ============================================================
  // SCROLL REVEAL (Intersection Observer)
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ============================================================
  // SMOOTH SCROLL FOR NAV LINKS
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 100;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ============================================================
  // CONTACT FORM (mailto handler)
  // ============================================================
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const mailtoLink = `mailto:contact@pawansingh.dev?subject=Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;

    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.textContent = 'Sent! ✓';
    submitBtn.style.background = '#22c55e';
    
    setTimeout(() => {
      submitBtn.textContent = 'Submit';
      submitBtn.style.background = '';
      contactForm.reset();
    }, 2500);
  });

  // ============================================================
  // NAVBAR SCROLL EFFECT (subtle shadow on scroll)
  // ============================================================
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 40px rgba(0,0,0,0.2)';
    } else {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
    }
  }, { passive: true });


  // ============================================================
  // PREMIUM LOADING SCREEN PROGRESS (Controlled by Assets Loading)
  // ============================================================
  const loaderOverlay = document.getElementById('loader-overlay');
  const loaderCounter = document.getElementById('loader-counter');
  const loaderBar = document.getElementById('loader-bar');
  
  // Disable scroll during loading
  document.body.style.overflow = 'hidden';

  let loadingFinished = false;

  function updateLoadingProgress(percent) {
    if (loadingFinished) return;
    loaderCounter.textContent = `${percent}%`;
    loaderBar.style.width = `${percent}%`;
  }

  function hideLoadingScreen() {
    if (loadingFinished) return;
    loadingFinished = true;
    loaderCounter.textContent = '100%';
    loaderBar.style.width = '100%';
    
    setTimeout(() => {
      loaderOverlay.classList.add('fade-out');
      document.body.style.overflow = '';
      
      // Remove loader element after animation completes to save RAM
      setTimeout(() => {
        loaderOverlay.style.display = 'none';
      }, 1000);
    }, 400);
  }


  // ============================================================
  // CUSTOM CURSOR
  // ============================================================
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('custom-cursor-dot');
  
  let currentX = 0, currentY = 0;
  let targetX = 0, targetY = 0;
  const speed = 0.12; // Physics lag speed

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    
    // Tiny inner dot moves synchronously
    cursorDot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
  });

  function updateCursor() {
    // Smooth interpolation (lerp)
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;
    
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    
    requestAnimationFrame(updateCursor);
  }
  
  requestAnimationFrame(updateCursor);

  // Bind mouse states for interactive elements
  function bindCursorHovers() {
    const interactives = document.querySelectorAll('a, button, .project-card, .navbar__menu-btn, .navbar__dots');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
      });
    });
  }
  
  bindCursorHovers();

  // Hide cursor on leaving document
  document.addEventListener('mouseleave', () => {
    cursor.classList.add('hidden');
    cursorDot.classList.add('hidden');
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.classList.remove('hidden');
    cursorDot.classList.remove('hidden');
  });


  // ============================================================
  // 3D TILT EFFECT ON PROJECT CARDS
  // ============================================================
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    // Dynamically insert glare layer
    const glare = document.createElement('div');
    glare.classList.add('project-card-glare');
    card.appendChild(glare);

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Normalize values between -0.5 and 0.5
      const px = (x / rect.width) - 0.5;
      const py = (y / rect.height) - 0.5;
      
      const rotY = px * 14; // Degrees limit
      const rotX = -py * 14;
      
      card.style.transform = `perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(1.02)`;
      
      // Update custom properties for reflection highlight placement
      card.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
    });
  });

  // ============================================================
  // THREE.JS 3D AVATAR SYSTEM
  // ============================================================
  let mouseX = 0;
  let mouseY = 0;
  let isMouseInWindow = true;

  // Track global coordinates
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    isMouseInWindow = true;
  });

  // Track if mouse leaves viewport
  document.addEventListener('mouseleave', () => {
    isMouseInWindow = false;
  });

  document.addEventListener('mouseenter', () => {
    isMouseInWindow = true;
  });

  // Device tilt gyro tracking fallback
  let useGyro = false;
  let gyroX = 0;
  let gyroY = 0;
  
  window.addEventListener('deviceorientation', (e) => {
    if (e.beta !== null && e.gamma !== null) {
      useGyro = true;
      gyroX = e.gamma / 40; // X axis
      gyroY = (e.beta - 50) / 40; // Y axis relative to neutral viewing angle
      
      gyroX = Math.max(-1, Math.min(1, gyroX));
      gyroY = Math.max(-1, Math.min(1, gyroY));
    }
  }, { passive: true });

  function initAboutAvatar() {
    const container = document.getElementById('about-3d-avatar');
    if (!container || typeof THREE === 'undefined') {
      hideLoadingScreen();
      return;
    }

    // Canvas size (responsive to about photo block)
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
    renderer.outputEncoding = THREE.sRGBEncoding;
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

    // 5. Model References & Loading
    let avatarScene = null;
    let pbrBody = null;
    let pbrHead = null;
    let pbrEyeLeft = null;
    let pbrEyeRight = null;
    let pbrArmLeft = null;
    let pbrArmRight = null;

    // Original transforms from the imported GLTF to preserve original state
    let originalLeftArmRotation = new THREE.Euler();
    let originalRightArmRotation = new THREE.Euler();

    let hoverScale = 1.0;
    let targetHoverScale = 1.0;
    let hoverGlow = 0.0;
    let targetHoverGlow = 0.0;

    // Click animation states
    let activeAnimation = null; // 'jump', 'giggle', 'greet'
    let animationTime = 0;

    const clock = new THREE.Clock();
    const loader = new THREE.GLTFLoader();

    loader.load(
      'avatar.glb',
      (gltf) => {
        avatarScene = gltf.scene;
        scene.add(avatarScene);

        // Find parts in our structured hierarchy
        pbrBody = avatarScene.getObjectByName('PBR_Body');
        pbrHead = avatarScene.getObjectByName('PBR_Head');
        pbrEyeLeft = avatarScene.getObjectByName('PBR_EyeLeft');
        pbrEyeRight = avatarScene.getObjectByName('PBR_EyeRight');
        pbrArmLeft = avatarScene.getObjectByName('PBR_ArmLeft');
        pbrArmRight = avatarScene.getObjectByName('PBR_ArmRight');

        // Store original rotations after loading to preserve original imported transforms
        if (pbrArmLeft) {
          originalLeftArmRotation.copy(pbrArmLeft.rotation);
          console.log("PBR_ArmLeft parent name in THREE.js:", pbrArmLeft.parent ? pbrArmLeft.parent.name : "null");
          console.log("PBR_ArmLeft position coordinates:", pbrArmLeft.position.x, pbrArmLeft.position.y, pbrArmLeft.position.z);
          console.log("PBR_ArmLeft scale coordinates:", pbrArmLeft.scale.x, pbrArmLeft.scale.y, pbrArmLeft.scale.z);
          console.log("PBR_ArmLeft rotation coordinates:", pbrArmLeft.rotation.x, pbrArmLeft.rotation.y, pbrArmLeft.rotation.z);
        }
        if (pbrArmRight) originalRightArmRotation.copy(pbrArmRight.rotation);

        // Traverse to configure materials, shadows and hide emissive duplicate layer
        avatarScene.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;

            if (node.name.startsWith('Emissive')) {
              // Hide emissive duplicate mesh since we handle glow dynamically on PBR
              node.visible = false;
            } else {
              if (node.material) {
                node.material.roughness = 0.35;
                node.material.metalness = 0.25;
                // Initialize emissive glow
                node.material.emissive = new THREE.Color(0x000000);
                node.material.emissiveIntensity = 0;
              }
            }
          }
        });

        // Set initial scale and position (reset scene-level to prevent double scaling)
        avatarScene.scale.set(1.0, 1.0, 1.0);
        avatarScene.position.set(0, 0, 0);

        // Trigger greeting animation immediately on load
        activeAnimation = 'greet';
        animationTime = 0;

        // Hide loading overlay
        hideLoadingScreen();
        bindInteractiveEvents();
      },
      (xhr) => {
        const totalBytes = xhr.total || 13931836;
        const percent = Math.min(100, Math.floor((xhr.loaded / totalBytes) * 100));
        updateLoadingProgress(percent);
      },
      (error) => {
        console.error('Error loading avatar GLTF model:', error);
        hideLoadingScreen();
        showFallbackAvatar();
      }
    );

    // Fallback if loading fails
    function showFallbackAvatar() {
      container.innerHTML = `<img src="assets/profile.png" alt="Pawan Singh Avatar Fallback" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);" />`;
    }

    // Trigger random click reaction (giggle and jump)
    function triggerClickReaction() {
      if (activeAnimation) return; // Wait until animation completes
      const anims = ['jump', 'giggle'];
      activeAnimation = anims[Math.floor(Math.random() * anims.length)];
      animationTime = 0;
    }

    function bindInteractiveEvents() {
      const parentWrap = document.getElementById('about-avatar-wrap');
      if (parentWrap) {
        // Hover Scale and Glow trigger
        parentWrap.addEventListener('mouseenter', () => {
          targetHoverScale = 1.08;
          targetHoverGlow = 1.0;
        });
        parentWrap.addEventListener('mouseleave', () => {
          targetHoverScale = 1.0;
          targetHoverGlow = 0.0;
        });
        // Click animation trigger
        parentWrap.addEventListener('click', triggerClickReaction);
      }
    }

    // Render loop
    function renderLoop() {
      requestAnimationFrame(renderLoop);

      const time = clock.getElapsedTime();

      // Smooth hover lerping
      hoverScale += (targetHoverScale - hoverScale) * 0.12;
      hoverGlow += (targetHoverGlow - hoverGlow) * 0.10;

      // Pulse rim lights on hover
      rimLightLeft.intensity = 2.5 + hoverGlow * 1.5;
      rimLightRight.intensity = 2.5 + hoverGlow * 1.5;

      // Idle vertical breathing sway
      let breatheY = 0;
      let breatheScaleY = 1.0;
      let animOffsetX = 0;
      let animOffsetY = 0;
      let animOffsetZ = 0;
      let animRotX = 0;
      let animRotY = 0;
      let animRotZ = 0;

      if (!activeAnimation) {
        // Normal continuous float
        breatheY = Math.sin(time * 1.5) * 0.035;
        breatheScaleY = 1.0 + Math.sin(time * 1.5) * 0.008;
      } else {
        // Advance click animation progress
        animationTime += 0.016; 

        if (activeAnimation === 'jump') {
          const duration = 0.7;
          const prog = animationTime / duration;
          if (prog >= 1.0) {
            activeAnimation = null;
          } else {
            // Sine trajectory
            animOffsetY = Math.sin(prog * Math.PI) * 0.45;
            // Stretch/Squash physics
            const squash = Math.sin(prog * Math.PI * 2);
            breatheScaleY = 1.0 + (prog < 0.5 ? squash * 0.06 : squash * 0.1);
          }
        } else if (activeAnimation === 'giggle') {
          const duration = 1.0;
          const prog = animationTime / duration;
          if (prog >= 1.0) {
            activeAnimation = null;
          } else {
            // Rapid shake
            animOffsetX = Math.sin(animationTime * 40) * 0.025;
            animRotZ = Math.sin(animationTime * 30) * 0.03;
            animRotX = 0.12; // Tilt head forward
            
            // Pulse visor glow rapidly
            const pulseGlow = 0.5 + Math.sin(animationTime * 50) * 0.5;
            avatarScene.traverse((node) => {
              if (node.isMesh && node.name.includes('Head')) {
                if (node.material && node.material.emissive) {
                  node.material.emissive.setHex(0xeb4d6d);
                  node.material.emissiveIntensity = pulseGlow * 2.0;
                }
              }
            });
          }
        } else if (activeAnimation === 'greet') {
          const duration = 1.4;
          const prog = animationTime / duration;
          if (prog >= 1.0) {
            activeAnimation = null;
          } else {
            // Rock body side to side, nod head
            animRotZ = Math.sin(prog * Math.PI * 2) * 0.05;
            animOffsetX = Math.sin(prog * Math.PI * 2) * 0.03;
            animRotX = Math.sin(prog * Math.PI * 4) * 0.1;
          }
        }
      }

      // Apply coordinates and rotations to nodes
      if (pbrBody) {
        pbrBody.position.y = -0.95 + breatheY + animOffsetY;
        pbrBody.position.x = animOffsetX;
        pbrBody.position.z = animOffsetZ;
        // Fix mesh skewing/distortion by scaling uniformly on all axes using breatheScaleY
        const uniformScale = breatheScaleY;
        pbrBody.scale.set(0.95 * hoverScale * uniformScale, 0.95 * hoverScale * uniformScale, 0.95 * hoverScale * uniformScale);
        pbrBody.rotation.z = animRotZ;
      }

      // Apply arm rotations (pointing down in idle, waving in greeting)
      if (pbrArmLeft && pbrArmRight) {
        // Detect whether the model uses bones or separate meshes before applying rotations
        const isBones = pbrArmLeft.isBone || pbrArmRight.isBone || (pbrArmLeft.type === 'Bone') || (pbrArmRight.type === 'Bone');

        // Animate relative to the original imported rotations instead of using hardcoded angles
        let armLeftRot = originalLeftArmRotation.z + Math.sin(time * 1.5) * 0.02;
        let armRightRot = originalRightArmRotation.z - Math.sin(time * 1.5) * 0.02;

        if (activeAnimation === 'greet') {
          const duration = 1.4;
          const prog = animationTime / duration;
          const envelope = Math.sin(prog * Math.PI);
          // Wave relative to default arm down rotation
          const waveAngle = -1.5 + Math.sin(animationTime * 18) * 0.35;
          armRightRot = originalRightArmRotation.z + waveAngle * envelope;
        }

        // Apply preserved X and Y rotations along with dynamic Z rotation
        pbrArmLeft.rotation.x = originalLeftArmRotation.x;
        pbrArmLeft.rotation.y = originalLeftArmRotation.y;
        pbrArmLeft.rotation.z = armLeftRot;

        pbrArmRight.rotation.x = originalRightArmRotation.x;
        pbrArmRight.rotation.y = originalRightArmRotation.y;
        pbrArmRight.rotation.z = armRightRot;
      }

      // Head look tracking
      if (pbrHead) {
        let targetX = useGyro ? gyroY : mouseY;
        let targetY = useGyro ? gyroX : mouseX;

        // Reset if mouse is outside viewport OR if greeting is playing
        if (!isMouseInWindow || activeAnimation === 'greet') {
          targetX = 0;
          targetY = 0;
        }

        const maxHeadYaw = 0.38; // Left/Right
        const maxHeadPitch = 0.18; // Up/Down

        const headYaw = targetY * maxHeadYaw;
        const headPitch = -targetX * maxHeadPitch;

        // Smooth head rotation using lerp
        pbrHead.rotation.y += (headYaw - pbrHead.rotation.y) * 0.08;
        pbrHead.rotation.x += (headPitch - pbrHead.rotation.x) * 0.08;
        
        // Apply animation rotations
        pbrHead.rotation.x += animRotX;
        pbrHead.rotation.y += animRotY;

        // Apply emissive hover glow to visor/eyes
        if (!activeAnimation || activeAnimation !== 'giggle') {
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

      // Eye tracking (eyes rotate slightly faster and further than the head)
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
    }

    function resizeCanvas() {
      if (!container) return;
      width = container.clientWidth || 360;
      height = container.clientHeight || 480;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', resizeCanvas);
    renderLoop();
  }

  // Initialize About Avatar when DOM is ready
  setTimeout(() => {
    initAboutAvatar();
  }, 100);
});
