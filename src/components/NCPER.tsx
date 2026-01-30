import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './NCPER.css';

gsap.registerPlugin(ScrollTrigger);

const ncperSteps = [
  {
    letter: 'N',
    title: 'Necessidade',
    description: 'Qual problema realmente precisa ser resolvido? Começamos aqui, não na solução.',
    color: '#00d9ff'
  },
  {
    letter: 'C',
    title: 'Capacidade',
    description: 'Pessoas, sistemas e capital suportam a mudança? Sem capacidade, intenção é apenas escrita.',
    color: '#00d9ff'
  },
  {
    letter: 'P',
    title: 'Possibilidade',
    description: 'O que é viável agora, não teoricamente? Realismo vence ideologia.',
    color: '#00d9ff'
  },
  {
    letter: 'E',
    title: 'Esforço',
    description: 'Qual é o custo operacional e organizacional? Cada mudança custa; conheça o preço.',
    color: '#00d9ff'
  },
  {
    letter: 'R',
    title: 'Retorno',
    description: 'Caixa, margem, risco, previsibilidade. Por que fazemos isso? Defina sucesso explicitamente.',
    color: '#00d9ff'
  }
];

export default function NCPER() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const steps = sectionRef.current.querySelectorAll('.ncper-step');

    steps.forEach((step, idx) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            scrub: false,
          },
        }
      );
    });
  }, []);

  return (
    <section className="ncper" id="metodo" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>O Método</h2>
          <p>Uma Lente de Decisão Proprietária</p>
        </div>

        <div className="ncper-timeline">
          {ncperSteps.map((step, idx) => (
            <div className={`ncper-step ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
              <div className="step-content">
                <div className="step-letter">{step.letter}</div>
                <div className="step-info">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-number">Passo {idx + 1}</div>
                </div>
              </div>
              <div className="step-line"></div>
            </div>
          ))}
        </div>

        <div className="ncper-summary">
          <p>NCPER é diagnóstico sistêmico da empresa, não checklist de ações.</p>
        </div>
      </div>
    </section>
  );
}
