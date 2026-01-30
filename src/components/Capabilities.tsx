import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Capabilities.css';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Inventário & Otimização de Capital',
    description: 'GMROI, Ciclo de Conversão de Caixa, envelhecimento de estoque, lógica de OTB.'
  },
  {
    title: 'Inteligência de Preço & Comercial',
    description: 'Lógica margem vs markup, elasticidade, governança de descontos.'
  },
  {
    title: 'Merchandising & Sortimento',
    description: 'Papéis de SKU, lógica de profundidade, disciplina de ciclo de vida.'
  },
  {
    title: 'Planejamento Financeiro & Controle',
    description: 'MFP, previsibilidade P&L, visibilidade de caixa.'
  },
  {
    title: 'Dashboards de Decisão',
    description: 'Uma única fonte de verdade, métricas apenas para decisão.'
  }
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.capability-card');

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
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
    <section className="capabilities" id="capacidades" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>O Que a 3Cs Realmente Faz</h2>
          <p>Domínios de Decisão, não serviços genéricos</p>
        </div>

        <div className="capability-cards" ref={cardsRef}>
          {capabilities.map((cap, idx) => (
            <div className="capability-card" key={idx}>
              <div className="card-number">{String(idx + 1).padStart(2, '0')}</div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
