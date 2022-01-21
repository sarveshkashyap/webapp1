import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

function Homepage(){
    return (<div>
        <section className="section-1 container-fluid">
            <Navbar />

  {/* <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img class="slideImage" src="backimg/1.jpeg" class="d-block w-100" alt="1"></img>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img class="slideImage" src="backimg/2.jpg" class="d-block w-100" alt="2"></img>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <img class="slideImage" src="backimg/3.jpg" class="d-block w-100" alt="3"></img>
      <div class="carousel-caption d-none d-md-block">

      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}

            <div className="banner">
            <h1 className="banner-heading">Let's Build a Better Future</h1>
            <p className="banner-paragraph">Every year millions of children around 
            the world drop out of school because of a lack of financial support from 
            their poor families. And they work with the family to bring themselves to school.</p>
            <button className="blue-btn">Learn More</button>
        </div>


        </section>
        <Cards />
        <Footer />


        </div>

    );
}

export default Homepage;