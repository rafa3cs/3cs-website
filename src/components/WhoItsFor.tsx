import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './WhoItsFor.css';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    title: 'Varejo & Bens de Consumo',
    description: 'Empresas stock-based que lutam com inventário como alavanca estratégica.'
  },
  {
    title: 'Empresas Capital-Intensivas',
    description: 'Negócios onde o caixa é a moeda mais valiosa.'
  },
  {
    title: 'PMEs Escalando Rápido',
    description: 'Empresas crescendo sem estrutura enterprise.'
  },
  {
    title: 'Fundadores, CEOs, CFOs',
    description: 'Cansados de gestão reativa. Prontos para disciplina.'
  }
];

export default function WhoItsFor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.audience-card');

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.9 },
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
    <section className="who-its-for" id="para-quem" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Para Quem É</h2>
          <p>Público-Alvo Explícito</p>
        </div>

        <div className="audience-cards" ref={cardsRef}>
          {audiences.map((aud, idx) => (
            <div className="audience-card" key={idx}>
              <h3>{aud.title}</h3>
              <p>{aud.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
