import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import QuizDetails from '../QuizDetails/QuizDetails';
import './Home.css';


const Home = () => {
    const quizs = useLoaderData().data

    return (
        <div className='home'>
            <Banner></Banner>
            <Container>
            <Row>
                
                {
                    quizs.map(quiz=> 
                        <Col md={6} lg={3}>
                            <QuizDetails quiz={quiz} key={quiz.id}></QuizDetails>
                        </Col>)

                }
            </Row>

            </Container>

            
           
               
            
        </div>
    );
};

export default Home;