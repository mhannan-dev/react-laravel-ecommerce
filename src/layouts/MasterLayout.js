import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Dashboard from '../components/admin/Dashboard';

const MasterLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Dashboard />
            <Footer />
        </>
    );
}

export default MasterLayout;