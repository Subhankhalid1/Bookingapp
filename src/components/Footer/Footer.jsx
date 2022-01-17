import React from 'react';
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import Divider from '@mui/material/Divider';
// import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="footer-container py-2 px-5  ">
            <div className="container py-3 ">
                <Row>
                    <Col className="footer-2nd-col" lg={12} md={12} sm={12}>
                        <section>

                            <div className="fw-light footer-padding-comp py-5 font-size text-white">
                                <span className="heading ">
                                    5858 W Riggs Rd, Chandler, Arizona, 85226, United States
                                    The Policies and Practices of RI Auto Shop apply to the use of your data.
                                </span>

                            </div>
                        </section>
                    </Col>

                </Row>
                <Divider variant="middle" style={{backgroundColor:'white', paddingBottom:'5px', marginBottom:'10px'}} />
                <span style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '20px', color: '#898989', fontFamily: 'roboto', paddingBottom: '5px' }}> Powered by Microsoft Bookings
                    © 2022 Microsoft</span>

            </div>
        </div>
    )
}

export default Footer;
