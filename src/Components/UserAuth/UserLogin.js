import React from 'react'

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { state, dispatch } = useContext(UserContext);

    const loginUser = async (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/signin", {
                email,
                password,
            })
            .then(function (response) {
                console.log(response.data);
                window.alert("Login Successful!");
                // console.log("Login Successful!");
                localStorage.setItem("jwt", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                // navigate("/");
            })
            .catch(function (error) {
                console.log(error);
                window.alert("Invalid Credentials!");
                console.log("Invalid Credentials!");
            });
    };
    return (
        <>
            <h2 className='m-3 text-center'>Account Login</h2>
            <div className="col-md-6 mb-md-0 mb-2 mx-auto">
                <form method='POST' className="m-5" id='register-form'>

                    <div className="form-group mb-4">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                        />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="password">Your Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                    </div>

                    <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            I agree the terms and conditions
                        </label>
                    </div>

                <div className="form-group mb-4">
                    <input type="submit" name='login' className="btn btn-primary submitbuttom" id="login" />
                </div>

                <div className="form-group mb-4">
                    <label><a href='/UserRegister'>Dont have account? Register</a></label>
                </div>

                </form>
            </div>
        </>
    )
}

export default UserLogin