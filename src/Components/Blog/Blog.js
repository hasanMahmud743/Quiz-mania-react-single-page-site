import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
       <div className='pt-5 blogs'>
         <Container >
            <div>
            <h2> Lets have some study on React-Router Basic...</h2>

            <h3> Question 01: Write down the purpose of "React-Router".</h3>
            <p> <span className='fw-bold'>Answer:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
            Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components. </p>

            <h3>Question 02: How does "Context API" works? </h3>
            <p> <span className='fw-bold'>Answer:</span> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

            In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            <h3> Question: Write down the use of "useRef".</h3>
            <p> <span className='fw-bold'>Answer:</span> The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
            The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.  The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue)

            </p>
            
        </div>
        </Container>
       </div>
    );
};

export default Blog;