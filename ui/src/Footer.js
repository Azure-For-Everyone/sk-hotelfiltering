import React from 'react';

function Footer() {
    return ( <>   
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
        </>
    )
}

export default Footer;