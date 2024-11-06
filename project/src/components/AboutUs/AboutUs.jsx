import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>At Prime Haven, we believe that your home should be a sanctuary—where elegance meets tranquility. Our carefully curated collection of luxury homes is designed to offer not only breathtaking beauty but also the assurance of unparalleled quality and comfort.</p>
          <p>Imagine coming home to a space that truly reflects your aspirations. We provide more than just real estate; we offer a seamless experience tailored to your lifestyle, making every moment exceptional.</p>
          <p>Whether you're dreaming of oceanfront vistas or a sophisticated urban oasis, Prime Haven is committed to turning your vision into reality. Explore our exquisite properties and discover the luxury of living without compromise.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
