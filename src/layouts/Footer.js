import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer class="main-footer">
            <div class="float-right d-none d-sm-inline">
                Anything you want
            </div>
            
            <strong>Copyright © 2014-2021 <Link to="https://adminlte.io">AdminLTE.io</Link>.</strong> All rights reserved.
        </footer>
    );
}
export default Footer;