import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  console.log("I see you are inspecting this page...👮 if you have any questions or advice to improve it, I will be very happy 💫 to receive your message! 📬marta@martacamacho.com")

  return (
    <div className="root">
    <header>
      <Navbar />
    </header>

<section className="intro" id="home">
    <h1 className="section-title section-title-intro">
      Hi, I am <strong>Marta Camacho</strong>
    </h1>
      <p className="section-subtitle section-subtitle-intro">Full Stack Developer</p>
      <img className="intro-img" src="/images/FotoIH.jpg" alt="me" />
</section>

<section className="my-services" id="services">
  <h2 className="section-title section-title-services"> What I do</h2>
      <div className="services">
        <div className="service">
            <h3>thing 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin lectus dictumst, morbi blandit nascetur nam congue suspendisse potenti nullam. Lectus himenaeos nostra mauris posuere duis egestas lacus litora, arcu semper tristique eros per aptent a, curabitur fringilla sollicitudin nec donec fames aliquam natoque, hendrerit ligula neque id non sagittis. Penatibus tempor euismod justo potenti cras semper, dictum blandit commodo quisque interdum ullamcorper platea, proin ligula ultrices porttitor suspendisse.</p>
        </div>
        <div className="service">
            <h3>thing 2</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin lectus dictumst, morbi blandit nascetur nam congue suspendisse potenti nullam. Lectus himenaeos nostra mauris posuere duis egestas lacus litora, arcu semper tristique eros per aptent a, curabitur fringilla sollicitudin nec donec fames aliquam natoque, hendrerit ligula neque id non sagittis. Penatibus tempor euismod justo potenti cras semper, dictum blandit commodo quisque interdum ullamcorper platea, proin ligula ultrices porttitor suspendisse.</p>
        </div>
        <div className="service">
            <h3>thing 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin lectus dictumst, morbi blandit nascetur nam congue suspendisse potenti nullam. Lectus himenaeos nostra mauris posuere duis egestas lacus litora, arcu semper tristique eros per aptent a, curabitur fringilla sollicitudin nec donec fames aliquam natoque, hendrerit ligula neque id non sagittis. Penatibus tempor euismod justo potenti cras semper, dictum blandit commodo quisque interdum ullamcorper platea, proin ligula ultrices porttitor suspendisse.</p>
        </div>
      </div>
    <a href="#work" className="btn">My work</a>
</section>
      
<section className="about-me" id="#about">
    <h2 className="section-title section-title-about">Who I am</h2>
    <p className="section-subtitle section-subtitle-about">subtitle</p>
    <div className="about-me-body">
      <p>La caña de España.</p>
    </div>
    <img className="about-me-image" src="/images/FotoIH.jpg" alt=""/>
</section>

<section className="my-work" id="work">
<h2 className="section-title section-title-work">My work</h2>
<p className="section-subtitle section-subtitle-work">subtitle</p>

<div className="portfolio">
  <a href="https://fitline.herokuapp.com/" className="portfolio-item">
    <img src="/images/logo-fitline.png" alt="fitline logo" className="portfolio-img"/>
  </a>

<a href="https://fitline.herokuapp.com/" className="portfolio-item">
    <img src="/images/logo-fitline.png" alt="fitline logo" className="portfolio-img"/>
  </a>

<a href="https://fitline.herokuapp.com/" className="portfolio-item">
    <img src="/images/logo-fitline.png" alt="fitline logo" className="portfolio-img"/>
  </a>

</div>
</section>

<Footer/>

    </div>
  );
}

export default App;
