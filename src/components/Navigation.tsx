import { useEffect, useState } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">3CS</div>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('problema')}>Problema</a></li>
          <li><a onClick={() => scrollToSection('capacidades')}>Capacidades</a></li>
          <li><a onClick={() => scrollToSection('metodo')}>Método</a></li>
          <li><a onClick={() => scrollToSection('engajamento')}>Engajamento</a></li>
          <li><a onClick={() => scrollToSection('contato')}>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
