import { useState } from "react";
import Project from "./Project";
import classes from "./Work.module.css";

const projects = [
  {
    id: 1,
    title: "project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    bgImg:
      "https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    tools: ["html5", "css3", "js", "react", "git"],
  },
  {
    id: 2,
    title: "project 2",
    desc: "project desc 2",
    bgImg:
      "https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    tools: ["html5", "css3", "js", "react", "git"],
  },
  {
    id: 3,
    title: "project 3",
    desc: "project 3",
    bgImg:
      "https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    tools: ["html5", "css3", "js", "git"],
  },
  {
    id: 4,
    title: "project 4",
    desc: "project 4",
    bgImg:
      "https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    tools: ["html5", "css3", "js", "git"],
  },
  {
    id: 5,
    title: "project 5",
    desc: "project 5",
    bgImg:
      "https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    tools: ["html5", "css3", "js", "git"],
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
