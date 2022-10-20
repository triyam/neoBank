import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const UserDeposits = () => (
    <>
        <div className='mobileNav'>
            <h3 className='text-center'><Link to="/userdashboard" style={{color:"white"}}><BsChevronLeft /></Link>&nbsp;&nbsp;&nbsp;Deposits</h3>
        </div>

        <h2 className='m-3 text-center'>Deposits</h2>
        
    </>
)

export default UserDeposits