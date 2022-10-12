import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            
            <Container>
                <Row>
                    <div className='d-flex m-5 banner-img justify-content-center align-items-center '>

                    <img className='col-md-5' src="https://www.98thpercentile.com/hubfs/Website%20Images/qw_Images/qw-ele-2.png" alt="" />
                    <div className='col-md-7 p-4'>
                        <h2 > Train your Brain to Make it happen. Its time to prove your talent</h2>
                    </div>
                </div>
                </Row>
            </Container>
            
        </div>
    );
};

export default Banner;