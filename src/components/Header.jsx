import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <div className={`p-cyberpunk ${menuOpen ? 'menu-open' : ''}`}>
      <header className="header">
        <div className="header-top">
          <div className="header-top__logo-container">
            <a href="/us/es/" className="header-top__logo header-top__logo--black-desktop">
              <img 
                className="header-top__logo-yellow"
                src="https://www.cyberpunk.net/build/images/home8/logo-franchise-yellow-en@1x-b4c9e65b.png"
                srcSet="https://www.cyberpunk.net/build/images/home8/logo-franchise-yellow-en@1x-b4c9e65b.png 1x, https://www.cyberpunk.net/build/images/home8/logo-franchise-yellow-en@2x-ca078f31.png 2x"
                alt="Cyberpunk Logo Yellow"
              />
              <img 
                className="header-top__logo-black"
                src="https://www.cyberpunk.net/build/images/home8/logo-franchise-black-en@1x-567991b0.png"
                srcSet="https://www.cyberpunk.net/build/images/home8/logo-franchise-black-en@1x-567991b0.png 1x, https://www.cyberpunk.net/build/images/home8/logo-franchise-black-en@2x-06852b64.png 2x"
                alt="Cyberpunk Logo Black"
              />
            </a>
            <a href="https://www.cyberpunk.net/update-2.3" className="header-top__badge">
              <img 
                className="header-top__badge-img"
                src="https://www.cyberpunk.net/build/images/cyberpunk/5/badge-23@1x-b7250e79.png"
                srcSet="https://www.cyberpunk.net/build/images/cyberpunk/5/badge-23@1x-b7250e79.png 1x, https://www.cyberpunk.net/build/images/cyberpunk/5/badge-23@1x-b7250e79.png 2x"
                alt="Update 2.3 Badge"
              />
            </a>
          </div>

          <div className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <span className="menu-sub">Juegos</span>
                <ul className="menu-sub-list">
                  <li><a href="">Cyberpunk 2077</a></li>
                  <li><a href="">Phantom Liberty</a></li>
                </ul>
              </li>
              <li className="menu-item">
                <span className="menu-sub">Series</span>
                <ul className="menu-sub-list">
                  <li><a href="">Edgerunners</a></li>
                  <li><a href="">Edgerunners 2</a></li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="">Noticias</a>
              </li>
              <li className="menu-item">
                <span className="menu-sub">Comunidad</span>
                <ul className="menu-sub-list">
                  <li><a href="">Foros</a></li>
                  <li><a href="https://discord.gg/cyberpunkgame">Discord</a></li>
                  <li><a href="">GUÍAS DEL COSPLAY</a></li>
                  <li><a href="">Build planner</a></li>
                  <li><a href="https://www.cyberpunk.net/en/news/49789/cyberpunk-2077-ultimate-edition-game-booklet-out-now">Cuadernillo del juego</a></li>
                  <li><a href="">Cuestionario: tu mejor chum</a></li>
                </ul>
              </li>
              <li className="menu-item">
                <span className="menu-sub">Más</span>
                <ul className="menu-sub-list">
                  <li><a href="">Juega en Nintendo Switch™ 2</a></li>
                  <li><a href="">Actualización 2.3</a></li>
                  <li><a href="">MIS RECOMPENSAS</a></li>
                  <li><a href="https://gear.cdprojektred.com">Productos</a></li>
                  <li><a href="">Contenido multimedia</a></li>
                  <li><a href="https://support.cdprojektred.com">Ayuda</a></li>
                  <li><a href="https://www.cdprojektred.com">CD PROJEKT RED</a></li>
                </ul>
              </li>
              <li className="menu-item menu-item-lang">
                <span className="menu-sub">es</span>
                <div className="menu-sub-list">
                  <ul>
                    <li><a href="">English</a></li>
                    <li><a href="">Русский</a></li>
                    <li><a href="">Deutsch</a></li>
                    <li><a href="">Polski</a></li>
                    <li><a href="">Português (BR)</a></li>
                    <li><a href="">Français</a></li>
                    <li><a href="" className="active">Español</a></li>
                    <li><a href="">Español (MX)</a></li>
                    <li><a href="">Italiano</a></li>
                    <li><a href="">日本語</a></li>
                    <li><a href="">한국어</a></li>
                    <li><a href="">简体中文</a></li>
                    <li><a href="">繁體中文</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu-item menu-item-buy">
                <a href="">Cómpralo ya</a>
              </li>
            </ul>
          </div>

          <div className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`menu-close ${menuOpen ? 'menu-close--open' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="header__bg">
          <video poster="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg" autoPlay loop muted playsInline>
            <source src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP2077_UE_KV_Animation_1920x1080.webm" type="video/webm" />
            <source src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP2077_UE_KV_Animation_1920x1080_AV1.mp4" type="video/mp4; codecs=av01.0.05M.08" />
            <source src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP2077_UE_KV_Animation_1920x1080_h264.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="header__content">
          <div className="header__inner">
            <h1 className="header__title">Consigue la experiencia Cyberpunk 2077 definitiva</h1>
            <div className="header__bottom">
              <div className="header__buttons">
                <a className="cp-btn cp-btn--black h6" href="">
                  <span>Cómpralo ya</span>
                </a>
                <a className="cp-btn cp-btn--black h6" href="https://cp2077.ly/CP2077_UE_Trailer_ES" target="_blank" rel="noopener noreferrer">
                  <span>Ver tráiler</span>
                </a>
              </div>
              <div className="header__platforms">
                <div>
                  <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-xboxsx-20a6f602.svg" alt="xbox_xs" />
                  <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-ps5-ce1db3d1.svg" alt="ps5" />
                  <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-pc-03eb4b91.svg" alt="pc" />
                  <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-switch2-2629c2af.svg" alt="switch2" />
                  <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-mac-0c84f2a3.svg" alt="mac" />
                </div>
              </div>
            </div>
          </div>

          <div className="header__bottom-mobile">
            <div className="header__buttons">
              <a className="cp-btn cp-btn--yellow h6" href="">
                <span>Cómpralo ya</span>
              </a>
              <a className="cp-btn cp-btn--yellow h6" href="https://cp2077.ly/CP2077_UE_Trailer_ES" target="_blank" rel="noopener noreferrer">
                <span>Ver tráiler</span>
              </a>
            </div>
            <div className="header__platforms">
              <div>
                <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-xboxsx-white-cf2259c6.svg" alt="xbox_xs" />
                <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-ps5-white-38dc3047.svg" alt="ps5" />
                <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-pc-white-fb384eb0.svg" alt="pc" />
                <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-switch2-white-93159b6f.svg" alt="switch2" />
                <img height="32" src="https://www.cyberpunk.net/build/images/icons/platform-mac-white-069fd056.svg" alt="mac" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
