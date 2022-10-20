import React from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => (
    <>
        <h2 className='m-3 text-center'>Account Login</h2>
        <div className="col-md-6 mb-md-0 mb-2 mx-auto">
            <form method='POST' className="m-5" id='register-form'>

                <div className="form-group mb-4">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name='email' className="form-control" id="email" placeholder="Enter Your Email"
                        autoComplete="off" required />
                </div>
                
                <div className="form-group mb-4">
                    <label htmlFor="password">Your Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder="Enter Your Password"
                        autoComplete="off" />
                </div>

                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        I agree the terms and conditions
                    </label>
                </div>

                <div className="form-group mb-4">
                <Link to="/verifyotp"><input type="submit" name='login' className="btn btn-primary submitbuttom" id="login" /></Link>
                </div>

                <div className="form-group mb-4">
                    <label><Link to='/userregister'>Dont have account? Register</Link></label>
                </div>

            </form>
        </div>
    </>
)

export default UserLogin