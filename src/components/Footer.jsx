import "./Footer.css";

function Footer() {
  return (
    <footer>

      {/* Parte Amarilla */}

      <div className="subscribe">

        <div className="subscribe-content">
          
        <div className="warning-icon">
          
          <img src="https://www.cyberpunk.net/build/images/icon-warning-4d9a62d7.svg" alt="warning" className="warning-img" />
        
        </div>

          <h2>¡SUSCRÍBETE AL BOLETÍN OFICIAL DE CYBERPUNK 2077!</h2>

          <p className="subtitle">
            ¡Mucho más que juegos! Mantente al día con las últimas noticias y anuncios de Cyberpunk 2077.
          </p>


          <div className="formulario">

            <div className="input-wrapper">

              <span className="barra"></span>

              <input
                type="email"
                placeholder="Introduce tu dirección de correo electrónico"
              />

            </div>

            <button className="btn-enviar">
              <span>ENVIAR</span>
            </button>

          </div>


          {/* Checkbox */}

          <div className="checkbox">

            <input type="checkbox" />

            <label>
              Me gustaría recibir noticias, ofertas especiales y otras informaciones de CD PROJEKT y tengo 17 años o más.
            </label>

          </div>

          {/*Texto legal*/}

          <p className="legal">
            CD PROJEKT RED será responsable de tu información personal. Para más información revisa la Política de privacidad de CD PROJEKT.
          </p>

          <p className="legal">
            Esta página web está protegida por reCAPTCHA. Se aplican la Política de Privacidad y los Términos del Servicio de Google.
          </p>

        </div>

      </div>


      {/*Parte Negra*/}

      <div className="footer-dark">

  <div className="footer-row1">

    <div className="social">

      <span>ENCUÉNTRANOS EN</span>

      <div className="icons">

        <a href="https://www.youtube.com/user/CyberPunkGame">
          <img src="https://www.cyberpunk.net/build/images/youtube-cb066cae.svg"/>
        </a>
       
        <a href="https://www.facebook.com/CyberpunkGameES">
         <img src="https://www.cyberpunk.net/build/images/facebook-607a7626.svg"/>
        </a>

        <a href="https://x.com/cyberpunkgame">
         <img src="https://www.cyberpunk.net/build/images/twitter-964d7e53.svg"/>
        </a>

        <a href="https://forums.cdprojektred.com/index.php?forums/cyberpunk.10794368/">
         <img src="https://www.cyberpunk.net/build/images/forums-ea984cf4.svg"/>
        </a>

        <a href="https://discord.com/invite/cyberpunkgame">
         <img src="https://www.cyberpunk.net/build/images/discord-25f7b34a.svg"/>
        </a>
        
        <a href="https://www.instagram.com/cyberpunkgame/">
         <img src="https://www.cyberpunk.net/build/images/instagram-d70b2cd7.svg"/>
        </a>
        
        <a href="https://cyberpunkgame.tumblr.com/">
         <img src="https://www.cyberpunk.net/build/images/tumblr-0afcfa1b.svg"/>
        </a>

        <a href="https://www.twitch.tv/cdprojektred">
         <img src="https://www.cyberpunk.net/build/images/twitch-e28d5215.svg"/>
        </a>
      </div>

    </div>

    <div className="hardware">

      <img src="https://www.cyberpunk.net/build/images/footer/partners/nvidia-5a0ab065.svg"/>
      <img src="https://www.cyberpunk.net/build/images/footer/partners/alienware-3d98dd93.svg"/>
      <img src="https://www.cyberpunk.net/build/images/footer/partners/amd-a823d277.svg"/>

    </div>

    <div className="rating">
      <img src="https://www.cyberpunk.net/build/images/rating-esrb@2x-a80e5005.png"/>
    </div>

  </div>

  <div className="footer-line"></div>

  <div className="footer-links">

    <a href="https://regulations.cdprojektred.com/en/privacy_policy">Términos de uso y Política de privacidad</a>
    <a href="https://www.cdprojektred.com/en">Trabajo</a>
    <a href="https://regulations.cdprojektred.com/en/user_agreement">User agreement</a>
    <a href="https://www.cdprojektred.com/es/fan-content">Fan Content Guidelines</a>
    <a>Declaración sobre el uso de cookies</a>
    <a href="https://www.cyberpunk.net/es/modding-support">REDmod</a>
    <div className="language-menu">
      <div className="language-button">
        
        <img 
        src="https://www.cyberpunk.net/build/images/icon-world-cyan-20bd26a2.svg" alt="world" className="world-icon"/>
        
        <span>Español</span>
        
        <span className="arrow">▼</span>
        
        </div>
        
        <div className="language-dropdown">
          <div>English</div>
          <div>Русский</div>
          <div>Deutsch</div>
          <div>Polski</div>
          <div>Português (BR)</div>
          <div>Français</div>
          <div>Español</div>
          <div>Español (MX)</div>
          <div>Italiano</div>
          <div>日本語</div>
          <div>한국어</div>
          <div>简体中文</div>
          <div>繁體中文</div>
          
        </div>
      </div>

  </div>


  <div className="footer-line"></div>


  <div className="footer-row3">

    <div className="cdprojekt">

      <a href="https://cdprojektred.com/">
       <img src="https://www.cyberpunk.net/build/images/CDProjektRed-White-e4ac7847.svg"/>
      </a>

      <p>
        © 2026 CD PROJEKT S.A. Todos los derechos reservados. CD PROJEKT, el logotipo de CD PROJEKT, Cyberpunk, Cyberpunk 2077 y el logotipo de Cyberpunk 2077 son marcas comerciales o marcas registradas de CD PROJEKT S.A. en Estados Unidos u otros países.
      </p>

    </div>

    <div className="games">

      <div>
        <a href="http://thewitcher.com/">
         <img src="https://www.cyberpunk.net/build/images/witcher-dbdb7666.png"/>
        </a>
        <span>thewitcher.com</span>
      </div>

      <div>
        <a href="https://www.playgwent.com/">
         <img src="https://www.cyberpunk.net/build/images/gwent-f7fcd4e6.png"/>
        </a>
        <span>playgwent.com</span>
      </div>

      <div>
        <a href="https://gear.cdprojektred.com/">
         <img src="https://www.cyberpunk.net/build/images/footer/gear-logo/logo-gear_horizontal_white-2e8243c2.svg"/>
        </a>
        <span>gear.cdprojektred.com</span>
      </div>

    </div>

  </div>

</div>

    </footer>
  );
}

export default Footer;