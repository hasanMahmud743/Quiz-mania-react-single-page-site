import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';



const Statistics = () => {
    const data = useLoaderData().data
    
    return (
        <div >
            <h2 className='mb-5 mt-3'>This is  a graph chart of quiz ration in the module</h2>
                <LineChart className='m-auto pb-5' width={700} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>

        </div>
    );
};

export default Statistics;



