import React from 'react'
import { Link } from 'react-router-dom';

const VerifyOTP = () => (
    <>
        <h2 className='m-3 text-center'>Verify OTP</h2>
        <div className="col-md-6 mb-md-0 mb-2 mx-auto">
            <form method='POST' className="m-5" id='register-form'>
 
                <div className="form-group mb-4">
                    <label htmlFor="otp">Type your OTP</label>
                    <input type="password" name='otp' className="form-control" id="otp" placeholder="Enter Your OTP"
                        autoComplete="off" required />
                </div>

                <div className="form-group mb-4">
                    <Link to='/userdashboard'><input type="submit" name='verify' className="btn btn-primary submitbuttom" id="verify" /></Link>
                </div>

                <div className="form-group mb-4">
                    <label><Link to="/verifyotp">Resent OTP</Link></label>
                </div>

            </form>
        </div>
    </>
)

export default VerifyOTP