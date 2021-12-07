import { Fragment } from "react";
import classes from "./Project.module.css";
import html5 from "../../assets/icons/html5.svg";
import css3 from "../../assets/icons/css3.svg";
import js from "../../assets/icons/js.svg";
import react from "../../assets/icons/react.svg";
import git from "../../assets/icons/git.svg";

const Project = (props) => {
  const helper = (tool) => {
    if (tool === "html5") {
      return html5;
    } else if (tool === "css3") {
      return css3;
    } else if (tool === "js") {
      return js;
    } else if (tool === "react") {
      return react;
    } else if (tool === "git") {
      return git;
    }
  };

  console.log();
  return (
    <Fragment>
      <div
        onClick={props.clickHandler}
        style={{
          backgroundImage: `url(${props.obj.bgImg})`,
        }}
        className={
          props.curHighlighted === props.id
            ? `${classes.slide} ${classes.active}`
            : `${classes.slide} `
        }
      >
        <div className={classes["project_info"]}>
          <h2>{props.obj.title}</h2>
          <p>{props.obj.desc}</p>
          <div className={classes.links}>
            {props.obj.demoLink && (
              <a href={props.obj.demoLink} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
            <a href={props.obj.githubLink} target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
          <div className={classes["project_icons"]}>
            {props.obj.tools.map((tool) => (
              <div className={classes.icon}>
                <img
                  className={classes[`${tool}`]}
                  src={helper(tool)}
                  alt={`${tool}-logo`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
