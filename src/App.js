
import './App.css';
import Header from "./Components/header"
import Timer from "./Components/Timer"
import Nav from "./Components/nav"
import Stages from "./Components/Stages"
import CountDown from "./Components/countDown/coundown"
import Footer from "./Components/footer/footer"

function App() {
  return (
    <div className="App">
<Nav />
<Header />
<CountDown timeTillDate="8 31 2019, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
<Timer />
{/* <Stages /> */}
<Footer/>
    </div>
  );
}

export default App;
