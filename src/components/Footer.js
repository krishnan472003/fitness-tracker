import React from "react"
import { Link } from "react-router-dom"
const Footer = () => <footer className="page-footer font-small blue">
    <div className="container-fluid text-center text-md-left bg-dark text-light">
        <div className="row">
            <div className="col-md-6 mt-md-0 ">
                <h5 className="text-uppercase mt-3">Fitness Tracker</h5>
                <p>Made by Krishnan Subramanian.</p>
                <p>CE'25 Sardar patel institute of technology.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li style={{"position":"relative","left":"0rem"}}>&#169; FitnessTracker@krishnan</li>
                </ul>
                
            </div>

    
        </div>
    </div>

</footer>

export default Footer