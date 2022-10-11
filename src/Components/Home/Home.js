import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';


const Home = () => {
    const quizs = useLoaderData().data

    return (
        <div>
            <h2>This is home Components</h2>

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