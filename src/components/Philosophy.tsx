import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Philosophy.css';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: 'Finanças é um sistema de decisões',
    description: 'Não relatórios. Métricas diretas para ação.'
  },
  {
    title: 'Disciplina torna ambição sustentável',
    description: 'Crescimento sem estrutura é destruição de valor.'
  },
  {
    title: 'Suposições explícitas reduzem conflito',
    description: 'Desacordos sobre números são mais fáceis que palpites.'
  },
  {
    title: 'Boas estratégias falham sem proteção',
    description: 'Execução vence ideia bonita.'
  },
  {
    title: 'Inventário sempre diz a verdade',
    description: 'Se você souber como ler.'
  }
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!principlesRef.current) return;

    const items = principlesRef.current.querySelectorAll('.principle-item');

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            scrub: false,
          },
        }
      );
    });
  }, []);

  return (
    <section className="philosophy" id="filosofia" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Filosofia</h2>
          <p>Princípios que Guiam o Trabalho</p>
        </div>

        <div className="philosophy-grid" ref={principlesRef}>
          {principles.map((principle, idx) => (
            <div className="principle-item" key={principle.title}>
              <div className="principle-number">{String(idx + 1).padStart(2, '0')}</div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
