import classes from "./About.module.css";
import resume from "../../assets/cv/Haitham Sayed Muhammad Resume.pdf";

const About = () => {
  const helper = `${classes.about} container`;
  return (
    <section className={helper}>
      <div className={classes["about_info"]}>
        <h1>About me</h1>

        <p>
          Hello world! I’m Haitham and I’m a self-taught front-end web developer
          based in Egypt.
        </p>
        <a
          href={resume}
          download="Haitham Sayed's resume"
          className={classes.btn}
        >
          Download Resume
        </a>
        <h2>Web development:</h2>
        <p>
          My interest in web development started back in 2018, I began with a
          full-stack course on Udemy but found out that there are some missing
          pieces and information so I started to dig deeper into learning the
          fundamentals, basics and best practices of
          <span className={classes["special_text"]}> HTML</span>,
          <span className={classes["special_text"]}> CSS</span>,
          <span className={classes["special_text"]}> JavaScript</span> and
          <span className={classes["special_text"]}> React</span> as I noticed
          my curiosity of delivering best efficient solutions as performance and
          code’s quality, Along the way I’ve dealt with many tools and
          frameworks such as:{" "}
          <span className={classes["special_text"]}> SASS</span>,{" "}
          <span className={classes["special_text"]}> Bootstrap</span>,{" "}
          <span className={classes["special_text"]}> Tailwind</span>,{" "}
          <span className={classes["special_text"]}> Git&Github</span>,{" "}
          <span className={classes["special_text"]}> React Router</span> and{" "}
          <span className={classes["special_text"]}> Redux</span>, Also I worked
          as a <span className={classes["special_text"]}> Wordpress</span>{" "}
          developer freelancer as I build a couple of websites using WordPress
          and Elementor pro.
        </p>
        <h2>Digital marketing:</h2>
        <p>
          Beside being a front-end student, I enjoyed learning more about
          <span className={classes["special_text"]}> digital marketing </span>
          in 2020, since due to my perspective you will use marketing in many
          activities including marketing yourself as a brand and as a service,
          with a <span className={classes["special_text"]}> 1-year </span>
          professional experience in{" "}
          <span className={classes["special_text"]}>
            {" "}
            social media marketing{" "}
          </span>{" "}
          and
          <span className={classes["special_text"]}> media buying</span>
        </p>
        <h2>More about me:</h2>
        <p>
          I’m not your regular tech-savvy as I’m also a hardcore pc gamer, I
          played video games competitively for 8 years and participated in many
          local tournaments across Egypt as both{" "}
          <span className={classes["special_text"]}> Team’s leader </span> and{" "}
          <span className={classes["special_text"]}> coach </span> as I have a
          wide knowledge when it comes to building muscle memory and narrowing
          down your range of mistakes and handling emotional stress while
          playing
        </p>
      </div>
    </section>
  );
};

export default About;
