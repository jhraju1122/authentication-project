import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Root = () => {
    return (
        <div className='max-w-full md:max-w-full mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;