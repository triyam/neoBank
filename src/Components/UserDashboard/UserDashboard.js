import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const UserDashboard = () => (
  <>
    <div className='mobileNav'>
      <h3 className='text-center'><span className='backButton'><BsChevronLeft/></span><span className='mobnavtext'>Convenient service</span><span className='mobnavtexthide'>Dashboard</span></h3>
    </div>

    <h2 className='m-3 text-center' >Have a Convenient service with us</h2>
    <div className="col-md-6 mb-md-0 mb-2 mx-auto">
      <div class="grey-bg container-fluid">
        <section id="minimal-statistics">
          <div class="row">
          <div class=" col-sm-6 col-12">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="align-self-center">
                    </div>
                    <div class="media-body text-right">
                      <Link style={{textDecoration: 'none', color:"#884F60"}} to="/usercredits"><h3>Credits</h3></Link>
                      <span>Management and payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div class=" col-sm-6 col-12">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="align-self-center">

                    </div>
                    <div class="media-body text-right">
                    <Link style={{textDecoration: 'none', color:"#884F60"}} to="/userdeposits"><h3>Deposits</h3></Link>
                      <span>Manage your saving</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div class=" col-sm-6 col-12">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="align-self-center">

                    </div>
                    <div class="media-body text-right">
                    <Link style={{textDecoration: 'none', color:"#884F60"}} to="/usertickets"><h3>Tickets</h3></Link>
                      <span>Buying Tickets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div class=" col-sm-6 col-12">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="align-self-center">

                    </div>
                    <div class="media-body text-right">
                    <Link style={{textDecoration: 'none', color:"#884F60"}} to="/usercashback"><h3>Cashback</h3></Link>
                      <span>Get Cashback on every purchase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div class="col-sm-6 col-12">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="align-self-center">

                    </div>
                    <div class="media-body text-right">
                      <h3>Exchange</h3>
                      <span>Exchange your currency with crypto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class=" col-sm-6 col-12">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="align-self-center">
                    </div>
                    <div class="media-body text-right">
                    <Link style={{textDecoration: 'none', color:"#884F60"}} to="/userprofile"><h3>Profile</h3></Link>
                      <span>Visit your Account for more info</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div class="col-sm-6 col-12 col-xl-12">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="align-self-center">
                    </div>
                    <div class="media-body text-right">
                      <h3>Logout</h3>
                      <span>Successfully logout from the Dashboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>


        </section>
      </div>

    </div>
  </>
)

export default UserDashboard