import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ── Accent palette matching your CSS vars ── */
const C = {
  accent:   0xe8ff6b,
  accent2:  0x5dd8c0,
  accent3:  0xe066a0,
  bg:       0x080810,
  bg2:      0x0d0d1c,
  bg3:      0x111128,
  desk:     0x1a1428,
  deskTop:  0x201830,
  monitor:  0x0a0a14,
  screen:   0x0a1a0a,
  dim:      0x2a2a44,
  dimmer:   0x16162a,
  wood:     0x1e1530,
  book1:    0xe8ff6b,
  book2:    0x5dd8c0,
  book3:    0xe066a0,
  book4:    0x7b6bff,
  lamp:     0x888899,
  mug:      0x333355,
};

export default function DeskScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    /* ══════════════════════════════════════
       RENDERER
    ══════════════════════════════════════ */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    /* ══════════════════════════════════════
       SCENE + CAMERA
    ══════════════════════════════════════ */
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080810, 0.055);

    const camera = new THREE.PerspectiveCamera(
      45,
      el.clientWidth / el.clientHeight,
      0.1,
      100
    );
    /* Positioned slightly above and in front — isometric-ish view */
    camera.position.set(3.5, 3.2, 5.5);
    camera.lookAt(0, 0.5, 0);

    /* ══════════════════════════════════════
       LIGHTS
    ══════════════════════════════════════ */
    /* Ambient — very dim */
    const ambient = new THREE.AmbientLight(0x1a1a2e, 1.2);
    scene.add(ambient);

    /* Screen glow light — accent yellow-green */
    const screenLight = new THREE.PointLight(0xe8ff6b, 2.5, 6);
    screenLight.position.set(0, 1.6, 1.2);
    scene.add(screenLight);

    /* Lamp light — warm */
    const lampLight = new THREE.PointLight(0xffe8a0, 1.8, 5);
    lampLight.position.set(-1.8, 2.4, 0.5);
    lampLight.castShadow = true;
    scene.add(lampLight);

    /* Rim light from back — accent-2 teal */
    const rimLight = new THREE.DirectionalLight(0x5dd8c0, 0.4);
    rimLight.position.set(-3, 4, -3);
    scene.add(rimLight);

    /* ══════════════════════════════════════
       HELPERS
    ══════════════════════════════════════ */
    const mat  = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, ...opts });
    const box  = (w, h, d)          => new THREE.BoxGeometry(w, h, d);
    const cyl  = (rt, rb, h, s)     => new THREE.CylinderGeometry(rt, rb, h, s || 16);
    const mesh = (geo, material)    => new THREE.Mesh(geo, material);

    function addMesh(geo, material, x, y, z, rx = 0, ry = 0, rz = 0) {
      const m = mesh(geo, material);
      m.position.set(x, y, z);
      m.rotation.set(rx, ry, rz);
      m.castShadow = true;
      m.receiveShadow = true;
      scene.add(m);
      return m;
    }

    /* ══════════════════════════════════════
       FLOOR (subtle grid plane)
    ══════════════════════════════════════ */
    const floorGeo = new THREE.PlaneGeometry(20, 20);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x06060f,
      roughness: 1,
      metalness: 0,
    });
    const floor = mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.01;
    floor.receiveShadow = true;
    scene.add(floor);

    /* Grid on floor */
    const grid = new THREE.GridHelper(14, 28, 0x1a1a30, 0x111120);
    grid.position.y = 0.001;
    scene.add(grid);

    /* ══════════════════════════════════════
       BACK WALL
    ══════════════════════════════════════ */
    addMesh(box(10, 6, 0.12), mat(0x0a0a14), 0, 2.5, -2.8);

    /* Wall accent stripe */
    addMesh(box(10, 0.05, 0.14), mat(C.accent, { emissive: 0xe8ff6b, emissiveIntensity: 0.15 }), 0, 1.0, -2.75);

    /* ══════════════════════════════════════
       DESK
    ══════════════════════════════════════ */
    /* Desktop surface */
    const deskTop = addMesh(box(4.4, 0.1, 1.8), mat(C.deskTop, { roughness: 0.6, metalness: 0.1 }), 0, 0.85, 0);

    /* Desk edge trim — accent glow */
    addMesh(
      box(4.42, 0.02, 0.02),
      mat(C.accent, { emissive: 0xe8ff6b, emissiveIntensity: 0.6 }),
      0, 0.91, 0.9
    );

    /* Desk legs */
    [[-1.9, -1.8], [-1.9, 1.8], [1.9, -1.8], [1.9, 1.8]].forEach(([x, z]) => {
      addMesh(box(0.08, 0.85, 0.08), mat(C.dim), x, 0.42, z * 0.5);
    });

    /* Desk side panels */
    addMesh(box(0.06, 0.85, 0.9), mat(C.dimmer), -2.15, 0.42, 0);
    addMesh(box(0.06, 0.85, 0.9), mat(C.dimmer),  2.15, 0.42, 0);

    /* ══════════════════════════════════════
       MONITOR
    ══════════════════════════════════════ */
    /* Stand base */
    addMesh(box(0.4, 0.04, 0.3), mat(C.dim, { roughness: 0.3, metalness: 0.8 }), 0, 0.92, -0.2);
    /* Stand neck */
    addMesh(box(0.06, 0.35, 0.06), mat(C.dim, { roughness: 0.3, metalness: 0.8 }), 0, 1.1, -0.2);

    /* Monitor body */
    const monitorBody = addMesh(
      box(1.8, 1.05, 0.06),
      mat(C.monitor, { roughness: 0.2, metalness: 0.9 }),
      0, 1.55, -0.2
    );

    /* Screen (emissive — the glow) */
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0d2010,
      emissive: new THREE.Color(0xe8ff6b),
      emissiveIntensity: 0.08,
      roughness: 1,
    });
    addMesh(box(1.65, 0.92, 0.01), screenMat, 0, 1.55, -0.165);

    /* Screen content lines (simulated code) */
    const lineMat = (color, intensity) => new THREE.MeshStandardMaterial({
      color,
      emissive: new THREE.Color(color),
      emissiveIntensity: intensity,
    });

    const codeLines = [
      { w: 0.6,  x: -0.35, y: 1.85, c: 0xe8ff6b, i: 0.8 },
      { w: 0.9,  x: -0.15, y: 1.72, c: 0x5dd8c0, i: 0.6 },
      { w: 0.5,  x: -0.45, y: 1.59, c: 0xa8a8c8, i: 0.3 },
      { w: 0.75, x: -0.1,  y: 1.46, c: 0xe066a0, i: 0.7 },
      { w: 0.4,  x: -0.5,  y: 1.33, c: 0x5dd8c0, i: 0.5 },
      { w: 0.65, x: -0.3,  y: 1.20, c: 0xe8ff6b, i: 0.4 },
    ];
    codeLines.forEach(({ w, x, y, c, i }) => {
      addMesh(box(w, 0.028, 0.005), lineMat(c, i), x, y, -0.158);
    });

    /* ══════════════════════════════════════
       KEYBOARD
    ══════════════════════════════════════ */
    const kbBase = addMesh(
      box(1.1, 0.04, 0.38),
      mat(0x0e0e20, { roughness: 0.4, metalness: 0.5 }),
      0.1, 0.915, 0.48
    );

    /* Key rows */
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 11; col++) {
        const keyMat = new THREE.MeshStandardMaterial({
          color: row === 0 && col === 5 ? C.accent : 0x1a1a2e,
          emissive: row === 0 && col === 5 ? new THREE.Color(0xe8ff6b) : new THREE.Color(0x111122),
          emissiveIntensity: row === 0 && col === 5 ? 0.4 : 0.1,
          roughness: 0.5,
        });
        const key = mesh(box(0.072, 0.022, 0.068), keyMat);
        key.position.set(
          0.1 + (col - 5) * 0.09,
          0.938,
          0.38 + (row - 1.5) * 0.085
        );
        scene.add(key);
      }
    }

    /* ══════════════════════════════════════
       MOUSE
    ══════════════════════════════════════ */
    addMesh(
      box(0.13, 0.045, 0.2),
      mat(0x0e0e20, { roughness: 0.3, metalness: 0.6 }),
      0.82, 0.918, 0.42
    );
    /* Mouse scroll wheel */
    addMesh(
      cyl(0.018, 0.018, 0.06, 8),
      mat(C.accent, { emissive: 0xe8ff6b, emissiveIntensity: 0.3 }),
      0.82, 0.938, 0.38,
      Math.PI / 2, 0, 0
    );

    /* ══════════════════════════════════════
       COFFEE MUG
    ══════════════════════════════════════ */
    /* Mug body */
    addMesh(cyl(0.1, 0.09, 0.22, 16), mat(C.mug, { roughness: 0.6 }), 1.6, 0.97, 0.1);
    /* Coffee surface */
    addMesh(
      new THREE.CircleGeometry(0.09, 16),
      mat(0x1a0e00, { roughness: 1 }),
      1.6, 1.08, 0.1,
      -Math.PI / 2, 0, 0
    );
    /* Steam particles (tiny boxes floating up) */
    for (let s = 0; s < 3; s++) {
      addMesh(
        box(0.01, 0.04, 0.01),
        mat(0x888899, { transparent: true, opacity: 0.3 }),
        1.6 + (s - 1) * 0.04, 1.15 + s * 0.06, 0.1
      );
    }
    /* Mug handle */
    const handleGeo = new THREE.TorusGeometry(0.055, 0.012, 8, 12, Math.PI);
    const handle = mesh(handleGeo, mat(C.mug, { roughness: 0.6 }));
    handle.position.set(1.71, 0.97, 0.1);
    handle.rotation.z = Math.PI / 2;
    scene.add(handle);

    /* ══════════════════════════════════════
       DESK LAMP
    ══════════════════════════════════════ */
    /* Base */
    addMesh(cyl(0.12, 0.14, 0.05, 16), mat(C.lamp, { roughness: 0.4, metalness: 0.8 }), -1.7, 0.875, 0.0);
    /* Arm 1 (vertical) */
    addMesh(box(0.03, 0.6, 0.03), mat(C.lamp, { roughness: 0.3, metalness: 0.9 }), -1.7, 1.18, 0.0);
    /* Joint */
    addMesh(cyl(0.04, 0.04, 0.04, 8), mat(C.lamp, { roughness: 0.3, metalness: 0.9 }), -1.7, 1.5, 0.0, 0, 0, Math.PI / 2);
    /* Arm 2 (angled) */
    addMesh(box(0.03, 0.55, 0.03), mat(C.lamp, { roughness: 0.3, metalness: 0.9 }), -1.55, 1.72, 0.2, 0, 0, -0.4);
    /* Shade (cone) */
    const shadeGeo = new THREE.ConeGeometry(0.18, 0.22, 12, 1, true);
    const shadeMesh = mesh(shadeGeo, mat(0xddddaa, { roughness: 0.5, side: THREE.DoubleSide }));
    shadeMesh.position.set(-1.38, 1.98, 0.42);
    shadeMesh.rotation.set(0.5, 0, 0.5);
    scene.add(shadeMesh);
    /* Bulb */
    addMesh(
      new THREE.SphereGeometry(0.05, 8, 8),
      mat(0xffe8a0, { emissive: 0xffe8a0, emissiveIntensity: 2 }),
      -1.38, 1.95, 0.42
    );

    /* ══════════════════════════════════════
       BOOKSHELF (back wall, left side)
    ══════════════════════════════════════ */
    /* Shelf board */
    addMesh(box(1.2, 0.05, 0.22), mat(C.wood), -1.6, 1.9, -2.65);
    addMesh(box(1.2, 0.05, 0.22), mat(C.wood), -1.6, 1.3, -2.65);

    /* Books */
    const books = [
      { w: 0.09, h: 0.42, c: C.book1, x: -2.1, y: 2.14 },
      { w: 0.07, h: 0.35, c: C.book2, x: -1.99, y: 2.1 },
      { w: 0.11, h: 0.44, c: C.book3, x: -1.87, y: 2.15 },
      { w: 0.08, h: 0.38, c: C.book4, x: -1.75, y: 2.12 },
      { w: 0.1,  h: 0.40, c: C.book1, x: -1.64, y: 2.13 },
      { w: 0.07, h: 0.36, c: C.book2, x: -1.53, y: 2.11 },

      { w: 0.09, h: 0.32, c: C.book3, x: -2.1,  y: 1.54 },
      { w: 0.11, h: 0.38, c: C.book4, x: -1.98, y: 1.57 },
      { w: 0.08, h: 0.30, c: C.book1, x: -1.86, y: 1.53 },
      { w: 0.10, h: 0.36, c: C.book2, x: -1.75, y: 1.56 },
    ];
    books.forEach(({ w, h, c, x, y }) => {
      addMesh(
        box(w, h, 0.18),
        mat(c, { roughness: 0.8, emissive: new THREE.Color(c), emissiveIntensity: 0.05 }),
        x, y, -2.65
      );
    });

    /* ══════════════════════════════════════
       DEVELOPER CHARACTER (geometric)
    ══════════════════════════════════════ */
    const charGroup = new THREE.Group();
    scene.add(charGroup);
    charGroup.position.set(-0.3, 0.0, 0.75);

    /* Chair base */
    const chairSeat = mesh(box(0.55, 0.06, 0.5), mat(0x181828, { roughness: 0.8 }));
    chairSeat.position.set(0, 0.6, 0.1);
    charGroup.add(chairSeat);

    /* Chair back */
    const chairBack = mesh(box(0.5, 0.6, 0.05), mat(0x181828, { roughness: 0.8 }));
    chairBack.position.set(0, 0.95, -0.12);
    charGroup.add(chairBack);

    /* Chair legs */
    [[-0.22, -0.18], [-0.22, 0.18], [0.22, -0.18], [0.22, 0.18]].forEach(([x, z]) => {
      const leg = mesh(box(0.04, 0.6, 0.04), mat(C.dim));
      leg.position.set(x, 0.3, z);
      charGroup.add(leg);
    });

    /* Body (torso) */
    const torsoMat = mat(0x1a1a30, { roughness: 0.8 });
    const torso = mesh(box(0.32, 0.4, 0.2), torsoMat);
    torso.position.set(0, 1.05, 0.05);
    charGroup.add(torso);

    /* Shirt accent stripe */
    const stripe = mesh(
      box(0.33, 0.03, 0.21),
      mat(C.accent, { emissive: 0xe8ff6b, emissiveIntensity: 0.3 })
    );
    stripe.position.set(0, 1.15, 0.05);
    charGroup.add(stripe);

    /* Head */
    const headGeo = new THREE.BoxGeometry(0.24, 0.24, 0.22);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x2a1f1a, roughness: 0.8 });
    const head = mesh(headGeo, headMat);
    head.position.set(0, 1.42, 0.05);
    charGroup.add(head);

    /* Eyes (tiny emissive boxes) */
    [-0.06, 0.06].forEach(x => {
      const eye = mesh(
        box(0.04, 0.025, 0.01),
        mat(C.accent, { emissive: 0xe8ff6b, emissiveIntensity: 1.5 })
      );
      eye.position.set(x, 1.44, 0.165);
      charGroup.add(eye);
    });

    /* Hair (flat box on top) */
    const hair = mesh(box(0.26, 0.08, 0.24), mat(0x111118, { roughness: 1 }));
    hair.position.set(0, 1.58, 0.03);
    charGroup.add(hair);

    /* Neck */
    const neck = mesh(cyl(0.05, 0.055, 0.1, 8), mat(0x2a1f1a, { roughness: 0.8 }));
    neck.position.set(0, 1.28, 0.05);
    charGroup.add(neck);

    /* Left arm (reaching toward keyboard) */
    const armL = mesh(box(0.1, 0.32, 0.1), torsoMat);
    armL.position.set(-0.22, 0.94, 0.05);
    armL.rotation.z = 0.3;
    charGroup.add(armL);

    /* Left forearm (angled down to keyboard) */
    const foreArmL = mesh(box(0.09, 0.28, 0.09), torsoMat);
    foreArmL.position.set(-0.28, 0.72, 0.22);
    foreArmL.rotation.x = 0.9;
    foreArmL.rotation.z = 0.15;
    charGroup.add(foreArmL);

    /* Right arm */
    const armR = mesh(box(0.1, 0.32, 0.1), torsoMat);
    armR.position.set(0.22, 0.94, 0.05);
    armR.rotation.z = -0.3;
    charGroup.add(armR);

    /* Right forearm */
    const foreArmR = mesh(box(0.09, 0.28, 0.09), torsoMat);
    foreArmR.position.set(0.28, 0.72, 0.22);
    foreArmR.rotation.x = 0.9;
    foreArmR.rotation.z = -0.15;
    charGroup.add(foreArmR);

    /* Headphones */
    const hpBand = mesh(
      new THREE.TorusGeometry(0.135, 0.018, 6, 20, Math.PI),
      mat(0x222235, { roughness: 0.4, metalness: 0.6 })
    );
    hpBand.position.set(0, 1.6, 0.05);
    charGroup.add(hpBand);

    [-0.135, 0.135].forEach(x => {
      const cup = mesh(cyl(0.055, 0.055, 0.04, 10), mat(0x1a1a28, { roughness: 0.5 }));
      cup.position.set(x, 1.6, 0.05);
      cup.rotation.z = Math.PI / 2;
      charGroup.add(cup);
    });

    /* ══════════════════════════════════════
       FLOATING CODE PARTICLES
       (drift up from keyboard / monitor)
    ══════════════════════════════════════ */
    const FLOAT_COUNT = 40;
    const floatPositions = new Float32Array(FLOAT_COUNT * 3);
    const floatSpeeds   = new Float32Array(FLOAT_COUNT);
    for (let i = 0; i < FLOAT_COUNT; i++) {
      floatPositions[i * 3]     = (Math.random() - 0.5) * 1.6;
      floatPositions[i * 3 + 1] = 1.0 + Math.random() * 1.5;
      floatPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.6 - 0.2;
      floatSpeeds[i] = 0.003 + Math.random() * 0.005;
    }
    const floatGeo = new THREE.BufferGeometry();
    floatGeo.setAttribute('position', new THREE.BufferAttribute(floatPositions, 3));
    const floatMat = new THREE.PointsMaterial({
      color: 0xe8ff6b,
      size: 0.025,
      transparent: true,
      opacity: 0.7,
    });
    const floatParticles = new THREE.Points(floatGeo, floatMat);
    scene.add(floatParticles);

    /* ══════════════════════════════════════
       SECOND MONITOR (portrait, right side)
    ══════════════════════════════════════ */
    /* Stand */
    addMesh(box(0.25, 0.03, 0.2), mat(C.dim), 1.3, 0.92, -0.25);
    addMesh(box(0.04, 0.3, 0.04), mat(C.dim), 1.3, 1.07, -0.25);
    /* Body */
    addMesh(box(0.7, 1.0, 0.05), mat(C.monitor, { roughness: 0.2, metalness: 0.9 }), 1.3, 1.57, -0.26);
    /* Screen */
    const screen2Mat = new THREE.MeshStandardMaterial({
      color: 0x060c18,
      emissive: new THREE.Color(0x5dd8c0),
      emissiveIntensity: 0.06,
    });
    addMesh(box(0.62, 0.88, 0.01), screen2Mat, 1.3, 1.57, -0.23);
    /* Graph bars on screen 2 */
    const barColors = [0x5dd8c0, 0xe8ff6b, 0xe066a0, 0x7b6bff];
    barColors.forEach((c, i) => {
      const h = 0.1 + (i % 3) * 0.08;
      addMesh(
        box(0.07, h, 0.005),
        mat(c, { emissive: new THREE.Color(c), emissiveIntensity: 0.7 }),
        1.06 + i * 0.115, 1.22 + h / 2, -0.225
      );
    });

    /* ══════════════════════════════════════
       PLANT (small succulent, right corner)
    ══════════════════════════════════════ */
    /* Pot */
    addMesh(cyl(0.1, 0.08, 0.14, 8), mat(0x2a1510, { roughness: 0.9 }), 1.85, 0.965, -0.55);
    /* Soil */
    addMesh(new THREE.CircleGeometry(0.09, 8), mat(0x1a0e00), 1.85, 1.035, -0.55, -Math.PI / 2);
    /* Leaves (simple cones) */
    [[0, 0.16, 0], [0.08, 0.1, 0.05], [-0.08, 0.08, -0.04], [0.04, 0.09, -0.08]].forEach(([dx, dy, dz]) => {
      const leafGeo = new THREE.ConeGeometry(0.055, 0.2, 6);
      const leafMat = mat(0x1a4020, { roughness: 0.9, emissive: 0x0a2010, emissiveIntensity: 0.2 });
      const leaf = mesh(leafGeo, leafMat);
      leaf.position.set(1.85 + dx, 1.04 + dy, -0.55 + dz);
      leaf.rotation.set(dx * 2, 0, -dx * 2);
      scene.add(leaf);
    });

    /* ══════════════════════════════════════
       MOUSE INTERACTION
    ══════════════════════════════════════ */
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    /* Store base camera position */
    const baseCamPos = { x: 3.5, y: 3.2, z: 5.5 };

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      mouse.y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ══════════════════════════════════════
       RESIZE
    ══════════════════════════════════════ */
    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener('resize', onResize);

    /* ══════════════════════════════════════
       ANIMATION LOOP
    ══════════════════════════════════════ */
    let frameId;
    let t = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.01;

      /* Smooth mouse follow — subtle camera drift */
      target.x += (mouse.x - target.x) * 0.04;
      target.y += (mouse.y - target.y) * 0.04;

      camera.position.x = baseCamPos.x + target.x * 0.6;
      camera.position.y = baseCamPos.y - target.y * 0.4;
      camera.lookAt(0, 0.8, 0);

      /* Screen glow pulse */
      screenLight.intensity = 2.2 + Math.sin(t * 1.5) * 0.3;
      screenMat.emissiveIntensity = 0.06 + Math.sin(t * 1.5) * 0.02;

      /* Typing animation — forearms bob alternately */
      foreArmL.position.y = 0.72 + Math.sin(t * 8) * 0.015;
      foreArmR.position.y = 0.72 + Math.sin(t * 8 + Math.PI) * 0.015;

      /* Subtle head bob (breathing) */
      head.position.y = 1.42 + Math.sin(t * 0.8) * 0.008;
      neck.position.y = 1.28 + Math.sin(t * 0.8) * 0.008;

      /* Floating code particles */
      const fp = floatGeo.attributes.position.array;
      for (let i = 0; i < FLOAT_COUNT; i++) {
        fp[i * 3 + 1] += floatSpeeds[i];
        /* Fade opacity by y — handled via single opacity, reset pos */
        if (fp[i * 3 + 1] > 2.8) {
          fp[i * 3]     = (Math.random() - 0.5) * 1.6;
          fp[i * 3 + 1] = 1.0;
          fp[i * 3 + 2] = (Math.random() - 0.5) * 0.6 - 0.2;
        }
      }
      floatGeo.attributes.position.needsUpdate = true;

      /* Steam bob */
      const steamT = Math.sin(t * 2);
      scene.children
        .filter(c => c.isMesh && c.position.x === 1.6 && c.position.y > 1.1 && c.position.y < 1.22)
        .forEach((s, i) => { s.position.y = 1.15 + i * 0.06 + steamT * 0.01; });

      /* Lamp light flicker — very subtle */
      lampLight.intensity = 1.75 + Math.sin(t * 3.1) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: 520,
        position: 'relative',
      }}
    />
  );
}
