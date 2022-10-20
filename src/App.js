import logo from './logo.svg';
import './App.css';
import UserLogin from './Components/UserAuth/UserLogin';
import UserRegister from './Components/UserAuth/UserRegister';
import VerifyOTP from './Components/UserAuth/VerifyOTP';
import UserKYC from './Components/UserAuth/UserKYC';
import UserDashboard from './Components/UserDashboard/UserDashboard';

function App() {
  return (
    <div className='app'>
      <UserDashboard/>
    </div>
  );
}

export default App;
