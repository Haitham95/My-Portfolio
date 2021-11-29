import classes from "./Welcome.module.css";
import img from "./final profile.png";

const Welcome = () => {
  const helper = `container ${classes.welcome}`;
  return (
    <section className={helper} id="welcome">
      <header className={classes.flex}>
        <div className={classes.img}>
          <img src={img} alt="personal-img" />
        </div>
        <div className={classes.description}>
          <h1>Haitham Sayed Muhammed</h1>
          <h2>A front-end web developer</h2>
          <p>
            Started my lifetime self-learning process in 2018 in both
            programming - As my main field and Digital marketing - As I'm
            marketing myself now to you, Building friendly user-experience web
            applications using HTML5 and CSS3, JavaScript, React.js and Git and
            GitHub for source management, Aligning with the businesses needs and
            pain points, As my mission is to increase business's value by
            solving-problems.
          </p>
        </div>
      </header>
    </section>
  );
};

export default Welcome;
