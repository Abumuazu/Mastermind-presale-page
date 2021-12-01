
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
import Carousels from './Components/Carousel/carousel';
import styled from "styled-components"
import MetaCarousels from "./Components/MetaCarousel/MataCarousel"


function App() {

  const [show, setShow] = useState(false);
  const [showContract, setShowContract] = useState(false);
  const [trustCarousel, setTrustCarousel] = useState(false);
  const[metaCarousel, setMetaCarousel] = useState(true);
 

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

// Logics for handling screenshots explanation 
function handleMetaMask(){
  setMetaCarousel(true);
  setTrustCarousel(false)

}
function handleTrust() {
  setTrustCarousel(true)
  setMetaCarousel(false);

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
{/* <CountDown timeTillDate="11 30 2021, 10:00 am" timeFormat="MM DD YYYY, h:mm a" /> */}
<Timer showModal={showContractModal} />
{
  showContract
  ?
  <ContractInfo hideModal={closeContractModal}/>
  :
  ""
}

<Stages showModal={showModal} />
<Container>
<HowToBtns>
              <MetaMask onClick={handleMetaMask} style={{ color: metaCarousel ? '#343434' : '#ffffff', backgroundColor: metaCarousel ? '#4dffff' : 'transparent' }}> MetaMask Screen Steps</MetaMask>
              <TrustWallet onClick={handleTrust} style={{ color: trustCarousel ? '#343434' : '#ffffff', backgroundColor: trustCarousel ? '#4dffff' : 'transparent' }} > Trust Wallet Screen Steps</TrustWallet>
            </HowToBtns>

            {metaCarousel &&   <MetaCarousels />}
            {trustCarousel && <Carousels /> }
        </Container>
           

<Footer/>
    </div>
  );
}
 

export default App;


const HowToBtns = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }

`;
const MetaMask = styled.button`
    border: 1px solid #4dffff;
    border-radius: 20px;
    color: white;
    padding: 9px 12px;
    font-weight: bold;
    @media screen and (max-width: 700px) {
      margin-bottom: 8%;
    }
`;

const TrustWallet = styled.button`
    border-radius: 20px;
    border: 1px solid #4dffff;
    color: white;
    padding: 9px 12px;
    font-weight: bold;
`;

const Container = styled.div`

@media screen and (max-width: 700px) {
  margin-top: 60%;;
}
`;