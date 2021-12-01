import classes from "./Work.module.css";

const projects = [
  {
    id: 1,
    title: "project 1",
    desc: "project desc 1",
    bgImg:
      "https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
  },
  {
    id: 2,
    title: "project 2",
    desc: "project desc 2",
  },
];

const Work = () => {
  const helper = `${classes.work} container`;
  return (
    <section className={helper}>
      <div className={classes.layout}>
        <div
          style={{
            backgroundImage: `url(${projects[0].bgImg})`,
          }}
          className={`${classes.slide} slide-1 ${classes.active}`}
        >
          <div className={classes["project_info"]}>
            <h2>{projects[0].title}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </p>
            <div className={classes["project_icons"]}>
              <p>logo</p>
              <p>logo</p>
              <p>logo</p>
            </div>
          </div>
        </div>
        <div className={`${classes.slide} slide-1`}>
          <div className={classes["project_info"]}>
            <h2>project title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </p>
            <div className={classes["project_icons"]}>
              <p>logo</p>
              <p>logo</p>
              <p>logo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
