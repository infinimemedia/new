'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ButtonHover } from '@/components/ui/button-hover';

const HalideLanding: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Entrance animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';

    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#070707',
        color: '#F4F4F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        /* SVG grain filter */
        .x730-grain-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
          opacity: 0.10;
        }

        /* 3-D viewport */
        .x730-viewport {
          position: absolute;
          inset: 0;
          perspective: 2000px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .x730-canvas-3d {
          position: relative;
          width: 800px;
          height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .x730-layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(196, 163, 90, 0.07);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        /* Close protection officers — single image */
        .x730-layer-1 {
          background-image: url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(1) contrast(1.4) brightness(0.5);
        }
        .x730-layer-2 { opacity: 0; }
        .x730-layer-3 { opacity: 0; }

        /* Topographic contour rings — gold tint */
        .x730-contours {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-image: repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0,
            transparent 38px,
            rgba(196, 163, 90, 0.045) 39px,
            transparent 40px
          );
          transform: translateZ(120px);
          pointer-events: none;
        }

        /* Overlay UI grid */
        .x730-interface {
          position: absolute;
          inset: 0;
          padding: 5rem 4rem 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .x730-hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(4.5rem, 14vw, 12rem);
          line-height: 0.83;
          letter-spacing: -0.01em;
          mix-blend-mode: difference;
          font-family: var(--font-bebas), sans-serif;
          color: #F4F4F5;
          text-transform: uppercase;
        }

        .x730-cta-btn-wrapper {
          pointer-events: auto;
        }

        /* ── Mobile ─────────────────────────────────── */
        @media (max-width: 767px) {
          .x730-interface {
            padding: 5rem 1.5rem 2.5rem;
            grid-template-columns: 1fr;
          }
          .x730-hero-title {
            font-size: clamp(3rem, 15vw, 4.5rem);
          }
          .x730-status-text { display: none; }
          .x730-bottom-row {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1.25rem;
          }
          .x730-scroll-line { display: none; }
        }

        /* Scroll indicator */
        .x730-scroll-line {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 56px;
          z-index: 10;
          overflow: hidden;
        }
        .x730-scroll-line::after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #C4A35A, transparent);
          animation: x730-flow 2.2s infinite ease-in-out;
        }
        @keyframes x730-flow {
          0%   { transform: scaleY(0) translateY(-100%); }
          50%  { transform: scaleY(1) translateY(0%); }
          100% { transform: scaleY(0) translateY(100%); }
        }

        /* Scan-line vignette */
        .x730-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 6;
          background:
            radial-gradient(ellipse at center, transparent 50%, rgba(7,7,7,0.75) 100%);
        }
      `}</style>

      {/* ── SVG grain filter definition ─────────────────── */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <filter id="x730-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* ── Film grain ──────────────────────────────────── */}
      <div className="x730-grain-overlay" style={{ filter: 'url(#x730-grain)' }} aria-hidden="true" />

      {/* ── Vignette ────────────────────────────────────── */}
      <div className="x730-vignette" aria-hidden="true" />

      {/* ── Overlay interface grid ───────────────────────── */}
      <div className="x730-interface">
        {/* Top-left: brand */}
        <div
          style={{
            fontFamily: 'monospace',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            color: '#F4F4F5',
          }}
        >
          X730_INC.
        </div>

        {/* Top-right: status — hidden on mobile */}
        <div
          className="x730-status-text"
          style={{
            textAlign: 'right',
            fontFamily: 'monospace',
            color: '#C4A35A',
            fontSize: '0.63rem',
            letterSpacing: '0.12em',
            lineHeight: 2,
          }}
        >
          <div>ACTIVE: NORTH AMERICA</div>
          <div>CLEARANCE: ALPHA LEVEL</div>
        </div>

        {/* Center: hero title */}
        <h1 className="x730-hero-title">
          ZERO
          <br />
          COMPROMISE
        </h1>

        {/* Bottom row — stacks on mobile */}
        <div
          className="x730-bottom-row"
          style={{
            gridColumn: '1 / -1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.14em',
              color: '#2E2E2E',
              lineHeight: 2.2,
            }}
          >
            <p>[ OPERATIONAL SINCE 2009 ]</p>
            <p>CLOSE PROTECTION &amp; SECURITY INTELLIGENCE</p>
          </div>

          <div className="x730-cta-btn-wrapper">
            <ButtonHover href="/contact" variant="gold" size="md">
              Request Briefing
            </ButtonHover>
          </div>
        </div>
      </div>

      {/* ── 3-D landscape canvas ────────────────────────── */}
      <div className="x730-viewport">
        <div className="x730-canvas-3d" ref={canvasRef}>
          <div
            className="x730-layer x730-layer-1"
            ref={(el) => { if (el) layersRef.current[0] = el; }}
          />
          <div
            className="x730-layer x730-layer-2"
            ref={(el) => { if (el) layersRef.current[1] = el; }}
          />
          <div
            className="x730-layer x730-layer-3"
            ref={(el) => { if (el) layersRef.current[2] = el; }}
          />
          <div className="x730-contours" aria-hidden="true" />
        </div>
      </div>

      {/* ── Scroll line ─────────────────────────────────── */}
      <div className="x730-scroll-line" aria-hidden="true" />
    </div>
  );
};

export default HalideLanding;
