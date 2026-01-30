import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // Animate form on scroll
    gsap.fromTo(
      form,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          scrub: false,
        },
      }
    );

    // Animate inputs
    const inputs = form.querySelectorAll('input, textarea');
    gsap.fromTo(
      inputs,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          scrub: false,
        },
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    
    try {
      const response = await fetch('https://basin.io/api/f/d0b4b7bb22e2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        formRef.current?.reset();
        
        // Reset message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <section className="contact" id="contato" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Comece com Clareza</h2>
          <p>Não com uma proposta</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Pronto para disciplina?</h3>
            <p>Envie uma mensagem. Vamos conversar sobre onde está o capital preso na sua empresa.</p>
            <ul className="contact-details">
              <li>
                <strong>Email:</strong>
                <a href="mailto:contato@3cs.pro">contato@3cs.pro</a>
              </li>
              <li>
                <strong>Telefone:</strong>
                <span>+55 (21) 99999-9999</span>
              </li>
            </ul>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Sua Empresa"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Qual é seu desafio?"
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              {submitted ? 'Mensagem Enviada ✓' : 'Enviar Mensagem'}
            </button>

            {submitted && (
              <div className="success-message">
                Obrigado! Entraremos em contato em breve.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
