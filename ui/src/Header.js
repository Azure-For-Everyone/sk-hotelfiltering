import React from 'react';

function Header() {
    return (
        <>
         <div className="container-fluid bg-dark px-0">
                    <div className="row gx-0">
                        <div className="col-lg-3 bg-dark d-none d-lg-block">
                            <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                            </a>
                        </div>
                        <div className="col-lg-9">
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="index.html" className="navbar-brand d-block d-lg-none">
                                    <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                                </a>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav mr-auto py-0">
                                        <a href="index.html" className="nav-item nav-link active">Home</a>
                                        <a href="about.html" className="nav-item nav-link">About</a>
                                        <a href="service.html" className="nav-item nav-link">Services</a>
                                        <a href="room.html" className="nav-item nav-link">Rooms</a>
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                            <div className="dropdown-menu rounded-0 m-0">
                                                <a href="booking.html" className="dropdown-item">Booking</a>
                                                <a href="team.html" className="dropdown-item">Our Team</a>
                                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                            </div>
                                        </div>
                                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid p-0 mb-5">
                    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="w-100" src="img/carousel-1.jpg" alt="Image"></img>
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{maxWidth: "700px"}}>
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Siesta Hotels</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Hotel in Costa Brava</h1>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                        <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="img/carousel-2.jpg" alt="Image"></img>
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{maxWidth: "700px"}}>
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                                        <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
                                        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a>
                                        <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                
                </>
    )
}

export default Header;