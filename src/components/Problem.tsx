import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Problem.css';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    title: 'A lacuna entre estratégia e execução',
    description: 'Crescimento supera estrutura. Previsões existem mas não dirigem decisões.'
  },
  {
    title: 'Inventário absorve caixa silenciosamente',
    description: 'Sem visibilidade de rotatividade, capital fica preso em estoque envelhecido.'
  },
  {
    title: 'Funções não conversam entre si',
    description: 'Precificação, compras e planejamento financeiro operam em silos separados.'
  },
  {
    title: 'Liderança debate opiniões',
    description: 'Sem métricas decisórias, disputas de ego dominam conversas de negócio.'
  },
  {
    title: 'Relatórios existem, decisões não',
    description: 'Dados abundam. Clareza sobre o que mudar? Não.'
  }
];

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.problem-card');

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
    <section className="problem" id="problema" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>O Problema</h2>
          <p>A realidade incômoda que as empresas enfrentam</p>
        </div>

        <div className="problem-cards" ref={cardsRef}>
          {problems.map((problem, idx) => (
            <div className="problem-card" key={idx}>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
