import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  console.log("I see you are inspecting this page...👮 if you have any questions or advice to improve it, I will be very happy to receive your message! 📬marta@martacamacho.com")

  return (
    <div className="root">
    <header>
      <Navbar />
    </header>

<section className="intro" id="home">
    <h1 className="section-title section-title-intro">
      Hello, I am <strong>Marta Camacho</strong>
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
      </div>
    <a href="#work" className="btn">My work</a>
</section>
      
<section className="about-me" id="#about">
    <h2 className="section-title section-title-about">About me</h2>
    <p className="section-subtitle section-subtitle-about">Developer based in Barcelona</p>
    <div className="about-me-body">
      <p>Born and raised in Granada, I moved to Barcelona in 2013 to accomplish 
      my dream of working on the tourism industry and fell in love with the city.
      I consider myself a demanding, perseverant and enthusiastic person, who works 
      every day to accomplish her goals.
      <br/><br/>
      After 7 years on hospitality, I have worked on different positions that 
      gave me new abilities (such as working under pressure, customer care, 
      commercial skills, negotiating skills and team work, among others) and, above all, to 
      understand better how things that depend of another department work 
      (and that many times we do not take into account when something is not 
      delivered correctly/on time). 
      <br/><br/>
      This year I decided to do a career change, I have stopped and thought about 
      what I wanted now, and I realized that I love developing and I see myself 
      doing this in the future, time flies when I am doing it and I am interested 
      and entertained as well, so I decided to do a bootcamp and acquire the necessary 
      knowledge to begin my path as a full stack developer 🚀 
      </p>
      
    </div>
    <img className="about-me-image" src="/images/FotoIH.jpg" alt=""/>
</section>


<Projects />

<Footer/>

    </div>
  );
}

export default App;
