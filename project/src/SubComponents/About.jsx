import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
          At Prime Haven, we understand that finding the perfect luxury rental can sometimes feel overwhelming. Don't worry; we're here to help! Our team is dedicated to making your experience as smooth as possible. If you ever feel uncertain or have questions about anything, just reach out to us.
          </p>
          <p>
          We pride ourselves on transparency and quality, ensuring that every property meets our high standards. Your comfort and satisfaction are our top priorities, and we’re here to guide you every step of the way.
          </p>
          <p>
          Whether you’re seeking a stylish getaway or a long-term luxurious home, Prime Haven has something special for everyone. Let us help you discover the space that feels just right for you!
          </p>
          </div>
          <button>WE COMMIT TO PROVIDING YOU WITH EXCEPTIONAL HOMES FOR YOUR STAY!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
