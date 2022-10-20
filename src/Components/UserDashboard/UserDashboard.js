import React from 'react'
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const UserDashboard = () => (
  <>
    <div className='mobileNav'>
      <h3 className='text-center'><Link to="/userlogin" style={{color:"white"}}><BsChevronLeft/></Link>&nbsp;&nbsp;&nbsp;Convenient service</h3>
    </div>

    <h2 className='m-3 text-center' >Convenient service in the App</h2>
    <div className="col-md-6 mb-md-0 mb-2 mx-auto">
      <div class="grey-bg container-fluid">
        <section id="minimal-statistics">
          <div class="row">

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

            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="align-self-center">

                    </div>
                    <div class="media-body text-right">
                    <Link style={{textDecoration: 'none', color:"#884F60"}} to="/userexchange"><h3>Exchange</h3></Link>
                      <span>Exchange your currency with crypto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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


        </section>
      </div>

    </div>
  </>
)

export default UserDashboard