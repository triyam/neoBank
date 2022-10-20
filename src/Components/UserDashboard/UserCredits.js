import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const UserCredits = () => (
    <>
        <div className='mobileNav'>
            <h3 className='text-center'><Link to="/userdashboard" style={{color:"white"}}><BsChevronLeft /></Link>&nbsp;&nbsp;&nbsp;Credits</h3>
        </div>

        <h2 className='m-3 text-center'>Credits</h2>
        
    </>
)

export default UserCredits