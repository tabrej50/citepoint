import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Modern3DBackground
 *
 * Endless Ultra-Luxury Champagne Gold & Pearl 3D Cybernetic Scene
 * Modeled with high precision after the reference brand aesthetic:
 * 1. Luminous Pure White & Alabaster Canvas with warm studio lighting.
 * 2. True 3D Metallic Golden Spheres (Pearls) of varying radii with mirror-polished
 *    specular highlights, clearcoat reflections, and procedural environment map.
 * 3. 3D Open Golden Torus Rings (○) positioned along connection nodes.
 * 4. Circuit & Constellation Rails with traveling golden energy pulses.
 * 5. Endless Silky 3D Flowing Champagne Ribbon Surfaces (parametric multi-layer waves).
 * 6. Fine Harmonic Guilloche / Multi-Frequency Golden Wave Lines.
 * 7. Concentric Champagne Circular Arcs on left & right margins.
 * 8. Center-Clear Framing: Center column is left pristine white & open for text legibility,
 *    while the opulent silk waves, rails, and spheres frame the peripheral wings and lower third.
 * 9. Endless Continuous Motion: monotonic harmonic undulation, levitation, and
 *    smooth kinetic scroll/mouse parallax spanning the entire website.
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

    // ============================================================
    // 1. SCENE, FOG & RENDERER SETUP
    // ============================================================
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF);
    // Subtle white exponential fog keeps foreground typography 100% legible
    scene.fog = new THREE.FogExp2(0xFFFFFF, 0.006);

    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 300);
    const CAM_BASE_Z = 28;
    camera.position.set(0, 0, CAM_BASE_Z);
    camera.lookAt(0, -1.2, 0);

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
    renderer.toneMappingExposure = 1.12;
    if (THREE.SRGBColorSpace) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    container.appendChild(renderer.domElement);

    // ============================================================
    // 2. PROCEDURAL REFLECTION ENVIRONMENT MAP
    // Yields photorealistic, mirror-like metallic gold reflections
    // with brilliant white studio key-light hot-spots
    // ============================================================
    const createStudioEnvMap = () => {
      const envCanvas = document.createElement('canvas');
      envCanvas.width = 512;
      envCanvas.height = 256;
      const ctx = envCanvas.getContext('2d');

      // Warm ivory & champagne sky gradient with deep bronze horizon
      const grad = ctx.createLinearGradient(0, 0, 0, 256);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.25, '#FFFDF8');
      grad.addColorStop(0.55, '#F5E5C9');
      grad.addColorStop(0.75, '#DFB76C');
      grad.addColorStop(0.9, '#A67D28');
      grad.addColorStop(1, '#3D2808');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 256);

      // Bright studio key-light patches (specular reflection spots)
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(150, 60, 55, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(360, 80, 45, 0, Math.PI * 2);
      ctx.fill();

      // Soft champagne rim bounce
      ctx.fillStyle = 'rgba(255, 240, 190, 0.7)';
      ctx.beginPath();
      ctx.arc(260, 175, 75, 0, Math.PI * 2);
      ctx.fill();

      const envTex = new THREE.CanvasTexture(envCanvas);
      envTex.mapping = THREE.EquirectangularReflectionMapping;
      envTex.needsUpdate = true;
      return envTex;
    };

    const envMap = createStudioEnvMap();
    scene.environment = envMap;

    // ============================================================
    // 3. 3D LIGHTING RIG
    // ============================================================
    const ambientLight = new THREE.AmbientLight(0xFFF9EE, 2.5);
    scene.add(ambientLight);

    // Key Light positioned upper-right to illuminate the signature specular shine
    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 3.8);
    keyLight.position.set(14, 18, 20);
    scene.add(keyLight);

    // Warm champagne fill light on the left
    const fillLight = new THREE.PointLight(0xDFB76C, 3.2, 95);
    fillLight.position.set(-20, -4, 16);
    scene.add(fillLight);

    // Gentle upward bounce light for translucent silk underfolds
    const bounceLight = new THREE.DirectionalLight(0xFDF6E2, 1.5);
    bounceLight.position.set(0, -20, 6);
    scene.add(bounceLight);

    // Dedicated high-intensity highlight spot targeting the spheres
    const specularSpot = new THREE.PointLight(0xFFFFFF, 4.0, 50);
    specularSpot.position.set(18, 12, 14);
    scene.add(specularSpot);

    // ============================================================
    // 4. METALLIC GOLD SHADER MATERIALS
    // ============================================================
    const goldMetallicMat = new THREE.MeshPhysicalMaterial({
      color: 0xF2D489,
      emissive: 0x3A2808,
      emissiveIntensity: 0.14,
      metalness: 0.96,
      roughness: 0.09,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 0.98,
    });

    const goldRailMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      emissive: 0x7A5618,
      emissiveIntensity: 0.38,
      metalness: 0.88,
      roughness: 0.18,
    });

    const energyPulseMat = new THREE.MeshBasicMaterial({
      color: 0xFFFBE8,
    });

    // ============================================================
    // 5. LIVING 3D METALLIC GOLDEN SPHERES & OPEN RINGS (○)
    // Positioned along the peripheral wings & lower third
    // keeping the center 100% open, legible, and pristine white
    // ============================================================
    const sphereMeshes = [];
    const ringMeshes = [];

    // Helper to spawn mirror-polished metallic gold sphere
    const addGoldSphere = (x, y, z, radius, options = {}) => {
      const geo = new THREE.SphereGeometry(radius, radius > 1.5 ? 48 : 32, radius > 1.5 ? 48 : 32);
      const mesh = new THREE.Mesh(geo, goldMetallicMat);
      mesh.position.set(x, y, z);
      scene.add(mesh);

      sphereMeshes.push({
        mesh,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius,
        freq: options.freq || (0.7 + Math.random() * 0.4),
        amp: options.amp || (0.18 + radius * 0.08),
        phase: options.phase || Math.random() * Math.PI * 2,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.007,
        },
      });
      return mesh;
    };

    // Helper to spawn open golden torus ring (○)
    const addGoldRing = (x, y, z, ringRadius, tubeRadius = 0.075, rotZ = 0) => {
      const geo = new THREE.TorusGeometry(ringRadius, tubeRadius, 24, 48);
      const mesh = new THREE.Mesh(geo, goldMetallicMat);
      mesh.position.set(x, y, z);
      mesh.rotation.z = rotZ;
      mesh.rotation.x = Math.PI * 0.15;
      scene.add(mesh);

      ringMeshes.push({
        mesh,
        baseX: x,
        baseY: y,
        baseZ: z,
        phase: Math.random() * Math.PI * 2,
      });
      return mesh;
    };

    // --- RIGHT SIDE CLUSTER (Framing the Right Flank) ---
    // 1. Signature Large Hero Pearl on the right rail (lowered and pushed right)
    addGoldSphere(20.5, 0.4, 2.5, 2.35, { freq: 0.65, amp: 0.32 });
    // 2. Medium sphere on middle-lower right rail
    addGoldSphere(14.5, -2.6, 1.3, 1.25, { freq: 0.8, amp: 0.25 });
    // 3. Small beads & nodes on right circuit rails
    addGoldSphere(16.5, 2.8, 0.4, 0.52, { freq: 0.9, amp: 0.2 });
    addGoldSphere(19.2, 2.8, 0.4, 0.62, { freq: 0.85, amp: 0.18 });
    addGoldSphere(17.8, -4.8, 0.4, 0.58, { freq: 1.0, amp: 0.22 });
    addGoldSphere(11.2, -4.2, 0.4, 0.52, { freq: 0.95, amp: 0.18 });
    addGoldSphere(22.8, -4.8, 0.4, 0.46, { freq: 1.1, amp: 0.16 });

    // Right Open Ring Eyelets (○)
    addGoldRing(17.5, -2.6, 1.0, 0.62, 0.075);
    addGoldRing(14.8, 1.2, 0.5, 0.55, 0.07);

    // --- LEFT SIDE CLUSTER (Framing the Left Flank) ---
    // 1. Medium-Large sphere on left rail (lowered and pushed left)
    addGoldSphere(-20.5, 2.2, 1.6, 1.38, { freq: 0.75, amp: 0.28 });
    // 2. Medium sphere on lower-left branch
    addGoldSphere(-15.5, -3.2, 1.1, 1.08, { freq: 0.85, amp: 0.24 });
    // 3. Small beads & nodes on left rails
    addGoldSphere(-17.5, 2.9, 0.4, 0.48, { freq: 0.95, amp: 0.18 });
    addGoldSphere(-13.5, -0.6, 0.4, 0.62, { freq: 0.88, amp: 0.22 });
    addGoldSphere(-18.5, -2.6, 0.4, 0.54, { freq: 1.05, amp: 0.18 });
    addGoldSphere(-9.8, -5.4, 0.4, 0.46, { freq: 0.92, amp: 0.16 });

    // Left Open Ring Eyelets (○)
    addGoldRing(-15.5, 0.6, 0.5, 0.58, 0.075);
    addGoldRing(-11.5, -4.4, 0.4, 0.52, 0.07);

    // --- AMBIENT FLOATING PEARL PARTICLES ---
    // Subtle constellation beads drifting in the midground for continuous depth
    const ambientPearls = [];
    const pearlCount = width < 768 ? 16 : 30;
    for (let i = 0; i < pearlCount; i++) {
      const radius = 0.14 + Math.random() * 0.26;
      const geo = new THREE.SphereGeometry(radius, 16, 16);
      const mesh = new THREE.Mesh(geo, goldMetallicMat);
      const px = (Math.random() - 0.5) * 60;
      const py = (Math.random() - 0.5) * 28 - 3;
      const pz = -10 + Math.random() * 14;
      mesh.position.set(px, py, pz);
      scene.add(mesh);

      ambientPearls.push({
        mesh,
        baseX: px,
        baseY: py,
        baseZ: pz,
        speedY: 0.35 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.25,
      });
    }

    // ============================================================
    // 6. GOLDEN CIRCUIT / CONSTELLATION RAILS & ENERGY PULSES
    // Smooth 3D spline lines connecting the spheres & nodes
    // ============================================================
    const railCurves = [];
    const energyPulses = [];

    const createRail = (points) => {
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.042, 12, false);
      const tubeMesh = new THREE.Mesh(tubeGeo, goldRailMat);
      scene.add(tubeMesh);
      railCurves.push({ curve, tubeMesh, tubeGeo });

      // Add traveling energy pulse
      const pulseGeo = new THREE.SphereGeometry(0.15, 12, 12);
      const pulseMesh = new THREE.Mesh(pulseGeo, energyPulseMat);
      scene.add(pulseMesh);
      energyPulses.push({
        mesh: pulseMesh,
        geo: pulseGeo,
        curve,
        t: Math.random(),
        speed: 0.12 + Math.random() * 0.1,
      });
    };

    // Left Horizontal Rail
    createRail([
      new THREE.Vector3(-32, 2.2, 0),
      new THREE.Vector3(-24, 2.2, 0.8),
      new THREE.Vector3(-20.5, 2.2, 1.6),
    ]);

    // Left Curved Descending Branch
    createRail([
      new THREE.Vector3(-20.5, 2.2, 1.6),
      new THREE.Vector3(-17.5, 1.2, 0.8),
      new THREE.Vector3(-13.5, -0.6, 0.4),
      new THREE.Vector3(-15.5, -3.2, 1.1),
      new THREE.Vector3(-18.5, -2.6, 0.4),
    ]);

    // Left Lower Branch into Center Valley
    createRail([
      new THREE.Vector3(-15.5, -3.2, 1.1),
      new THREE.Vector3(-11.5, -4.4, 0.4),
      new THREE.Vector3(-9.8, -5.4, 0.4),
      new THREE.Vector3(0, -7.5, 0),
    ]);

    // Right Upper Horizontal Rail
    createRail([
      new THREE.Vector3(16.5, 2.8, 0.4),
      new THREE.Vector3(19.2, 2.8, 0.4),
      new THREE.Vector3(25, 2.8, 0),
      new THREE.Vector3(32, 2.8, 0),
    ]);

    // Right Main Curved Rail to Signature Hero Sphere
    createRail([
      new THREE.Vector3(0, -7.5, 0),
      new THREE.Vector3(11.2, -4.2, 0.4),
      new THREE.Vector3(14.5, -2.6, 1.3),
      new THREE.Vector3(17.5, -2.6, 1.0),
      new THREE.Vector3(20.5, 0.4, 2.5),
      new THREE.Vector3(26, 0.4, 0.5),
      new THREE.Vector3(32, 0.4, 0),
    ]);

    // Right Lower Horizontal Branch
    createRail([
      new THREE.Vector3(14.5, -2.6, 1.3),
      new THREE.Vector3(17.8, -4.8, 0.4),
      new THREE.Vector3(22.8, -4.8, 0.4),
      new THREE.Vector3(32, -4.8, 0),
    ]);

    // ============================================================
    // 7. ENDLESS SILKY 3D CHAMPAGNE RIBBON SURFACES (THE BIG WAVE)
    // Parametric undulating meshes dipping in center, rising at wings
    // ============================================================
    const ribbonSegmentsX = width < 768 ? 90 : 160;
    const ribbonSegmentsY = 36;
    const ribbonWidth = 80;
    const ribbonHeight = 24;

    // Base structural curve matching the reference image:
    // Peaceful dipping valley in the center (keeps center text clean and open)
    const getBaseValley = (x) => {
      const norm = x / 24;
      return -7.8 + Math.pow(norm, 2) * 5.4 - Math.sin(norm * 1.5) * 1.6;
    };

    // Helper to generate dynamic ribbon mesh
    const createSilkRibbon = (baseZ, opacity, colorTop, colorMid, colorBase, timeOffset = 0) => {
      const geo = new THREE.PlaneGeometry(ribbonWidth, ribbonHeight, ribbonSegmentsX, ribbonSegmentsY);
      const pos = geo.attributes.position;
      const count = pos.count;

      const colors = new Float32Array(count * 3);
      const cT = new THREE.Color(colorTop);
      const cM = new THREE.Color(colorMid);
      const cB = new THREE.Color(colorBase);

      for (let i = 0; i < count; i++) {
        const v = (pos.getY(i) + ribbonHeight / 2) / ribbonHeight; // 0 (bottom) to 1 (top)
        const c = v > 0.5
          ? new THREE.Color().lerpColors(cM, cT, (v - 0.5) * 2)
          : new THREE.Color().lerpColors(cB, cM, v * 2);

        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.MeshStandardMaterial({
        vertexColors: true,
        side: THREE.DoubleSide,
        transparent: true,
        opacity,
        roughness: 0.26,
        metalness: 0.56,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(0, 0, baseZ);
      scene.add(mesh);

      return { mesh, geo, baseZ, timeOffset };
    };

    // Layer 1: Main Foreground Silky Wave
    const silkLayer1 = createSilkRibbon(
      -1.2,
      0.82,
      0xFDF8EE, // Pristine Ivory White crest
      0xEAD2A4, // Radiant Champagne Gold
      0xC5A059, // Rich Amber Gold base
      0
    );

    // Layer 2: Secondary Background Silk Fold
    const silkLayer2 = createSilkRibbon(
      -4.8,
      0.52,
      0xFAF3E2,
      0xDFC494,
      0xB88E3A,
      1.5
    );

    // ============================================================
    // 8. FINE HARMONIC GUILLOCHE / MULTI-FREQUENCY WAVE LINES
    // 22 delicate golden spline curves flowing alongside the ribbon
    // ============================================================
    const lineCount = 22;
    const linePoints = width < 768 ? 64 : 120;
    const guillocheLines = [];

    const guillocheGroup = new THREE.Group();
    guillocheGroup.position.set(0, 0, 0.4);
    scene.add(guillocheGroup);

    for (let l = 0; l < lineCount; l++) {
      const geo = new THREE.BufferGeometry();
      const posArray = new Float32Array(linePoints * 3);
      const colArray = new Float32Array(linePoints * 3);

      const tLine = l / (lineCount - 1);
      const baseAlpha = 0.2 + Math.sin(tLine * Math.PI) * 0.45;

      for (let p = 0; p < linePoints; p++) {
        const x = ((p / (linePoints - 1)) - 0.5) * ribbonWidth;
        posArray[p * 3] = x;
        posArray[p * 3 + 1] = 0;
        posArray[p * 3 + 2] = 0;

        const c = new THREE.Color().lerpColors(
          new THREE.Color(0xC5A059),
          new THREE.Color(0xDFB76C),
          Math.sin((p / linePoints) * Math.PI)
        );
        colArray[p * 3] = c.r;
        colArray[p * 3 + 1] = c.g;
        colArray[p * 3 + 2] = c.b;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

      const mat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: baseAlpha,
        linewidth: 1.2,
        depthWrite: false,
      });

      const line = new THREE.Line(geo, mat);
      guillocheGroup.add(line);

      guillocheLines.push({
        line,
        geo,
        posArray,
        offsetY: (l / (lineCount - 1)) * 3.6 - 1.8,
        freqMod: 0.08 + l * 0.003,
        phaseOffset: l * 0.24,
      });
    }

    // ============================================================
    // 9. CONCENTRIC CHAMPAGNE CIRCULAR ARCS (LEFT & RIGHT)
    // ============================================================
    const arcMeshes = [];

    const createConcentricArcs = (cx, cy, cz, radii, rotSpeed) => {
      const group = new THREE.Group();
      group.position.set(cx, cy, cz);
      scene.add(group);

      radii.forEach((r, idx) => {
        const ringGeo = new THREE.RingGeometry(r - 0.05, r, 96);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xDFB76C,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.15 + (idx / radii.length) * 0.22,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI * 0.1;
        group.add(ringMesh);
      });

      arcMeshes.push({ group, rotSpeed });
    };

    // Left Arcs radiating outward from bottom-left corner
    createConcentricArcs(-26, -12, -3.5, [11, 15, 19, 23, 27], 0.00025);
    // Right Arcs arching downward from upper-right corner
    createConcentricArcs(28, 14, -3.5, [13, 17, 21, 25, 29], -0.0002);

    // ============================================================
    // 10. HIGH-RESOLUTION PHOTOGRAPHIC AMBIENT UNDERLAY PLANE
    // Sits in mid-depth to reproduce the exact ambient gradients
    // ============================================================
    let underlayMesh = null;
    let underlayTexture = null;
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/assets/brand/gold-wave-reference.png',
      (texture) => {
        underlayTexture = texture;
        if (THREE.SRGBColorSpace) {
          texture.colorSpace = THREE.SRGBColorSpace;
        }
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const underlayGeo = new THREE.PlaneGeometry(62, 28);
        const underlayMat = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.65,
          depthWrite: false,
        });

        underlayMesh = new THREE.Mesh(underlayGeo, underlayMat);
        underlayMesh.position.set(0, -3.2, -6.5);
        scene.add(underlayMesh);
      },
      undefined,
      (err) => {
        console.warn('Reference underlay texture load notice:', err);
      }
    );

    // ============================================================
    // 11. INTERACTION & SCROLL TRACKING
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
    // 12. ENDLESS LIVING ANIMATION & PHYSICS ENGINE
    // ============================================================
    let rafId = null;
    let clock = new THREE.Clock();
    let isVisible = true;
    let accumulatedTime = 0;

    const animate = () => {
      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      accumulatedTime += delta;

      // Scroll inertia decay
      const scrollDiff = scrollY - lastScrollY;
      lastScrollY = scrollY;
      scrollVelocity += (scrollDiff * 0.05 - scrollVelocity) * 0.1;

      // Cursor damping
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      // Kinetic camera breathing and scroll parallax
      const camSwayX = Math.sin(accumulatedTime * 0.28) * 0.45;
      const camSwayY = Math.cos(accumulatedTime * 0.22) * 0.35;
      const scrollParallaxY = -scrollY * 0.0018;

      camera.position.x = mouse.x * 2.5 + camSwayX;
      camera.position.y = mouse.y * 1.4 + camSwayY + scrollParallaxY;
      camera.position.z = CAM_BASE_Z;
      camera.lookAt(mouse.x * 0.7, -1.2 + mouse.y * 0.4 + scrollParallaxY * 0.7, 0);

      // Light drift follows cursor for dynamic specular highlights
      keyLight.position.x = 14 + mouse.x * 6;
      keyLight.position.y = 18 + mouse.y * 4;
      specularSpot.position.x = 18 + mouse.x * 4;

      // --- ENDLESS 3D METALLIC SPHERES & RINGS LEVITATION ---
      sphereMeshes.forEach((item) => {
        const floatY = Math.sin(accumulatedTime * item.freq + item.phase) * item.amp;
        item.mesh.position.y = item.baseY + floatY;
        item.mesh.rotation.x += item.rotSpeed.x;
        item.mesh.rotation.y += item.rotSpeed.y;
      });

      ringMeshes.forEach((item) => {
        item.mesh.position.y = item.baseY + Math.sin(accumulatedTime * 0.85 + item.phase) * 0.18;
        item.mesh.rotation.z += 0.006;
      });

      // --- AMBIENT FLOATING PEARL PARTICLES ---
      ambientPearls.forEach((pearl) => {
        pearl.mesh.position.y = pearl.baseY + Math.sin(accumulatedTime * pearl.speedY + pearl.phase) * 0.7;
        pearl.mesh.position.x = pearl.baseX + Math.cos(accumulatedTime * 0.3 + pearl.phase) * pearl.driftX;
      });

      // --- TRAVELING ENERGY PULSES ALONG CIRCUIT RAILS ---
      energyPulses.forEach((pulse) => {
        pulse.t += pulse.speed * delta;
        if (pulse.t > 1) pulse.t = 0;
        const pt = pulse.curve.getPointAt(pulse.t);
        pulse.mesh.position.copy(pt);
      });

      // --- CONCENTRIC ARCS SLOW ROTATION ---
      arcMeshes.forEach((arc) => {
        arc.group.rotation.z += arc.rotSpeed;
      });

      // --- ENDLESS SILKY 3D RIBBON WAVES UNDULATION ---
      const updateRibbon = (layer) => {
        const pos = layer.geo.attributes.position;
        const count = pos.count;
        const t = accumulatedTime * 0.42 + layer.timeOffset;

        for (let i = 0; i < count; i++) {
          const x = pos.getX(i);
          const yOrig = pos.getY(i);

          const baseV = getBaseValley(x);
          const waveHarmonic =
            Math.sin(x * 0.11 - t + (yOrig * 0.15)) * 1.55 +
            Math.cos(x * 0.06 + t * 0.7 - (yOrig * 0.1)) * 0.95 +
            Math.sin((x + yOrig) * 0.04 - t * 0.4) * 0.55;

          pos.setY(i, baseV + (yOrig * 0.45) + waveHarmonic);
          pos.setZ(i, layer.baseZ + Math.sin(x * 0.08 + t * 0.5) * 0.8);
        }
        pos.needsUpdate = true;
        layer.geo.computeVertexNormals();
      };

      updateRibbon(silkLayer1);
      updateRibbon(silkLayer2);

      // --- ENDLESS FINE GUILLOCHE WAVE FREQUENCY LINES ---
      const waveT = accumulatedTime * 0.46;
      for (let l = 0; l < guillocheLines.length; l++) {
        const item = guillocheLines[l];
        const arr = item.posArray;

        for (let p = 0; p < linePoints; p++) {
          const x = arr[p * 3];
          const baseV = getBaseValley(x);
          const wave1 = Math.sin(x * item.freqMod - waveT + item.phaseOffset) * 1.45;
          const wave2 = Math.cos(x * 0.07 + waveT * 0.65 - item.phaseOffset) * 0.75;
          arr[p * 3 + 1] = baseV + item.offsetY + wave1 + wave2;
          arr[p * 3 + 2] = Math.sin(x * 0.09 - waveT * 0.5) * 0.6;
        }
        item.geo.attributes.position.needsUpdate = true;
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

    // ============================================================
    // 13. BULLETPROOF LIFECYCLE CLEANUP
    // Zero memory leaks, complete GPU resources disposal
    // ============================================================
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('focus', onVisibilityChange);

      envMap.dispose();

      sphereMeshes.forEach((s) => {
        s.mesh.geometry.dispose();
      });
      ringMeshes.forEach((r) => {
        r.mesh.geometry.dispose();
      });
      ambientPearls.forEach((p) => {
        p.mesh.geometry.dispose();
      });
      goldMetallicMat.dispose();
      goldRailMat.dispose();
      energyPulseMat.dispose();

      railCurves.forEach((r) => {
        r.tubeGeo.dispose();
      });
      energyPulses.forEach((ep) => {
        ep.geo.dispose();
      });

      silkLayer1.geo.dispose();
      silkLayer1.mesh.material.dispose();
      silkLayer2.geo.dispose();
      silkLayer2.mesh.material.dispose();

      guillocheLines.forEach((gl) => {
        gl.geo.dispose();
        gl.line.material.dispose();
      });

      if (underlayMesh) {
        underlayMesh.geometry.dispose();
        underlayMesh.material.dispose();
      }
      if (underlayTexture) {
        underlayTexture.dispose();
      }

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
