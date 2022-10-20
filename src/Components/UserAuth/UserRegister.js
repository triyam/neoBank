import React, { useState } from "react";
import axios from "axios"

const UserRegister = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = user;

        axios
            .post("http://localhost:5000/register", {
                name,
                email,
                password,
                confirmPassword,
            })
            .then(function (response) {
                console.log(response);
                window.alert("Registration Successful!");
                console.log("Registration Successful!");
                // navigate("/login");
            })
            .catch(function (error) {
                console.log(error);
                window.alert("Invalid Registration!");
                console.log("Invalid Registration!");
            });
    };

    return (
        <>
            <h2 className='m-3 text-center'>Account Details</h2>
            <div className="col-md-6 mb-md-0 mb-2 mx-auto">
                <form method='POST' className="m-5" id='register-form'>

                    <div className="form-group mb-4">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Enter Your Name"
                            autoComplete="off"
                            value={user.name}
                            onChange={handleInputs}
                        />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email"
                            autoComplete="off"
                            value={user.email}
                            onChange={handleInputs}
                        />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="password">Create Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password">Confirm  Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Your Password"
                            autoComplete="off"
                            value={user.confirmPassword}
                            onChange={handleInputs}
                        />
                    </div>

                    <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            I agree the terms and conditions
                        </label>
                    </div>

                    <div className="form-group mb-4">
                        <input
                            type="submit"
                            name="signup"
                            className="btn btn-primary"
                            id="signup"
                            value="Register"
                            onClick={PostData}
                        />
                    </div>

                    <div className="form-group mb-4">
                        <label><a href='/userLogin'>Already have account? Login</a></label>
                    </div>

                </form>
            </div>
        </>
    )
}

export default UserRegister