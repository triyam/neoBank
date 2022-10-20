import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const UserExchange = () => (
    <>
        <div className='mobileNav'>
            <h3 className='text-center'><Link to="/userdashboard" style={{color:"white"}}><BsChevronLeft /></Link>&nbsp;&nbsp;&nbsp;Exchange</h3>
        </div>

        <h2 className='m-3 text-center'>Exchange</h2>
        
    </>
)

export default UserExchange