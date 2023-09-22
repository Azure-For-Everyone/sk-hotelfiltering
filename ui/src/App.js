import logo from './logo.svg';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHotels } from './actions';
import './App.css';

class App extends React.Component {
    constructor() {
      super();
    }

    componentDidMount(){
        const { dispatchGetHotels } = this.props;
        dispatchGetHotels();
    }

    render() {
        return (
            <div className="container-xxl bg-white p-0">

                <div className="container-fluid bg-dark px-0">
                    <div className="row gx-0">
                        <div className="col-lg-3 bg-dark d-none d-lg-block">
                            <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                            </a>
                        </div>
                        <div className="col-lg-9">
                            <div className="row gx-0 bg-white d-none d-lg-flex">

                                <div className="col-lg-5 px-5 text-end">
                                    <div className="d-inline-flex align-items-center py-2">
                                        <a className="me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="me-3" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="me-3" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="" href=""><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
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
                                        <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
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
                
                <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="bg-white shadow" style={{padding: "35px"}}>
                            <div className="row g-2">
                                <div className="col-md-10">
                                    <div className="row g-2">
                                        <div className="col-md-3">
                                            <div className="date" id="date1" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="hotel_name"
                                                    placeholder="Hotel name" data-target="#date1" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date2" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="hotel_address" placeholder="Address" data-target="#date2" data-toggle="datetimepicker"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select">
                                                <option selected>Stars</option>
                                                <option value="1">1 Star</option>
                                                <option value="2">2 Star</option>
                                                <option value="3">3 Star</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select">
                                                <option selected>Beds</option>
                                                <option value="1">1 Bed</option>
                                                <option value="2">2 Beds</option>
                                                <option value="3">3 Beds</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-primary w-100">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                        </div>
                        <div className="row g-4">
                            { this.props.hotels.map((hotel, index) => {
                                return <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="room-item shadow rounded overflow-hidden">
                                        <div className="position-relative">
                                            <img className="img-fluid" src={"img/"+hotel.image+".jpg"} alt=""></img>
                                            <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">${hotel.price}/Night</small>
                                        </div>
                                        <div className="p-4 mt-2">
                                            <div className="d-flex justify-content-between mb-3">
                                                <h5 className="mb-0">{hotel.name}</h5>
                                                <div className="ps-2">
                                                    {  [...Array(hotel.stars)].map((e, i) => { return <small className="fa fa-star text-primary"></small> }) }
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>{hotel.beds} Bed</small>
                                                <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>{hotel.bathrooms} Bath</small>
                                                { hotel.has_wifi && <small><i className="fa fa-wifi text-primary me-2"></i>Wifi</small> }
                                            </div>
                                            <p className="text-body mb-3">{hotel.description}</p>
                                            <div className="d-flex justify-content-between">
                                                <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">View Detail</a>
                                                <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                
                <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="service-item rounded" href="">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-hotel fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Rooms & Appartment</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <a className="service-item rounded" href="">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-utensils fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Food & Restaurant</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a className="service-item rounded" href="">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-spa fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Spa & Fitness</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                <a className="service-item rounded" href="">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-swimmer fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Sports & Gaming</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a className="service-item rounded" href="">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-glass-cheers fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Event & Party</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                <a className="service-item rounded" href="">
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-dumbbell fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">GYM & Yoga</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="owl-carousel testimonial-carousel py-5">
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: "45px", height: "45px"}}></img>
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                            </div>
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: "45px", height: "45px"}}></img>
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                            </div>
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{width: "45px", height: "45px"}}></img>
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
                            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-1.jpg" alt=""></img>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-2.jpg" alt=""></img>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-3.jpg" alt=""></img>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="rounded shadow overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-4.jpg" alt=""></img>
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 border rounded p-1">
                            <div className="border rounded text-center p-1">
                                <div className="bg-white rounded text-center p-5">
                                    <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
                                    <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                                        <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"></input>
                                        <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
                    <div className="container pb-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-4">
                                <div className="bg-primary rounded p-4">
                                    <a href="index.html"><h1 className="text-white text-uppercase mb-3">Hotelier</h1></a>
                                    <p className="text-white mb-0">
                                        Download <a className="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="row gy-5 g-4">
                                    <div className="col-md-6">
                                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                        <a className="btn btn-link" href="">About Us</a>
                                        <a className="btn btn-link" href="">Contact Us</a>
                                        <a className="btn btn-link" href="">Privacy Policy</a>
                                        <a className="btn btn-link" href="">Terms & Condition</a>
                                        <a className="btn btn-link" href="">Support</a>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                        <a className="btn btn-link" href="">Food & Restaurant</a>
                                        <a className="btn btn-link" href="">Spa & Fitness</a>
                                        <a className="btn btn-link" href="">Sports & Gaming</a>
                                        <a className="btn btn-link" href="">Event & Party</a>
                                        <a className="btn btn-link" href="">GYM & Yoga</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
                                    
                                    Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <a href="">Home</a>
                                        <a href="">Cookies</a>
                                        <a href="">Help</a>
                                        <a href="">FQAs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            </div>
        );
    }
}

const mapStateToProps = (state /* , ownProps */) => ({
    hotels: state.hotel.hotels,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchGetHotels: () => dispatch(getHotels()),
});

App.propTypes = {
    hotels: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
