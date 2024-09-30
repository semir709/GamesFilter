import "./about.css";

const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <div className="content">
        <p>
          <span>
            Welcome to my project, a clone of the RAWG video game database
            website! This site was created as a personal challenge to improve my
            front-end development skills, with a focus on implementing infinite
            loading for content. I use the RAWG API to provide all the game data
            displayed here. Special thanks to RAWG for making their API
            available. Please note that this site is for educational purposes
            only and is not intended for commercial use.
          </span>
        </p>
        <p className="contact">
          <span>
            If you'd like to follow my work or get in touch, feel free to reach
            out: <br />
            GitHub:
            <a
              href="https://github.com/semir709"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/semir709
            </a>
            <br /> Username Email: selmansemir5@gmail.com <br />
            I’m always open to feedback, collaboration, and learning
            opportunities!
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
