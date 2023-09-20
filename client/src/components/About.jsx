import image from "../images/about.jpeg";

const About = () => {
  return (
    <div className="dad_container_about">
      <div className="about_container">
        <h1 className="about_tittle">
          Matias Pablo Spano <hr />
        </h1>

        <img className="about_picture" src={image} alt="" />
        <p>
          Hi everyone! it´s Matias from Argentina Buenos Aires, let me tell you
          that I have been sprearing myself the hole year to be a full stack
          developer and this work is my first integrating frontend and backend
          in professional way. <br />
          Apreaciate so much you had been here.
          <br /> cheers!
        </p>
      </div>
    </div>
  );
};

export default About;
