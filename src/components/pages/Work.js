import { useState } from "react";
import Project from "./Project";
import classes from "./Work.module.css";
import portfolio from "../../assets/projects/portfolio.png";
import calculator from "../../assets/projects/calculator.jpg";
import loopstudio from "../../assets/projects/loopstudio.jpg";
import socialmedia from "../../assets/projects/socialmedia.jpg";
import clipboard from "../../assets/projects/clipboard.jpg";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    desc: "This is my first react project and i really enjoyed it alot, I used react-routing for displaying different page's content, Also i wanted to be able to edit the website to make it updatable so i made a single file that controls every part that i need to change/update later, This project was a fun challenge for me",
    bgImg: portfolio,
    demoLink: null,
    githubLink: "https://github.com/Haitham95/My-Portfolio",
    tools: ["html5", "css3", "js", "react", "git"],
  },
  {
    id: 2,
    title: "Calculator app",
    desc: "I created this calculator app with native javaScript using ES6 classes to get a feeling of it, UI is provided by www.frontendmentor.io",
    bgImg: calculator,
    demoLink: "https://haitham95-calculator-app.netlify.app/",
    githubLink: "https://github.com/Haitham95/calculator-app-main",
    tools: ["html5", "css3", "js", "git"],
  },
  {
    id: 3,
    title: "social media dashboard with theme switcher",
    desc: "A challenge from www.frontendmentor.io to practice my HTML, CSS and JavaScript",
    bgImg: socialmedia,
    demoLink:
      "https://haitham95-social-media-dashboard-with-theme-switcher-master.netlify.app/",
    githubLink:
      "https://github.com/Haitham95/social-media-dashboard-with-theme-switcher-master",
    tools: ["html5", "css3", "js", "git"],
  },
  {
    id: 4,
    title: "loopstudios landing page",
    desc: "A challenge from www.frontendmentor.io to practice my HTML, CSS and JavaScript",
    bgImg: loopstudio,
    demoLink: "https://haitham95-loopstudios-landing-page-main.netlify.app/",
    githubLink: "https://github.com/Haitham95/loopstudios-landing-page-main",
    tools: ["html5", "css3", "js", "git"],
  },
  {
    id: 5,
    title: "Clipboard landing page",
    desc: "A challenge from www.frontendmentor.io to practice my HTML and CSS",
    bgImg: clipboard,
    demoLink: "https://haitham95-clipboard-landing-page.netlify.app/",
    githubLink: "https://github.com/Haitham95/clipboard-landing-page-master",
    tools: ["html5", "css3", "git"],
  },
];

const Work = () => {
  const [isHighlighted, setIsHighlighted] = useState(null);
  const helper = `${classes.work} container`;

  return (
    <section className={helper}>
      <div className={classes.layout}>
        {projects.map((project) => (
          <Project
            obj={project}
            key={project.id}
            id={project.id}
            curHighlighted={isHighlighted}
            clickHandler={() => {
              setIsHighlighted(project.id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
