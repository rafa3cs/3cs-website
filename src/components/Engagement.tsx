import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Engagement.css';

gsap.registerPlugin(ScrollTrigger);

const engagements = [
  {
    title: 'Truth Scan',
    duration: '2-3 semanas',
    description: 'Diagnóstico rápido. Encontra onde o capital está vazando.'
  },
  {
    title: 'Dashboards de Decisão',
    duration: '30 dias',
    description: 'Preço, inventário, merchandising, planos financeiros.'
  },
  {
    title: '90 Dias de Recuperação',
    duration: 'Sprint Focado',
    description: 'Execução clara. Antes vs depois visível.'
  },
  {
    title: 'Advisory Embarcado',
    duration: 'CFO/COO-as-a-Service',
    description: 'Pensamento sênior sem custo full-time.'
  }
];

export default function Engagement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.engagement-card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section className="engagement" id="engajamento" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Como Engajamos</h2>
          <p>Engajamentos Claros e Contidos</p>
        </div>

        <div className="engagement-cards" ref={cardsRef}>
          {engagements.map((eng, idx) => (
            <div className="engagement-card" key={idx}>
              <div className="card-header">
                <h3>{eng.title}</h3>
                <span className="duration">{eng.duration}</span>
              </div>
              <p>{eng.description}</p>
              <div className="card-footer">
                <span className="arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
