
import './App.css';
import Header from "./Components/header"
import Timer from "./Components/Timer"
import Nav from "./Components/nav"
import Stages from "./Components/Stages"
import ModalForm from './Components/ModalForm';
import ContractInfo from './Components/ContractInfo';
import CountDown from "./Components/countDown/coundown"
import Footer from "./Components/footer/footer"
import { useState } from 'react';


function App() {

  const [show, setShow] = useState(false);
  const [showContract, setShowContract] = useState(false);

  function showModal(show){
    setShow(show);
  }

  function closeModal(close){
    setShow(close);
  }

  function showContractModal(show){
    setShowContract(show);
  }

  function closeContractModal(close){
    setShowContract(close);
  }

  return (
    <div className="App">
<Nav />
<Header showModal={showModal} />
{
  show
  ?
  <ModalForm hideModal={closeModal} />
  :
  ""
}
<CountDown timeTillDate="11 10 2021, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
<Timer showModal={showContractModal} />
{
  showContract
  ?
  <ContractInfo hideModal={closeContractModal}/>
  :
  ""
}

<Stages showModal={showModal} />
<Footer/>
    </div>
  );
}

export default App;
