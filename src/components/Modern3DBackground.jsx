import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Modern3DBackground
 *
 * Endless Ultra-Modern 3D Cybernetic Space for Citepoint:
 * - Truly ENDLESS Infinite Deep-Space Particle Flight (continuous forward warp stream with seamless Z-wrapping)
 * - Endless Constellation of Floating 3D Crystalline Polyhedra (Icosahedra, Octahedra, Dodecahedra, Tetrahedra)
 *   with dual-pass wireframe, glowing inner cores, spinning orbital citation rings, and seamless depth recycling
 * - Infinite Undulating Cybernetic Horizon Waves with multi-harmonic frequency propagation
 * - Kinetic Camera & Gyroscopic Mouse Interaction with gentle ambient breathing flight
 * - Deep space exponential fog (#010102) ensuring foreground content maintains 100% contrast & legibility
 * - Bulletproof lifecycle: zero memory leaks, graceful tab visibility resumption, capped DPR at 2
 */

export default function Modern3DBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = motionQuery.matches;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene & Depth Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x010102);
    // Exponential fog keeps center text calm and deep horizon mysterious
    scene.fog = new THREE.FogExp2(0x010102, 0.016);

    // 2. Perspective Camera
    const camera = new THREE.PerspectiveCamera(54, width / height, 0.1, 220);
    const CAM_BASE_Z = 26;
    camera.position.set(0, 2, CAM_BASE_Z);
    camera.lookAt(0, 0, -15);

    // 3. WebGL Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 4. Soft Circular Glow Texture for Particles
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.25, 'rgba(196, 203, 255, 0.9)');
      gradient.addColorStop(0.55, 'rgba(130, 143, 255, 0.4)');
      gradient.addColorStop(0.85, 'rgba(94, 106, 210, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleTexture = createCircleTexture();

    // 5. 3D Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x23253a, 1.4);
    scene.add(ambientLight);

    // Primary Lavender Key Light
    const primaryLight = new THREE.PointLight(0x828fff, 4.0, 95);
    primaryLight.position.set(16, 14, 12);
    scene.add(primaryLight);

    // Secondary Indigo Fill Light
    const secondaryLight = new THREE.PointLight(0x5e6ad2, 3.2, 80);
    secondaryLight.position.set(-18, 8, -10);
    scene.add(secondaryLight);

    // Top Soft Luminescence
    const topLight = new THREE.DirectionalLight(0xc4cbff, 0.55);
    topLight.position.set(0, 30, 10);
    scene.add(topLight);

    // ============================================================
    // 6. ENDLESS FLOATING 3D CRYSTALLINE POLYHEDRA
    // A corridor of diverse polyhedra recycling infinitely through depth
    // ============================================================
    const polyhedra = [];
    const Z_FAR_BOUND = -130;
    const Z_NEAR_BOUND = 32;

    const createCrystallineSolid = (geometry, initialPos, scale, rotSpeed, ringColor = 0x828fff) => {
      const group = new THREE.Group();
      group.position.copy(initialPos);

      // Outer Wireframe Geometry
      const wireMat = new THREE.MeshStandardMaterial({
        color: ringColor,
        wireframe: true,
        roughness: 0.15,
        metalness: 0.85,
        emissive: 0x5e6ad2,
        emissiveIntensity: 0.45,
        transparent: true,
        opacity: 0.65,
      });
      const wireMesh = new THREE.Mesh(geometry, wireMat);
      wireMesh.scale.setScalar(scale);
      group.add(wireMesh);

      // Inner Glowing Core
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xc4cbff,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
      });
      const coreMesh = new THREE.Mesh(geometry, coreMat);
      coreMesh.scale.setScalar(scale * 0.65);
      group.add(coreMesh);

      // Orbital Dashed Ring
      const ringRadius = scale * 1.55;
      const ringGeo = new THREE.RingGeometry(ringRadius - 0.04, ringRadius, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: ringColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI * 0.35;
      group.add(ringMesh);

      // Orbiting Citation Sparks
      const dustCount = 14;
      const dustGeo = new THREE.BufferGeometry();
      const dustPositions = new Float32Array(dustCount * 3);
      for (let d = 0; d < dustCount; d++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const dist = scale * (1.3 + Math.random() * 0.6);
        dustPositions[d * 3] = dist * Math.sin(phi) * Math.cos(theta);
        dustPositions[d * 3 + 1] = dist * Math.sin(phi) * Math.sin(theta);
        dustPositions[d * 3 + 2] = dist * Math.cos(phi);
      }
      dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
      const dustMat = new THREE.PointsMaterial({
        map: particleTexture,
        color: ringColor,
        size: 0.36,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const dustPoints = new THREE.Points(dustGeo, dustMat);
      group.add(dustPoints);

      scene.add(group);

      polyhedra.push({
        group,
        wireMesh,
        ringMesh,
        dustPoints,
        baseY: initialPos.y,
        baseX: initialPos.x,
        scale,
        rotSpeed,
        phase: Math.random() * Math.PI * 2,
        // Individual speed multiplier for parallax drift
        driftSpeedMultiplier: 0.8 + Math.random() * 0.4,
      });
    };

    // Geometries library
    const icoGeo = new THREE.IcosahedronGeometry(1, 0);
    const octGeo = new THREE.OctahedronGeometry(1, 0);
    const dodGeo = new THREE.DodecahedronGeometry(1, 0);
    const tetGeo = new THREE.TetrahedronGeometry(1, 0);

    // Initial population distributed along depth corridor (-120 to +10)
    // Placed in left and right peripheral corridors to keep center text legible
    const polySpecs = [
      { geo: icoGeo, pos: new THREE.Vector3(18, 4, -8), scale: 2.8, color: 0x828fff },
      { geo: octGeo, pos: new THREE.Vector3(-18, 3, -16), scale: 2.4, color: 0x5e6ad2 },
      { geo: dodGeo, pos: new THREE.Vector3(14, 11, -35), scale: 2.5, color: 0xc4cbff },
      { geo: tetGeo, pos: new THREE.Vector3(-15, -6, -24), scale: 1.8, color: 0x828fff },
      { geo: icoGeo, pos: new THREE.Vector3(-19, 9, -52), scale: 3.0, color: 0x828fff },
      { geo: octGeo, pos: new THREE.Vector3(16, -4, -68), scale: 2.2, color: 0x5e6ad2 },
      { geo: dodGeo, pos: new THREE.Vector3(-14, 12, -88), scale: 2.6, color: 0xc4cbff },
      { geo: icoGeo, pos: new THREE.Vector3(19, 5, -105), scale: 2.9, color: 0x828fff },
      { geo: tetGeo, pos: new THREE.Vector3(-17, -5, -120), scale: 2.0, color: 0x5e6ad2 },
    ];

    polySpecs.forEach((spec, idx) => {
      createCrystallineSolid(
        spec.geo,
        spec.pos,
        spec.scale,
        {
          x: (idx % 2 === 0 ? 0.005 : -0.005),
          y: (idx % 3 === 0 ? 0.007 : -0.006),
          z: 0.003,
        },
        spec.color
      );
    });

    // ============================================================
    // 7. ENDLESS 3D HORIZONTAL CYBERNETIC WAVE RIBBONS
    // Undulating sine waves sweeping across the lower horizon
    // ============================================================
    const ribbonCount = 8;
    const ribbonPoints = width < 768 ? 64 : 110;
    const ribbonWidth = 140;
    const ribbons = [];

    const ribbonGroup = new THREE.Group();
    ribbonGroup.position.set(0, -11, -20);
    scene.add(ribbonGroup);

    for (let r = 0; r < ribbonCount; r++) {
      const geo = new THREE.BufferGeometry();
      const posArray = new Float32Array(ribbonPoints * 3);
      const colArray = new Float32Array(ribbonPoints * 3);

      const zOffset = r * 5.0 - (ribbonCount * 2.5);
      const baseAlpha = 0.14 + (r / ribbonCount) * 0.28;

      for (let p = 0; p < ribbonPoints; p++) {
        const x = ((p / (ribbonPoints - 1)) - 0.5) * ribbonWidth;
        posArray[p * 3] = x;
        posArray[p * 3 + 1] = 0;
        posArray[p * 3 + 2] = zOffset;

        // Gradient from lavender to deep indigo
        const t = p / (ribbonPoints - 1);
        const col = new THREE.Color().lerpColors(
          new THREE.Color(0x5e6ad2),
          new THREE.Color(0x828fff),
          Math.sin(t * Math.PI)
        );
        colArray[p * 3] = col.r;
        colArray[p * 3 + 1] = col.g;
        colArray[p * 3 + 2] = col.b;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

      const mat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: baseAlpha,
        blending: THREE.AdditiveBlending,
        linewidth: 1.5,
      });

      const line = new THREE.Line(geo, mat);
      ribbonGroup.add(line);

      ribbons.push({
        line,
        geo,
        posArray,
        baseZOffset: zOffset,
        speed: 0.35 + r * 0.07,
        freq: 0.06 + r * 0.007,
        amp: 2.0 + r * 0.32,
        phase: r * 0.8,
      });
    }

    // ============================================================
    // 8. ENDLESS VOLUMETRIC 3D STELLAR PARTICLE FIELD
    // Flying forward continuously with seamless depth wrap-around
    // ============================================================
    const starCount = width < 768 ? 320 : 640;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const c1 = new THREE.Color(0x828fff);
    const c2 = new THREE.Color(0x5e6ad2);
    const c3 = new THREE.Color(0xffffff);

    // Scatter uniformly across a 3D tunnel [ -140 to 30 ]
    for (let s = 0; s < starCount; s++) {
      starPositions[s * 3] = (Math.random() - 0.5) * 170;
      starPositions[s * 3 + 1] = Math.random() * 65 - 18;
      // Z depth distributed continuously
      starPositions[s * 3 + 2] = -140 + Math.random() * 170;

      const pick = Math.random();
      const sColor = pick > 0.6 ? c1 : pick > 0.3 ? c2 : c3;
      starColors[s * 3] = sColor.r;
      starColors[s * 3 + 1] = sColor.g;
      starColors[s * 3 + 2] = sColor.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      map: particleTexture,
      size: width < 768 ? 0.42 : 0.52,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // ============================================================
    // 9. MOUSE & SCROLL TRACKING
    // ============================================================
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    let scrollY = window.scrollY || 0;
    let lastScrollY = scrollY;
    let scrollVelocity = 0;

    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / width) * 2 - 1;
      mouse.targetY = -(e.clientY / height) * 2 + 1;
    };

    const onScroll = () => {
      scrollY = window.scrollY || window.pageYOffset || 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener('resize', onResize, { passive: true });

    // ============================================================
    // 10. ANIMATION & ENDLESS STREAMING LOOP
    // ============================================================
    let rafId = null;
    let clock = new THREE.Clock();
    let isVisible = true;
    let accumulatedTime = 0;

    const animate = () => {
      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      accumulatedTime += delta;

      // Scroll velocity decay
      const scrollDiff = scrollY - lastScrollY;
      lastScrollY = scrollY;
      scrollVelocity += (scrollDiff * 0.06 - scrollVelocity) * 0.1;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // --- ENDLESS FORWARD STREAM VELOCITY ---
      // Base serene forward drift + dynamic scroll acceleration
      const forwardDrift = (2.2 + Math.abs(scrollVelocity) * 2.8) * delta;

      // 3D Camera ambient flight sway & gyroscopic tilt
      const camSwayX = Math.sin(accumulatedTime * 0.35) * 0.7;
      const camSwayY = Math.cos(accumulatedTime * 0.28) * 0.45;
      const camX = mouse.x * 4.2 + camSwayX;
      const camY = 2 + mouse.y * 2.2 + camSwayY;
      const camZ = CAM_BASE_Z;

      camera.position.set(camX, camY, camZ);
      camera.lookAt(mouse.x * 1.5, -0.8 + mouse.y * 0.8, -15);

      // Light drift follows cursor softly
      primaryLight.position.x = 16 + mouse.x * 8;
      primaryLight.position.y = 14 + mouse.y * 5;

      // ==========================================================
      // --- ENDLESS STELLAR PARTICLE FORWARD STREAM ---
      // Particles continuously fly forward past the camera & wrap
      // ==========================================================
      const starPos = starGeo.attributes.position.array;
      const starSpeed = 3.6 + Math.abs(scrollVelocity) * 3.2;

      for (let s = 0; s < starCount; s++) {
        // Move forward along Z
        starPos[s * 3 + 2] += starSpeed * delta;

        // If particle passes beyond the camera, wrap seamlessly back to far distance
        if (starPos[s * 3 + 2] > Z_NEAR_BOUND) {
          starPos[s * 3 + 2] = Z_FAR_BOUND + (starPos[s * 3 + 2] - Z_NEAR_BOUND);
          // Scatter slightly on new entry to prevent pattern repetition
          starPos[s * 3] = (Math.random() - 0.5) * 170;
          starPos[s * 3 + 1] = Math.random() * 65 - 18;
        }
      }
      starGeo.attributes.position.needsUpdate = true;
      // Gentle overall swirl
      starPoints.rotation.y = accumulatedTime * 0.008;

      // ==========================================================
      // --- ENDLESS RECYCLING 3D CRYSTALLINE POLYHEDRA ---
      // Shards drift forward through depth & wrap seamlessly to far Z
      // ==========================================================
      for (let p = 0; p < polyhedra.length; p++) {
        const poly = polyhedra[p];
        const grp = poly.group;

        // Advance forward along Z with individual drift speed
        grp.position.z += forwardDrift * poly.driftSpeedMultiplier;

        // Seamless wrap: when it passes behind the camera, reset to far horizon
        if (grp.position.z > Z_NEAR_BOUND) {
          grp.position.z = Z_FAR_BOUND + (grp.position.z - Z_NEAR_BOUND);
          // Re-randomize peripheral X to keep variation fresh
          const side = Math.random() > 0.5 ? 1 : -1;
          poly.baseX = side * (14 + Math.random() * 10);
          poly.baseY = Math.random() * 20 - 6;
        }

        // Continual rotation on all 3 axes
        grp.rotation.x += poly.rotSpeed.x;
        grp.rotation.y += poly.rotSpeed.y;
        grp.rotation.z += poly.rotSpeed.z;

        // Gentle organic levitation oscillation
        grp.position.y = poly.baseY + Math.sin(accumulatedTime * 1.1 + poly.phase) * 0.8;
        // Subtle peripheral push away from cursor
        grp.position.x = poly.baseX + mouse.x * 0.75;

        // Spin orbital rings
        if (poly.ringMesh) {
          poly.ringMesh.rotation.z += 0.009;
        }

        // Swirl citation dust
        if (poly.dustPoints) {
          poly.dustPoints.rotation.y -= poly.rotSpeed.y * 1.6;
        }
      }

      // ==========================================================
      // --- ENDLESS CYBERNETIC WAVE RIBBONS ---
      // Continuous harmonic waves undulating infinitely
      // ==========================================================
      for (let r = 0; r < ribbons.length; r++) {
        const rib = ribbons[r];
        const arr = rib.posArray;
        const time = accumulatedTime * rib.speed;

        for (let p = 0; p < ribbonPoints; p++) {
          const x = arr[p * 3];
          // Harmonic wave equation propagating across space & time
          const w1 = Math.sin(x * rib.freq + time + rib.phase) * rib.amp;
          const w2 = Math.cos(x * rib.freq * 0.65 - time * 0.85 + rib.baseZOffset * 0.08) * (rib.amp * 0.48);
          arr[p * 3 + 1] = w1 + w2;
        }

        rib.geo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);

      if (!isReducedMotion) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !isReducedMotion) {
        clock.start();
        animate();
      } else if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('focus', onVisibilityChange);

    // Initial trigger
    animate();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('focus', onVisibilityChange);

      particleTexture.dispose();
      starGeo.dispose();
      starMat.dispose();

      icoGeo.dispose();
      octGeo.dispose();
      dodGeo.dispose();
      tetGeo.dispose();

      ribbons.forEach((r) => {
        r.geo.dispose();
        r.line.material.dispose();
      });

      polyhedra.forEach((p) => {
        p.group.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
            else child.material.dispose();
          }
        });
        scene.remove(p.group);
      });

      scene.remove(ribbonGroup);
      scene.remove(starPoints);

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none select-none z-0"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
