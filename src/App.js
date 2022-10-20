import logo from './logo.svg';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import './App.css';
import UserLogin from './Components/UserAuth/UserLogin';
import UserRegister from './Components/UserAuth/UserRegister';
import VerifyOTP from './Components/UserAuth/VerifyOTP';
import UserKYC from './Components/UserAuth/UserKYC';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import UserProfile from './Components/UserDashboard/Userprofile';
import UserCredits from './Components/UserDashboard/UserCredits';
import UserExchange from './Components/UserDashboard/UserExchange';
import UserDeposits from './Components/UserDashboard/UserDeposits';
import UserTickets from './Components/UserDashboard/UserTickets';
import UserCashback from './Components/UserDashboard/UserCashback';

function App() {
  return (
        <div className="app">
           <Routes>
                 <Route exact path='/userlogin' element={< UserLogin />}></Route>
                 <Route exact path='/userregister' element={<UserRegister/>}></Route>
                 <Route exact path='/verifyotp' element={<VerifyOTP/>}></Route>
                 <Route exact path='/userkyc' element={<UserKYC/>}></Route>
                 <Route exact path='/userprofile' element={<UserProfile/>}></Route>
                 <Route exact path='/usercredits' element={<UserCredits/>}></Route>
                 <Route exact path='/userexchange' element={<UserExchange/>}></Route>
                 <Route exact path='/userdeposits' element={<UserDeposits/>}></Route>
                 <Route exact path='/usertickets' element={<UserTickets/>}></Route>
                 <Route exact path='/usercashback' element={<UserCashback/>}></Route>
                 <Route exact path='/userdashboard' element={<UserDashboard/>}></Route>
          </Routes>
          </div>
  );
}

export default App;
