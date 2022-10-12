import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css';



const Statistics = () => {
    const data = useLoaderData().data
    
    return (
        <div className='graph' >
            <h2 className='mb-5 pt-5 '>This is  a graph chart of quiz ration in the module</h2>
                <ResponsiveContainer className='m-auto'  width='80%' height='70%'>
                <LineChart className='m-auto pb-5'  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                </ResponsiveContainer>

        </div>
    );
};

export default Statistics;



