import React from "react";

function Navbar(){
    return (<div className="navbar-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dar">
    <div class="container-fluid">
      <img class="logo" src="/images/logo.png" alt="UHF"></img>
      <button class="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a style={{color: "white"}} class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a style={{color: "white"}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            WHO WE ARE
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">BOARD OF DIRECTORS</a></li>
              <li><a class="dropdown-item" href="#">EXECUTIVE STAFF</a></li>
              <li><a class="dropdown-item" href="#">FINANCIALS</a></li>
              <li><a class="dropdown-item" href="#">ALUMNI</a></li>
              <li><a class="dropdown-item" href="#">CAREERS</a></li>
              <li><a class="dropdown-item" href="#">DEIB</a></li>
              <li><a class="dropdown-item" href="#">SANCTUARY</a></li>
              <li><a class="dropdown-item" href="#">CONTACT US</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a style={{color: "white"}} class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            WHAT WE DO
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">HEALTH & WELLNESS</a></li>
              <li><a class="dropdown-item" href="#">RESIDENTIAL TREATMENT CENTER</a></li>
              <li><a class="dropdown-item" href="#">ADULTS WITH DEVELOPMENTAL DISABILITIES</a></li>
              <li><a class="dropdown-item" href="#">PRINT & MAIL - MEMORIAL CARD</a></li>
              <li><a class="dropdown-item" href="#">PRINT & MAIL - SPECIAL INTENTION</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a style={{color: "white"}} class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GET INVOLVED
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">HOLIDAY MAGIC</a></li>
              <li><a class="dropdown-item" href="#">BECOME A FOSTER PARENT</a></li>
              <li><a class="dropdown-item" href="#">DONATE A VEHICLE</a></li>
              <li><a class="dropdown-item" href="#">VOLUNTEER</a></li>
              <li><a class="dropdown-item" href="#">DONATE NOW</a></li>
              <li><a class="dropdown-item" href="#">JOIN OUR MAILING LIST</a></li>
              <li><a class="dropdown-item" href="#">DONOR BILL OF RIGHTS</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a style={{color: "white"}} class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EVENTS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">ANNUAL GOLF OUTING</a></li>
              <li><a class="dropdown-item" href="#">FOSTERING HOPE</a></li>
            </ul>
          </li>
        </ul>
        <div className="navbar-buttons">
                <button class="navbar-btn login-btn">Login</button>
                <button class="navbar-btn signup-btn">Sign</button>
                <button class="navbar-btn donate-btn">Donate Now</button>
            </div>
      </div>
    </div>
  </nav>
  </div>

    );
}



export default Navbar;