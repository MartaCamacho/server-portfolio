(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{46:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(2),n=a.n(c),i=a(18),r=a.n(i),o=a(3),l=a(4),j=a(6),d=a(5),h=(a(9),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={toggle:!1},e.Toggle=function(){e.setState({toggle:!e.state.toggle})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"logo",children:[Object(s.jsx)("div",{children:Object(s.jsx)("a",{className:"logo-link",href:"#home",children:Object(s.jsx)("i",{className:"fas fa-arrow-circle-up"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("a",{className:"logo-link",href:"#footer",children:Object(s.jsx)("i",{className:"far fa-comment"})})})]}),Object(s.jsx)("button",{onClick:function(){return e.Toggle()},className:this.state.toggle?"nav-toggle nav-open":"nav-toggle","aria-label":"toggle navigation",children:Object(s.jsx)("span",{className:this.state.toggle?"hamburger nav-open":"hamburger"})}),Object(s.jsx)("nav",{className:this.state.toggle?"nav nav-open":"nav",id:this.state.toggle?"nav-open":"",children:Object(s.jsxs)("ul",{className:this.state.toggle?"nav-list nav-open":"nav-list",children:[Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)("a",{onClick:function(){return e.Toggle()},href:"#home",className:"nav-link",children:"Home"})," "]}),Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)("a",{onClick:function(){return e.Toggle()},href:"#what-i-do",className:"nav-link",children:"What I do"})," "]}),Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)("a",{onClick:function(){return e.Toggle()},href:"#about",className:"nav-link",children:"About me"})," "]}),Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)("a",{onClick:function(){return e.Toggle()},href:"#work",className:"nav-link",children:"My projects"})," "]})]})})]})}}]),a}(c.Component));var m=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("footer",{className:"footer",id:"footer",children:[Object(s.jsx)("a",{href:"mailto:contacto@martacamacho.com",className:"footer-link",children:"contacto@martacamacho.com"}),Object(s.jsxs)("ul",{className:"social-list",children:[Object(s.jsx)("li",{className:"social-list-item",children:Object(s.jsx)("a",{href:"https://github.com/MartaCamacho",className:"social-list-link",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-github"})})}),Object(s.jsx)("li",{className:"social-list-item",children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/martacamachovargas/",className:"social-list-link",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-linkedin"})})})]})]})})},b=a(8),u=a.n(b),g=a(19),f=a(20),v=a.n(f),O=new(function(){function e(){Object(o.a)(this,e),this.service=v.a.create({baseURL:"https://martacamacho.herokuapp.com"})}return Object(l.a)(e,[{key:"allExperiences",value:function(){return this.service.get("/full-experience",{}).then((function(e){return e.data}))}},{key:"allProjects",value:function(){return this.service.get("/full-project",{}).then((function(e){return e.data}))}}]),e}()),p=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getAllProjects=Object(g.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.allProjects();case 3:a=t.sent,e.setState({listOfProjects:a}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.state={listOfProjects:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getAllProjects()}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("section",{className:"my-work","data-aos":"fade-left","data-aos-duration":"2000",id:"work",children:[Object(s.jsx)("h2",{className:"section-title section-title-work",children:"My projects"}),Object(s.jsx)("p",{className:"section-subtitle section-subtitle-work",children:"Check out my work!"}),Object(s.jsx)("div",{className:"portfolio",children:this.state.listOfProjects?this.state.listOfProjects.map((function(e,t){return Object(s.jsxs)("div",{className:"portfolio-item",children:[Object(s.jsx)("a",{className:"portfolio-item-title",href:e.url,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("p",{children:e.title})}),Object(s.jsxs)("div",{className:"portfolio-item-body",children:[Object(s.jsxs)("p",{children:["Description: ",e.description]}),Object(s.jsxs)("p",{children:["For this project was used: ",e.used]})]})]},t)})):Object(s.jsx)("p",{children:"There are no projects yet!"})})]})})}}]),a}(c.Component),x=a(21),k=a.n(x);a(45);k.a.init();var N=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).randomImage=function(){var e=Math.floor(Math.random()*s.state.arrayPics.length);return s.state.arrayPics[e]},s.state={arrayPics:["../images/vertical-picture.jpg","../images/vertical-picture-2.jpg","../images/vertical-picture-3.jpg"]},s}return Object(l.a)(a,[{key:"render",value:function(){return console.log("I see you are inspecting this page...\ud83d\udc6e if you have any questions or advice to improve it, I will be very happy to receive your message! \ud83d\udcec contacto@martacamacho.com"),Object(s.jsxs)("div",{className:"root",children:[Object(s.jsx)("header",{children:Object(s.jsx)(h,{})}),Object(s.jsxs)("section",{className:"intro","data-aos":"fade-left","data-aos-duration":"1000",id:"home",children:[Object(s.jsxs)("h1",{className:"section-title section-title-intro",children:["Hello, I am ",Object(s.jsx)("strong",{children:"Marta Camacho"})]}),Object(s.jsx)("p",{className:"section-subtitle section-subtitle-intro",children:"Full Stack Developer"}),Object(s.jsx)("img",{className:"intro-img",src:"/images/FotoIH.jpg",alt:"me"}),Object(s.jsx)("img",{className:"intro-img-surprise",src:"/images/hoverImage.jpg",alt:"me"})]}),Object(s.jsxs)("section",{className:"my-services","data-aos":"fade-left","data-aos-duration":"3000",id:"what-i-do",children:[Object(s.jsx)("h2",{className:"section-title section-title-services",children:" What I do"}),Object(s.jsxs)("div",{className:"services",children:[Object(s.jsxs)("div",{className:"service",children:[Object(s.jsx)("h3",{children:"Frontend "}),Object(s.jsx)("p",{children:"I have knowledge in HTML5, CSS3, JavaScript (ES6) and React, that give me the ability to create format and layout a web. "})]}),Object(s.jsxs)("div",{className:"service",children:[Object(s.jsx)("h3",{children:"+ Backend "}),Object(s.jsx)("p",{children:" I also have worked with Express, Node, MongoDB and Axios, so I can save data into servers and extract information to be rendered."})]}),Object(s.jsxs)("div",{className:"service",children:[Object(s.jsx)("h3",{children:"= Full Stack"}),Object(s.jsx)("p",{children:" Putting these two things together make me a Full Stack Developer (in fact, this website it built with both of them \u2728)."})]})]}),Object(s.jsx)("a",{href:"#work",className:"btn",children:"My projects"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"https://bit.ly/3lWiuzv",className:"btn",target:"_blank",rel:"noreferrer",children:"CV"})]}),Object(s.jsxs)("section",{className:"about-me","data-aos":"fade-left","data-aos-duration":"2000",id:"about",children:[Object(s.jsx)("h2",{className:"section-title section-title-about",children:"About me"}),Object(s.jsx)("p",{className:"section-subtitle section-subtitle-about",children:"Developer based in Barcelona"}),Object(s.jsx)("div",{className:"about-me-body",children:Object(s.jsxs)("p",{children:["Born and raised in Granada, I moved to Barcelona in 2013 to accomplish my dream of working on the tourism industry and fell in love with the city. I consider myself a demanding, perseverant and enthusiastic person, who works every day to accomplish her goals.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"After 7 years on hospitality, I have worked on different positions that gave me new abilities (such as working under pressure, customer care, commercial skills, negotiating skills and team work, among others) and, above all, to understand better how things that depend of another department work (and that many times we do not take into account when something is not delivered correctly/on time).",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"This year I decided to do a career change, I have stopped and thought about what I wanted now, and I realized that I love developing and I see myself doing this in the future, time flies when I am doing it and I am interested and entertained as well, so I decided to do a bootcamp and acquire the necessary knowledge to begin my path as a full stack developer \ud83d\ude80"]})}),Object(s.jsx)("img",{className:"about-me-image",src:this.randomImage(),alt:""})]}),Object(s.jsx)(p,{}),Object(s.jsx)(m,{})]})}}]),a}(c.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),w()},9:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.edbbdc93.chunk.js.map