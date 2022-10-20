import React from 'react'

const UserKYC = () => (
	<>
		<h2 className='m-3 text-center'>KYC</h2>
		<div className="col-md-6 mb-md-0 mb-2 mx-auto">
			<form method='POST' className="m-5" id='register-form'>

				<div className="form-group mb-4">
					<label htmlFor="name">Your First Name</label>
					<input type="text" name='name' className="form-control" id="name" placeholder="Enter Your First Name"
						autoComplete="off" required />
				</div>

				<div className="form-group mb-4">
					<label htmlFor="name">Your Middle Name</label>
					<input type="text" name='name' className="form-control" id="name" placeholder="Enter Your Middle Name"
						autoComplete="off" required />
				</div>


				<div className="form-group mb-4">
					<label htmlFor="name">Your Last Name</label>
					<input type="text" name='name' className="form-control" id="name" placeholder="Enter Your Last Name"
						autoComplete="off" required />
				</div>

				<div className="form-group mb-4">
					<label htmlFor="name">Your Birthdate</label>
					<input type="date" name='name' className="form-control" id="name" placeholder="Enter Your Birthdate"
						autoComplete="off" required />
				</div>

				<div className="form-group mb-4">
					<label htmlFor="name">Your Mobile Number</label>
					<input type="tel" name='name' className="form-control" id="name" placeholder="Enter Your Mobile Number"
						autoComplete="off" required />
				</div>

				<div className="form-group mb-4">
					<label htmlFor="name">Your Address</label>
					<input type="text" name='name' className="form-control" id="name" placeholder="Enter Your Address"
						autoComplete="off" required />
				</div>

				<div className="form-group mb-4">
					<label htmlFor="name">Your Adhaar Card Number</label>
					<input type="text" name='name' className="form-control" id="name" placeholder="Enter Your Adhaar Card Number"
						autoComplete="off" required />
				</div>

				<div className="form-group mb-4">
					<label htmlFor="name">Your Adhaar Card Image</label>
					<input type="file" name='name' className="form-control" id="name" placeholder="Enter Your Adhaar Card Image"
						autoComplete="off" required accept="image/*" />
				</div>

				<div className="form-group mb-4">
					<label htmlFor="name">Your PAN Card Number</label>
					<input type="text" name='name' className="form-control" id="name" placeholder="Enter Your PAN Card Number"
						autoComplete="off" required />
				</div>

				<div className="form-group mb-4">
					<label htmlFor="name">Your PAN Card Image</label>
					<input type="file" name='name' className="form-control" id="name" placeholder="Enter Your PAN Card Image"
						autoComplete="off" required accept="image/*" />
				</div>


				<div class="form-check mb-4">
					<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
					<label class="form-check-label" for="flexCheckDefault">
						I agree the terms and conditions
					</label>
				</div>

				<div className="form-group mb-4">
					<input type="submit" name='userKYC' className="btn btn-primary submitbuttom" id="userKYC" />
				</div>

			</form>
		</div>
	</>
)

export default UserKYC