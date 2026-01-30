import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Animate headline letters
    const headline = headlineRef.current?.querySelectorAll('.word');
    if (headline) {
      gsap.fromTo(
        headline,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.2 }
      );
    }

    // Animate subheadline
    gsap.fromTo(
      subheadlineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
    );

    // Animate CTAs
    const ctaButtons = ctasRef.current?.querySelectorAll('button');
    if (ctaButtons) {
      gsap.fromTo(
        ctaButtons,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 1.2 }
      );
    }

    // Title fade out on scroll
    gsap.to(headlineRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      opacity: 0,
      y: -100,
    });

    // Parallax on background
    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      y: 100,
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="headline" ref={headlineRef}>
          <h1>
            <span className="word">Reduzindo</span>
            <span className="word">Surpresas.</span>
            <span className="word">Tornando</span>
            <span className="word">Trade-offs</span>
            <span className="word">Explícitos.</span>
          </h1>
        </div>

        <div className="subheadline" ref={subheadlineRef}>
          <p>Ajudamos empresas a recuperar o controle do caixa, inventário e execução comercial tratando finanças como um sistema de decisão—não uma função de relatório.</p>
        </div>

        <div className="ctas" ref={ctasRef}>
          <button className="btn-primary">Veja Como Trabalhamos</button>
          <button className="btn-secondary">Explore o Método</button>
        </div>
      </div>
    </section>
  );
}
