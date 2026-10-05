import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Modern3DBackground
 *
 * Ultra-Modern 3D Cybernetic Space for Citepoint (GEO / AI Search Optimization):
 * - Floating 3D Crystalline Polyhedra (Icosahedron, Octahedron, Dodecahedron)
 *   with dual-pass glowing wireframe, translucent inner core, and orbital citation rings
 * - Smooth 3D Multi-Harmonic Wave Ribbons flowing across the lower horizon (no vertical stripes)
 * - Volumetric 3D Deep Space Particle Field with real stereoscopic depth of field
 * - Interactive 3D Gyroscopic Camera: pans and tilts with mouse momentum
 * - Scroll-driven 3D flight: camera glides through the space as user navigates
 * - Atmospheric exponential depth fog (#010102) ensuring foreground text has 100% contrast
 * - High performance: DPR capped at 2, auto-pauses on background tab, respects prefers-reduced-motion
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
    scene.fog = new THREE.FogExp2(0x010102, 0.020);

    // 2. Perspective Camera
    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 200);
    camera.position.set(0, 2, 28);
    camera.lookAt(0, 0, -10);

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
    const primaryLight = new THREE.PointLight(0x828fff, 4.2, 85);
    primaryLight.position.set(16, 14, 12);
    scene.add(primaryLight);

    // Secondary Indigo Fill Light
    const secondaryLight = new THREE.PointLight(0x5e6ad2, 3.2, 70);
    secondaryLight.position.set(-18, 8, -6);
    scene.add(secondaryLight);

    // Top Luminescence
    const topLight = new THREE.DirectionalLight(0xc4cbff, 0.6);
    topLight.position.set(0, 30, 10);
    scene.add(topLight);

    // ============================================================
    // 6. FLOATING 3D CRYSTALLINE KNOWLEDGE POLYHEDRA
    // ============================================================
    const polyhedra = [];

    const createCrystallineSolid = (geometry, pos, scale, rotSpeed, ringColor = 0x828fff) => {
      const group = new THREE.Group();
      group.position.copy(pos);

      // Outer Wireframe Geometry
      const wireMat = new THREE.MeshStandardMaterial({
        color: 0x828fff,
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
      const dustCount = 16;
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
        size: 0.38,
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
        baseY: pos.y,
        baseX: pos.x,
        scale,
        rotSpeed,
        phase: Math.random() * Math.PI * 2,
      });
    };

    // 1. Primary Icosahedron (Right Flank)
    createCrystallineSolid(
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.Vector3(17, 4, -8),
      3.0,
      { x: 0.005, y: 0.007, z: 0.003 },
      0x828fff
    );

    // 2. Secondary Octahedron (Left Flank)
    createCrystallineSolid(
      new THREE.OctahedronGeometry(1, 0),
      new THREE.Vector3(-17, 3, -11),
      2.5,
      { x: -0.006, y: 0.006, z: -0.004 },
      0x5e6ad2
    );

    // 3. High Dodecahedron (Upper Right Distance)
    createCrystallineSolid(
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.Vector3(11, 12, -24),
      2.2,
      { x: 0.004, y: -0.005, z: 0.004 },
      0xc4cbff
    );

    // 4. Low Foreground Tetrahedron (Far Left)
    if (width > 768) {
      createCrystallineSolid(
        new THREE.TetrahedronGeometry(1, 0),
        new THREE.Vector3(-14, -6, 0),
        1.6,
        { x: 0.008, y: 0.009, z: 0.006 },
        0x828fff
      );
    }

    // ============================================================
    // 7. SMOOTH 3D HORIZONTAL WAVE RIBBONS (NO VERTICAL STRIPES)
    // Undulating sine waves sweeping across the lower horizon
    // ============================================================
    const ribbonCount = 7;
    const ribbonPoints = width < 768 ? 64 : 100;
    const ribbonWidth = 130;
    const ribbons = [];

    const ribbonGroup = new THREE.Group();
    ribbonGroup.position.set(0, -11, -16);
    scene.add(ribbonGroup);

    for (let r = 0; r < ribbonCount; r++) {
      const geo = new THREE.BufferGeometry();
      const posArray = new Float32Array(ribbonPoints * 3);
      const colArray = new Float32Array(ribbonPoints * 3);

      const zOffset = r * 4.5 - (ribbonCount * 2);
      const baseAlpha = 0.15 + (r / ribbonCount) * 0.25;

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
        zOffset,
        speed: 0.4 + r * 0.08,
        freq: 0.065 + r * 0.008,
        amp: 2.2 + r * 0.35,
        phase: r * 0.85,
      });
    }

    // ============================================================
    // 8. VOLUMETRIC 3D STELLAR PARTICLE FIELD
    // Soft glowing starlight points at varying depths
    // ============================================================
    const starCount = width < 768 ? 240 : 480;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const c1 = new THREE.Color(0x828fff);
    const c2 = new THREE.Color(0x5e6ad2);
    const c3 = new THREE.Color(0xffffff);

    for (let s = 0; s < starCount; s++) {
      starPositions[s * 3] = (Math.random() - 0.5) * 160;
      starPositions[s * 3 + 1] = Math.random() * 55 - 12;
      starPositions[s * 3 + 2] = (Math.random() - 0.5) * 120 - 15;

      const pick = Math.random();
      const sColor = pick > 0.65 ? c1 : pick > 0.35 ? c2 : c3;
      starColors[s * 3] = sColor.r;
      starColors[s * 3 + 1] = sColor.g;
      starColors[s * 3 + 2] = sColor.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      map: particleTexture,
      size: width < 768 ? 0.38 : 0.48,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
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

    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / width) * 2 - 1;
      mouse.targetY = -(e.clientY / height) * 2 + 1;
    };

    const onScroll = () => {
      const maxScroll = (document.documentElement.scrollHeight - window.innerHeight) || 3000;
      targetScrollProgress = Math.min(Math.max((window.scrollY || window.pageYOffset || 0) / maxScroll, 0), 1);
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
    // 10. ANIMATION & 3D PHYSICS LOOP
    // ============================================================
    let rafId = null;
    let clock = new THREE.Clock();
    let isVisible = true;

    const animate = () => {
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll lerp
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.05;

      // 3D Camera flight & gyroscopic tilt
      const camY = 2 - scrollProgress * 5.0 + mouse.y * 2.2;
      const camZ = 28 - scrollProgress * 14.0;
      const camX = mouse.x * 4.5;

      camera.position.set(camX, camY, camZ);
      camera.lookAt(mouse.x * 1.5, -1 + mouse.y * 0.8, -12);

      // Light drift follows cursor softly
      primaryLight.position.x = 16 + mouse.x * 8;
      primaryLight.position.y = 14 + mouse.y * 5;

      // --- ANIMATE 3D WAVE RIBBONS ---
      for (let r = 0; r < ribbons.length; r++) {
        const rib = ribbons[r];
        const arr = rib.posArray;
        const time = elapsed * rib.speed;

        for (let p = 0; p < ribbonPoints; p++) {
          const x = arr[p * 3];
          // Harmonic wave equation
          const w1 = Math.sin(x * rib.freq + time + rib.phase) * rib.amp;
          const w2 = Math.cos(x * rib.freq * 0.6 - time * 0.8) * (rib.amp * 0.45);
          arr[p * 3 + 1] = w1 + w2;
        }

        rib.geo.attributes.position.needsUpdate = true;
      }

      // --- ANIMATE 3D CRYSTALLINE POLYHEDRA ---
      for (let p = 0; p < polyhedra.length; p++) {
        const poly = polyhedra[p];
        const grp = poly.group;

        grp.rotation.x += poly.rotSpeed.x;
        grp.rotation.y += poly.rotSpeed.y;
        grp.rotation.z += poly.rotSpeed.z;

        // Levitation
        grp.position.y = poly.baseY + Math.sin(elapsed * 1.1 + poly.phase) * 0.75;
        // Subtle drift away from mouse
        grp.position.x = poly.baseX + mouse.x * 0.8;

        // Spin ring
        if (poly.ringMesh) {
          poly.ringMesh.rotation.z += 0.008;
        }

        // Orbiting dust
        if (poly.dustPoints) {
          poly.dustPoints.rotation.y -= poly.rotSpeed.y * 1.6;
        }
      }

      // --- STELLAR STARS ROTATION ---
      starPoints.rotation.y = elapsed * 0.012;

      renderer.render(scene, camera);

      if (!isReducedMotion) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !isReducedMotion) {
        lastTime = performance.now();
        clock.start();
        animate();
      } else if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    if (isReducedMotion) {
      animate();
    } else {
      animate();
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      particleTexture.dispose();
      starGeo.dispose();
      starMat.dispose();

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
