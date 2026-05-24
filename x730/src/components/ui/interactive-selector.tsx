'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Briefcase, Search, Users, Cpu } from 'lucide-react';

interface Option {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const options: Option[] = [
  {
    title: 'Close Protection',
    description: 'Elite executive protection',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    icon: <Shield size={22} className="text-white" />,
  },
  {
    title: 'Security Consulting',
    description: 'Strategic threat advisory',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    icon: <Briefcase size={22} className="text-white" />,
  },
  {
    title: 'Risk Assessment',
    description: 'Threat analysis & intel',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    icon: <Search size={22} className="text-white" />,
  },
  {
    title: 'Event Security',
    description: 'Zero compromise coverage',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    icon: <Users size={22} className="text-white" />,
  },
  {
    title: 'Advanced Technology',
    description: 'Next-gen security systems',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    icon: <Cpu size={22} className="text-white" />,
  },
];

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 160 * i);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* Mobile: scroll-snap carousel — Desktop: flex accordion */}
      <style>{`
        .x730-sel-scroll::-webkit-scrollbar { display: none; }
        .x730-sel-scroll {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .x730-sel-card { scroll-snap-align: start; }
        @media (max-width: 640px) {
          .x730-sel-inner { height: 320px !important; }
        }
      `}</style>

      <div className="x730-sel-scroll w-full overflow-x-auto relative">
        {/* Right-edge fade hint on mobile */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: '40px',
            background: 'linear-gradient(to left, rgba(7,7,7,0.9) 0%, transparent 100%)',
            pointerEvents: 'none', zIndex: 20,
          }}
        />

      <div
        className="x730-sel-inner options flex items-stretch overflow-hidden mx-auto"
        style={{
          minWidth: '600px',
          maxWidth: '980px',
          height: '440px',
        }}
      >
        {options.map((option, index) => {
          const isActive = activeIndex === index;
          const isVisible = animatedOptions.includes(index);

          return (
            <div
              key={index}
              className="x730-sel-card"
              onClick={() => setActiveIndex(index)}
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: isActive ? 'auto 100%' : 'auto 120%',
                backgroundPosition: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
                transition:
                  'flex 0.7s ease-in-out, opacity 0.5s ease, transform 0.5s ease, background-size 0.7s ease, box-shadow 0.4s ease, border-color 0.4s ease',
                flex: isActive ? '7 1 0%' : '1 1 0%',
                minWidth: '56px',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isActive ? '#C4A35A' : '#1C1C1C',
                cursor: 'pointer',
                backgroundColor: '#0A0A0A',
                boxShadow: isActive
                  ? '0 20px 60px rgba(196,163,90,0.18)'
                  : '0 10px 30px rgba(0,0,0,0.40)',
                position: 'relative',
                overflow: 'hidden',
                willChange: 'flex-grow, box-shadow, background-size',
              }}
            >
              {/* Bottom gradient shadow */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: isActive ? '0' : '-40px',
                  height: '140px',
                  transition: 'bottom 0.7s ease-in-out',
                  boxShadow: isActive
                    ? 'inset 0 -140px 140px -80px #000'
                    : 'inset 0 -140px 0px -80px #000',
                  pointerEvents: 'none',
                }}
              />

              {/* Gold top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: isActive
                    ? 'linear-gradient(90deg, transparent, #C4A35A, transparent)'
                    : 'transparent',
                  transition: 'background 0.5s ease',
                }}
              />

              {/* Label */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 14px',
                  gap: '12px',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    minWidth: '42px',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(20,14,4,0.85)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid',
                    borderColor: isActive ? '#C4A35A' : '#333',
                    flexShrink: 0,
                    transition: 'border-color 0.4s ease',
                  }}
                >
                  {option.icon}
                </div>

                {/* Text */}
                <div style={{ color: '#fff', overflow: 'hidden' }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      lineHeight: 1.2,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(22px)',
                      transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {option.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: '#C4A35A',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(22px)',
                      transition: 'opacity 0.5s ease 0.18s, transform 0.5s ease 0.18s',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {option.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default InteractiveSelector;
