import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const AnimatedStat = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const target = parseInt(value.replace(/\D/g, ''));
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplayValue(target);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-square">
      <div className="stat-number">
        {value.includes('+') && '+'}{displayValue.toLocaleString()}{value.includes('h') && 'h'}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};
// ---------------------------------------------------------
const SLIDES = [
  {
    eyebrow: 'NUESTRA EMPRESA',
    title: 'GRUPO ORTIZ',
    text: `Grupo Ortiz opera a través de seis divisiones especializadas, lo que nos permite atender de manera integral las necesidades de empaque y embalaje de nuestros clientes.`
  },
  {
    eyebrow: 'DIVISIONES',
    title: 'SOLUCIONES',
    text: `Arpillas, Cuerdas, Empaque flexible, Rafia, Sacos, Stretch film y esquineros.`
  },
  {
    eyebrow: 'DESARROLLO',
    title: 'INNOVACIÓN',
    text: `Mantenemos un proceso constante de desarrollo de nuevos productos, adaptándonos a las demandas del mercado y a las necesidades de cada industria.`
  }
];


export default function GlobePlanetClient() {
  const [slideIndex, setSlideIndex] = useState(0);
const isScrolling = useRef(false);

  const [showUI, setShowUI] = useState(false);
  const [isPlanetLoaded, setIsPlanetLoaded] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [latamCount, setLatamCount] = useState(0);
  const [europeCount, setEuropeCount] = useState(0);

  const latamTextRef = useRef(null);
  const europeTextRef = useRef(null);
  const [latamLineWidth, setLatamLineWidth] = useState(0);
  const [europeLineWidth, setEuropeLineWidth] = useState(0);

useEffect(() => {
  if (showUI) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [showUI]);

useEffect(() => {
  const onWheel = (e) => {
    if (!showUI) return;
    if (isScrolling.current) return;

    isScrolling.current = true;

    if (e.deltaY > 0) {
      setSlideIndex(i => Math.min(i + 1, SLIDES.length - 1));
    } else {
      setSlideIndex(i => Math.max(i - 1, 0));
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 700);
  };

  window.addEventListener('wheel', onWheel, { passive: true });
  return () => window.removeEventListener('wheel', onWheel);
}, [showUI]);



  useEffect(() => {
    if (showArrows) {
      // Calcular ancho de las líneas según el texto
      if (latamTextRef.current) setLatamLineWidth(latamTextRef.current.offsetWidth);
      if (europeTextRef.current) setEuropeLineWidth(europeTextRef.current.offsetWidth);

      // Animación conteo
      let latam = 0;
      const latamInterval = setInterval(() => {
        if (latam < 33) { latam++; setLatamCount(latam); } else clearInterval(latamInterval);
      }, 40);

      let eu = 0;
      const euInterval = setInterval(() => {
        if (eu < 44) { eu++; setEuropeCount(eu); } else clearInterval(euInterval);
      }, 40);
    }
  }, [showArrows]);

  useEffect(() => {
    const container = document.getElementById('planetContainer');
    if (!container) return;
    container.innerHTML = '';

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = isMobile ? 5.2 : isTablet ? 4.6 : 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(0, 0, 5);
    scene.add(light);

    const pivot = new THREE.Group();
    pivot.scale.set(0, 0, 0);
    scene.add(pivot);

    let planetRef = null;
    let glowSprite = null; 

    const loader = new GLTFLoader();
    const texLoader = new THREE.TextureLoader();
    loader.load('/assets/models/mundo.glb', (gltf) => {
      const planet = gltf.scene;
      planetRef = planet;

      planet.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.emissive = new THREE.Color(0xff7a00);
          child.material.emissiveIntensity = 0;
          child.material.emissiveMap = texLoader.load('/assets/textures/latam_emissive.png');
          child.material.needsUpdate = true;
        }
      });

      const box = new THREE.Box3().setFromObject(planet);
      const center = box.getCenter(new THREE.Vector3());
      planet.position.sub(center);

      pivot.add(planet);
      
      // La lógica de rotación inicial se maneja en el animate loop, 
      // pero seteamos el loaded aquí.
      setIsPlanetLoaded(true);
    });

    const LATAM_ROT_Y = -4.9;
    const EXTRA_ROT_Y = 0.35;
    const TARGET_PIVOT_X = isMobile ? 0 : isTablet ? -0.6 : -1;

    let targetRotY = 0;
    let autoRotate = true;
    let latamLocked = false;
    let hasClicked = false;

    const targetScale = new THREE.Vector3(
      isMobile ? 0.85 : 1,
      isMobile ? 0.85 : 1,
      isMobile ? 0.85 : 1
    );

    container.addEventListener('click', () => {
      // Solo permitir click si el planeta está detenido
      if (!autoRotate && !hasClicked) {
        hasClicked = true;
        setShowUI(true);
        setShowArrows(false); // Oculta flechas y números
        targetRotY = LATAM_ROT_Y + EXTRA_ROT_Y;
      }
    });

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      pivot.scale.lerp(targetScale, 0.03);

      if (autoRotate) {
        const diff = LATAM_ROT_Y - targetRotY;

        // Antes de detenerse, agregar glow 2 segundos antes
        if (!glowSprite && Math.abs(diff) < 0.04) { 
          const glowTexture = new THREE.TextureLoader().load('/assets/textures/glow.png');
          const glowMaterial = new THREE.SpriteMaterial({
            map: glowTexture,
            color: 0xff7a00,
            transparent: true,
            opacity: 1.9,
            blending: THREE.AdditiveBlending
          });
          glowSprite = new THREE.Sprite(glowMaterial);
          glowSprite.scale.set(3.5, 3.5, 1);
          glowSprite.position.set(0.6, -0, -0.1);
          pivot.add(glowSprite);
        }

        if (Math.abs(diff) > 0.01) {
          targetRotY += diff * 0.02;
        } else {
          autoRotate = false;
          latamLocked = true;
          setShowArrows(true);
        }
      }

      // Animación de resplandor si existe
      if (glowSprite) {
        glowSprite.material.opacity = 0.5 + Math.sin(Date.now() * 0.005) * 0.3;
      }

      pivot.rotation.y += (targetRotY - pivot.rotation.y) * 0.06;
      pivot.rotation.x += (0 - pivot.rotation.x) * 0.1;

      if (hasClicked) pivot.position.x += (TARGET_PIVOT_X - pivot.position.x) * 0.05;

      if (latamLocked && planetRef) {
        planetRef.traverse((child) => {
          if (child.isMesh && child.material?.emissiveMap) {
            const blink = 0.6 + Math.sin(Date.now() * 0.01) * 0.3;
            child.material.emissiveIntensity += (blink - child.material.emissiveIntensity) * 0.05;
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      container.innerHTML = '';
    };
  }, []);

 return (
    <div className="scene-wrapper">
      <div className="planet-wrap">
        <div id="planetContainer" />
      </div>

      {showUI && (
        <div className="ui-wrap">
          {/* ---- INICIO NUEVA BARRA SLIDER ---- */}
          <div className="slider-sidebar">
             <div className="slider-diamond"></div>
             <div className="slider-track">
                <div className="slider-active-bar"></div>
             </div>
             <div className="slider-diamond"></div>
             <div className="slider-label">DESLIZA</div>
          </div>
          {/* ---- FIN NUEVA BARRA SLIDER ---- */}

          <div className="ui-text-content">
    <span className="ui-eyebrow">
  {SLIDES[slideIndex].eyebrow}
</span>

<h1 className="ui-title">
  {SLIDES[slideIndex].title}
</h1>

<p className="ui-description">
  {SLIDES[slideIndex].text}
</p>


            <button className="ui-btn">LEARN MORE</button>
          </div>
        </div>
      )}

      {showArrows && (
        <>
          {/* LATAM */}
          <div
            className="arrow-line2"
            style={{ top: '60%', left: '8%', width: `${latamLineWidth}px` }}
          />
          <div ref={latamTextRef} className="arrow-text" style={{ top: '55%', left: '8%' }}>
            LATINOAMÉRICA
          </div>
          <div className="country-count" style={{ top: '62%', left: '8%' }}>
            {latamCount} PAISES
          </div>

          {/* EUROPA */}
          <div
            className="arrow-line2"
            style={{ top: '30%', left: '72%', width: `${europeLineWidth}px` }}
          />
          <div ref={europeTextRef} className="arrow-text" style={{ top: '25%', left: '72%' }}>
            EUROPA
          </div>
          <div className="country-count" style={{ top: '32%', left: '72%' }}>
            {europeCount} PAISES
          </div>
        </>
      )}

<style>{`
  /* Aplica las fuentes globalmente */
  body, html, .scene-wrapper, .planet-wrap, #planetContainer,
  .ui-wrap, .ui-eyebrow, .ui-title, .ui-description, .ui-btn,
  .arrow-text, .country-count, .country-list, .slider-label {
    font-family: 'Blauer Neue', 'Conthic', 'Morganite Pro', sans-serif;
  }



  .scene-wrapper { 
    position: relative; 
    width: 100%; 
    height: 100vh; 
    overflow: visible;
    display: flex; 
    align-items: center; 
    justify-content: center; 
  }

  .planet-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden; 
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5.4%;
  }

  #planetContainer {
    width: 100%;
    height: 100%;
  }
    .scene-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

  /* --- CONTENEDOR PRINCIPAL --- */
  .ui-wrap { 
    position: absolute; 
    right: 8%; 
    top: auto; 
    transform: none; 
    max-width: 650px; 
    pointer-events: none; 
    background: transparent;
    display: flex; 
    
    /* Mantiene el texto a la izquierda y el slider a la derecha visualmente */
    flex-direction: row-reverse; 
    
    gap: 35px;
    align-items: center;
  }

  /* --- ESTILOS DE LA BARRA SLIDER --- */
  .slider-sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 180px;
    pointer-events: auto;
  }

  .slider-diamond {
    width: 6px;
    height: 6px;
    background-color: #FB670B;
    transform: rotate(45deg);
    margin: 4px 0;
  }

  .slider-track {
    flex: 1;
    width: 1px;
    background: rgba(255, 255, 255, 0.3);
    position: relative;
    margin: 4px 0;
  }

  .slider-active-bar {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 40%;
    background-color: #FB670B;
  }

  /* --- ETIQUETA 'DESLIZA' --- */
  .slider-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
    /* CAMBIO: Coloca el texto a la derecha de la barra */
    left: 20px; 
    right: auto;
    
    color: #FB670B;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 600;
    white-space: nowrap;
  }

  /* --- CONTENIDO DE TEXTO --- */
  .ui-text-content {
    flex: 1;
    /* CAMBIO: Texto alineado a la izquierda */
    text-align: left; 
  }

  .ui-eyebrow { 
    font-size: 22px; 
    letter-spacing: 2px; 
    opacity: 0.6; 
    background: transparent; 
    display: block;
    color: #fff;
  }
    @keyframes fadeSlide {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

    .ui-eyebrow,
.ui-title,
.ui-description {
  animation: fadeSlide 0.6s ease both;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


  .ui-title { 
    font-size: 49px; 
    margin: 14px 0;
    background: transparent; 
    color: #fff;
  }

  .ui-description { 
    font-size: 14px; 
    line-height: 1.7; 
    opacity: 0.75; 
    margin-bottom: 24px; 
    color: #fff;
    /* Asegura que el margen se resetee para alineación izquierda */
    margin-right: auto; 
    margin-left: 0;
  }

  .ui-btn { 
    padding: 12px 28px; 
    border-radius: 24px; 
    border: none; 
    font-weight: 600; 
    cursor: pointer; 
    pointer-events: auto; 
    background: #fff;
    color: #000;
  }

  .arrow-line2 {
    position: absolute;
    height: 3px;
    background: #FB670B;
    z-index: 10;
  }

  .arrow-text { 
    position: absolute; 
    color: var(--arrow-text-color, #fff); 
    font-size: 33px; 
    font-weight: 600; 
  }

  .country-count { 
    position: absolute; 
    color: #FB670B; 
    font-size: 48px; 
    font-weight: 700; 
  }

  .country-list { 
    position: absolute; 
    color: #fff; 
    font-size: 16px; 
    max-width: 300px; 
  }

  @media (max-width: 768px) {
    .ui-wrap { 
      position: relative; 
      transform: none; 
      width: 90%; 
      text-align: center; 
      margin-top: 20px; 
      right: auto;
      flex-direction: column; 
      gap: 10px;
    }
    .ui-text-content {
      text-align: center; /* Centrado en móvil */
    }
    .slider-sidebar {
      display: none; 
    }
    .ui-title { font-size: 36px; }
    .ui-description { font-size: 13px; }
    .country-count { font-size: 32px; }
    .country-list { font-size: 12px; max-width: 200px; }
  }
`}</style>

    </div>
  );
}