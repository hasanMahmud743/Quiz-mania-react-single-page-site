import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            
            <Container>
                
                    <div className=' p-5 banner-img justify-content-center align-items-center '>
                    <Row>
                    <div className='img-div col-md-5'>
                    <img className='' src="https://www.98thpercentile.com/hubfs/Website%20Images/qw_Images/qw-ele-2.png" alt="" />
                    </div>
                    <div className='col-md-7 mt-4 p-sm-0 p-md-4'>
                        <h2 > Train your Brain to Make it happen. Its time to prove your talent.</h2>
                    </div>
                    </Row>
                </div>
              
            </Container>
            
        </div>
    );
};

export default Banner;