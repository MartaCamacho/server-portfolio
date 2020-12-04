import './App.css';

function App() {
  return (
    <div className="root">
    <header>
      <div className="logo">
          <img src="" alt="" />
      </div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a> </li>
          <li className="nav-item"><a href="#sevices" className="nav-link">My services</a> </li>
          <li className="nav-item"><a href="#about" className="nav-link">About me</a> </li>
          <li className="nav-item"><a href="#work" className="nav-link">My work</a> </li>
        </ul>
      </nav>
    </header>

<section className="intro" id="home">
    <h1 className="section-title section-title-intro">
      Hi, I am <strong>Marta Camacho</strong>
    </h1>
      <p className="section-subtitle section-subtitle-intro">Full Stack Developer</p>
      <img className="intro-img" src="/images/FotoIH.jpg" alt="picture of me" />
</section>

<section className="my-services" id="services">
  <h2 className="section-title section-title-services"> What I do</h2>
      <div className="services">
        <div className="service">
            <h3>thing 1</h3>
            <p>bla bla</p>
        </div>
        <div className="service">
            <h3>thing 2</h3>
            <p> bla bla</p>
        </div>
        <div className="service">
            <h3>thing 3</h3>
            <p>bla bla</p>
        </div>
      </div>
    <a href="#work" className="btn">My work</a>
</section>
      
<section className="about-me" if="#about">
    <h2 className="section-title section-title-about">Who I am</h2>
    <p className="section-subtitle section-subtitle-about">subtitle</p>
    <div className="about-me-body">
      <p>cosa 1</p>
      <p>cosa 2</p>
      <p>cosa 3</p>
    </div>
    <img src="/images/FotoIH.jpg" alt=""/>
</section>

<section className="my-work" id="work">
<h2 clasName="section-title">My work</h2>
<p className="section-subtitle">subtitle</p>

<div className="portfolio">
  <a href="#" className="portfolio-item">
    <img src="" alt="" className="portfolio-img"/>
  </a>
</div>

<div className="portfolio">
  <a href="#" className="portfolio-item">
    <img src="" alt="" className="portfolio-img"/>
  </a>
</div>

<div className="portfolio">
  <a href="#" className="portfolio-item">
    <img src="" alt="" className="portfolio-img"/>
  </a>
</div>
</section>

<footer>
  <a href="mailto:contacto@martacamacho.com" className="footer-link">contacto@martacamacho.com</a>
  <ul className="social-list">
      <li className="social-list-item"><a href="" className="social-list-link">link 1</a></li>
      <li className="social-list-item"><a href="" className="social-list-link">link 2</a></li>
      <li className="social-list-item"><a href="" className="social-list-link">link 3</a></li>
      <li className="social-list-item"><a href="" className="social-list-link">link 3</a></li>
  </ul>
</footer>

    </div>
  );
}

export default App;
