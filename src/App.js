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

<section classname="intro" id="home">
    <h1 className="section-title section-title-intro">
      Hi, I am <strong>Marta Camacho</strong>
    </h1>
      <p className="section-subtitle section-subtitle-intro">Full Stack Developer</p>
      <img src="" alt="picture of me" />
</section>

<section className="my-services" id="services">
  <h2 className="section-title section-title-services"> What I do</h2>
      <div className="services">
        <div className="service">
            <h3></h3>
            <p></p>
        </div>
        <div className="service">
            <h3></h3>
            <p></p>
        </div>
        <div className="service">
            <h3></h3>
            <p></p>
        </div>
      </div>
    <a href="#work" className="btn">My work</a>
</section>
      
<section className="about-me" if="#about">
    <h2 className="section-title section-title-about">Who I am</h2>
    <p className="section-subtitle section-subtitle-about"></p>
    <div className="about-me-body">
      <p></p>
      <p></p>
      <p></p>
    </div>
    <img src="" alt=""/>
</section>

<section className="my-work" id="work">
<h2 clasName="section-title">My work</h2>
<p className="section-subtitle"></p>

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









    </div>
  );
}

export default App;
