import logo from './logo.svg';
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
    <div className='app'>
      <UserDashboard/>
    </div>
  );
}

export default App;
