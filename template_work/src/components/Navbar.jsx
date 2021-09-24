import React from 'react';
import '../styles/main.css';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Chart from '../pages/Chart';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineBehance } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='row1'>
                <span className='centerText'>Coding</span>
                <span className='colorBlue'>Addict</span>
            </div>
            <div className='page'>
                <div>
                    <Home />
                    <div className='likeHr'></div>
                </div>
                <div className='spacing'>
                    <About />
                    <div className='likeHr'></div>
                </div>
                <div className='spacing'>
                    <Products />
                    <div className='likeHr'></div>
                </div>
                <div className='spacing'>
                    <Chart />
                    <div className='likeHr'></div>
                </div>
            </div>
            <div className='media'>
                <a href="https://www.facebook.com/"><FaFacebook /></a>
                <div className='spacing'><a href="https://twitter.com/?lang=en"><AiOutlineTwitter /></a></div>
                <div className='spacing'><a href="https://www.linkedin.com/"><AiFillLinkedin /></a></div>
                <div className='spacing'><a href="https://www.behance.net/"><AiOutlineBehance /></a></div>
            </div>
        </div>
    )
}

export default Navbar;
