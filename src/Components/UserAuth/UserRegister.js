import React from 'react'

const UserRegister = () => (
    <>
        <h2 className='m-3 text-center'>Account Details</h2>
        <div className="col-md-6 mb-md-0 mb-2 mx-auto">
            <form method='POST' className="m-5" id='register-form'>

                <div className="form-group mb-4">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' className="form-control" id="name" placeholder="Enter Your Name"
                        autoComplete="off" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name='email' className="form-control" id="email" placeholder="Enter Your Email"
                        autoComplete="off" required />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="password">Create Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder="Enter Your Password"
                        autoComplete="off" required />
                </div>

                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault"> 
                            I agree the terms and conditions
                        </label>
                </div>

                <div className="form-group mb-4">
                    <input type="submit" name='register' className="btn btn-primary submitbuttom" id="register" />
                </div>

                <div className="form-group mb-4">
                    <label><a href='/userLogin'>Already have account? Login</a></label>
                </div>

            </form>
        </div>
    </>
)

export default UserRegister