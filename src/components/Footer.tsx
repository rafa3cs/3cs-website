import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>3Cs</h4>
            <p>Inteligência de Decisão para Negócios Intensivos em Capital</p>
          </div>

          <div className="footer-section">
            <h5>Links</h5>
            <ul>
              <li><a href="#problema">Problema</a></li>
              <li><a href="#capacidades">Capacidades</a></li>
              <li><a href="#metodo">Método</a></li>
              <li><a href="#engajamento">Engajamento</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Contato</h5>
            <ul>
              <li><a href="mailto:contato@3cs.pro">contato@3cs.pro</a></li>
              <li><a href="tel:+5521999999999">+55 (21) 99999-9999</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Redes</h5>
            <ul>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 3Cs Consultoria. Todos os direitos reservados.</p>
          <p>Reduzindo surpresas em negócios desde 2023.</p>
        </div>
      </div>
    </footer>
  );
}
