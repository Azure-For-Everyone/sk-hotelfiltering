import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHotels, filterHotels, filterHotelsWithSemanticSearch } from './actions';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import config from './config'; // adjust the path if necessary

console.log(config.API_URL);

class App extends React.Component {
    constructor() {
        super();
        this.filterHotels = this.filterHotels.bind(this);
        this.filterHotelsWithSemanticSearch = this.filterHotelsWithSemanticSearch.bind(this);
    }

    componentDidMount(){
        const { dispatchGetHotels } = this.props;
        dispatchGetHotels();
    }

    filterHotels(){
        // Get dom element with id "hotel_name"
        const name = document.getElementById("hotel_name").value;
        const address = document.getElementById("hotel_address").value;
        const stars = document.getElementById("hotel_stars").value;
        const beds = document.getElementById("hotel_beds").value;
        const { dispatchFilterHotels } = this.props;
        dispatchFilterHotels({name, address, stars, beds});
    }

    filterHotelsWithSemanticSearch(){
        // Get dom element with id "hotel_name"
        const search = document.getElementById("semantic_search").value;
        const { dispatchFilterHotelsWithSemanticSearch } = this.props;
        dispatchFilterHotelsWithSemanticSearch(search);
    }

    render() {
        return (
            <div className="container-xxl bg-white p-0">

                { Header() }

                { /* Filter */ } 
                <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="bg-white shadow" style={{padding: "35px"}}>
                            <div className="row g-2">
                                <div className="col-md-10">
                                    <div className="row g-2">
                                        <div className="col-md-3">
                                            <div className="date" id="date1" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="hotel_name" placeholder="Hotel name"  />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date2" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="hotel_address" placeholder="Address"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select" id="hotel_stars">
                                                <option selected>Stars</option>
                                                <option value="1">1 Star</option>
                                                <option value="2">2 Star</option>
                                                <option value="3">3 Star</option>
                                                <option value="4">4 Star</option>
                                                <option value="5">5 Star</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select" id="hotel_beds">
                                                <option selected>Beds</option>
                                                <option value="1">1 Bed</option>
                                                <option value="2">2 Beds</option>
                                                <option value="3">3 Beds</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button onClick={this.filterHotels} className="btn btn-primary w-100">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
                 { /* Hotels listed */ }
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                        </div>

                       <div className="bg-white shadow" style={{padding: "35px"}}>
                            <div className="container">
                                <div className="row g-2">
                                    <div className="col-md-10">
                                        <input type="text" className="form-control datetimepicker-input" id="semantic_search" placeholder="Do some magic search using semantic kernel.."/>
                                    </div>
                                    <div className="col-md-2">
                                        { !this.props.loading && <button onClick={this.filterHotelsWithSemanticSearch} className="btn btn-primary w-100">Submit</button> }
                                        { this.props.loading && <button className="btn btn-primary w-100"><div class="lds-dual-ring"></div> Loading..</button> }
                                    </div>
                                </div>
                            </div>
                            </div> 

                        <div className="row g-4">
                            { this.props.hotels.map((hotel, index) => {
                                return <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="room-item shadow rounded overflow-hidden">
                                        <div className="position-relative">
                                            <img className="img-fluid" src={"img/"+hotel.image} alt=""></img>
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

                { Footer() }

            </div>
        );
    }
}

const mapStateToProps = (state /* , ownProps */) => ({
    hotels: state.hotel.hotels,
    loading: state.hotel.loading,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchGetHotels: () => dispatch(getHotels()),
    dispatchFilterHotels: (filter) => dispatch(filterHotels(filter)),
    dispatchFilterHotelsWithSemanticSearch: (search) => dispatch(filterHotelsWithSemanticSearch(search)),
});

App.propTypes = {
    hotels: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
