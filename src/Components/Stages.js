import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import "../styles/reason.css"
import icon1 from "../Assests/icon1.svg"
import icon2 from "../Assests/icon2.svg"
import icon3 from "../Assests/icon3.svg"
import Range from "../Assests/range.svg"
import Arrow from '../Assests/arrow.svg';
import Image from "../Images/287877.png";

function Timer({ showModal }) {

    const [showMetaMask, setShowMetaMask] = useState(true);
    const [showTrust, setShowTrust] = useState(false);
    const [MMProvider, setMMProvider] = useState({});
    const [web3Installed, setWeb3Installed] = useState(false);
    const [isMetaMask, setIsMetaMask] = useState(false);


    function handleClick(){
        showModal(true);
    }

    function handleMetaMask(){
        setShowMetaMask(true);
        setShowTrust(false);
    }

    function handleTrust(){
        setShowMetaMask(false);
        setShowTrust(true);
    }

    async function addSwitchNet(){
        if(window.ethereum){
            try {
                await MMProvider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xFA' }],
                });
            } catch (switchError) {
                if(switchError.code === 4902){
                    
                    try {
                        await MMProvider.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: '0xFA',
                                    chainName: 'Fantom Opera',
                                    rpcUrls: ['https://rpc.ftm.tools/'],
                                    nativeCurrency: {
                                        name: 'Fantom',
                                        symbol: 'FTM',
                                        decimals: 18,
                                    },
                                    blockExplorerUrls: ['https://ftmscan.com/']
                                }
                            ],
                        });
                    } catch (addError) {
                        // handle "add" error
                        console.log("Add Error: ", addError);
                    }
                }
                if(switchError.code === -32603){
                    try {
                        await MMProvider.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: '0xFA',
                                    chainName: 'Fantom Opera',
                                    rpcUrls: ['https://rpc.ftm.tools/'],
                                    nativeCurrency: {
                                        name: 'Fantom',
                                        symbol: 'FTM',
                                        decimals: 18,
                                    },
                                    blockExplorerUrls: ['https://ftmscan.com/']
                                }
                            ]
                        });

                        
                    } catch (addError) {
                        // handle "add" error
                        console.log("Add Error: ", addError);
                    }
                
                }
            }

        }else{
            // setError(true);
            // setMessage("Please Change To Fantom Network");
            return;
        }
    }

    useEffect(async () => {
        const MetaMProvider = await detectEthereumProvider();
        if(MetaMProvider === window.ethereum){
            setMMProvider(MetaMProvider);
            setWeb3Installed(true);
            setIsMetaMask(true);
            window.web3 = new Web3(window.ethereum);
        }else if(window.web3){
            setWeb3Installed(true);
            window.web3 = new Web3(window.web3.currentProvider);
        }else{
        }

    }, []);

    return (
       <Container className= "Timer">
        <div className="reason"> 
            <h4 className= "header-text">  How To Buy</h4>

            <HowToBtns>
                <MetaMask style={{ color: showMetaMask ? '#343434' : '#ffffff', backgroundColor: showMetaMask ? '#4dffff' : 'transparent' }} onClick={handleMetaMask}>On MetaMask</MetaMask>
                <TrustWallet style={{ color: showTrust ? '#343434' : '#ffffff', backgroundColor: showTrust ? '#4dffff' : 'transparent' }} onClick={handleTrust}>On Trust Wallet</TrustWallet>
            </HowToBtns>

            {/* MetaMask */}
            <div style={{ display: showMetaMask ? 'block' : 'none' }} className="reason-box1">

                <List className="list">
                <div className="list__number">
                    1
                </div>
                <h5 className= "list___header"> Create a MetaMask wallet </h5>
                <h5 className="list__paragraph">Download (or update if already installed) the MetaMask app from IOS/Google playstore. Create a wallet after downloading the MetaMask app.</h5>
                
                </List>
                <Border />
                <List className="list">
                <div className="list__number">
                    2
                </div>
                <h5 className= "list___header">Add or Switch to Fantom Opera Mainnet</h5>
                <h5 className="list__paragraph">Visit this page on your MetaMask DApp browser. Click <AddFTMNetBtn onClick={addSwitchNet}>here</AddFTMNetBtn> to automatically add or switch to the Fantom Mainnet.</h5>          
                </List>
                <Border />
                <List className="list">
                <div className="list__number">
                    3
                </div>
                <h5 className= "list___header">Send Fantom to your wallet</h5>
                <h5 className="list__paragraph"> You can buy Fantom (FTM) and transfer it to your MetaMask Wallet from exchanges like, Binance, Okexx and Huobi etc. Make sure to use the FTM - Fantom network when transfering FTM.</h5>
                
                </List>
                <Border />
                <List className="list">
                <div className="list__number">
                    4
                </div>
                <h5 className= "list___header"> Connect to the presale smart contract </h5>
                <h5 className="list__paragraph"> Visit the presale page on your MetaMask wallet DApp browser. Click on the "Buy Tokens" button on the presale page to open buy modal.</h5>
                
                </List>
                <Border />
                <List className="list">
                <div className="list__number">
                    5
                </div>
                <h5 className= "list___header">Swap FTM for MMD</h5>
                <h5 className="list__paragraph"> You can swap as soon as you have FTM available! There is a maximum individual cap of 1000 FTM and no minimum cap.</h5>
                
                </List>
                <Border />

            </div>
            
            {/* Trust Wallet */}
            <div style={{ display: showTrust ? 'block' : 'none' }} className="reason-box1">

                <List className="list">
                <div className="list__number">
                    1
                </div>
                <h5 className= "list___header"> Create a Trust wallet </h5>
                <h5 className="list__paragraph">Download (or update if already installed) the Trust wallet app from IOS/Google playstore. Create a wallet after downloading the Trust wallet app. <Note>Note: IOS users are advised to use MetaMask or Safepal instead of Trust wallet.</Note></h5>
                
                </List>
                <Border />
                <List className="list">
                <div className="list__number">
                    2
                </div>
                <h5 className= "list___header">Switch to Fantom Opera Mainnet</h5>
                <h5 className="list__paragraph">Switch to the Fantom Mainnet.</h5>          
                </List>
                <Border />
                <List className="list">
                <div className="list__number">
                    3
                </div>
                <h5 className= "list___header">Send Fantom to your wallet</h5>
                <h5 className="list__paragraph"> You can buy Fantom (FTM) and transfer it to your Trust wallet from exchanges like, Binance, Okexx and Huobi etc. Make sure to use the FTM - Fantom network when transfering FTM.</h5>
                
                </List>
                <Border />
                <List className="list">
                <div className="list__number">
                    4
                </div>
                <h5 className= "list___header"> Connect to the presale smart contract </h5>
                <h5 className="list__paragraph">Visit the presale page on your Trust wallet DApp browser. Click on the "Buy Tokens" button on the presale page to open buy modal.</h5>
                
                </List>
                <Border />
                <List className="list">
                <div className="list__number">
                    5
                </div>
                <h5 className= "list___header">Swap FTM for MMD</h5>
                <h5 className="list__paragraph">Click on the "Connect Wallet" button to connect your wallet, and buy MMD token with any mount of FTM. You can swap as soon as you have FTM available! There is a maximum individual cap of 1000 FTM and no minimum cap.</h5>
                
                </List>
                <Border />

            </div>
            

        </div>

        <div className="box">
      
            <BorderBottom>
                <h3> 1 FTM= 34 MMD</h3>
            </BorderBottom>
            <h3></h3>
            <h3>Total Token available for sale = 4.5 Million </h3>
            <img className="range" src={Range} alt="range" />
            <Button  onClick={handleClick}>
                <h3>Buy Tokens </h3><img className="arrow" src={Arrow} alt ="arrow" />
            </Button>
            {/* <img className="lock" src= {Image} alt="image"/> */}
        </div>

       </Container>
    )
}

export default Timer

const BorderBottom = styled.div`
border-bottom: 1px solid white;
display: flex;
justify-content: space-between;
`
const Border= styled.div`
border-bottom: .1px solid #ECECEC;
margin:0 auto;
`

const List= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.list__number{
    width:40px;
height:40px;
border-radius:50px;
background-color: transparent;
border: 1px solid #43E8E1;
color: white;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 30px;
}
.list__paragraph{
    font-weight: 300;
    text-align: center;
     margin-top: -2px;
    line-height: 1.2rem;
}
`

const Container = styled.div`
    height: 120vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .range{
        width: 100%;
        margin-top: 25%;
    }
    .arrow{
        margin-left: 15%;
    }
    .lock{
        width: 100%;
    }
    .box{
        width: 100%;
        min-width: 25%;
        animation: slide-left 3000ms;
        height: 55%;
        box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
        border-radius: 1.3rem;
        position: relative;
        z-index: 1;
        background: inherit;
        /* overflow: hidden; */
        margin-right: 10%;
        color: white;
        padding: 20px;
        font-size: 14px;
        font-weight: normal;
        line-height: 15px;
        margin-top: 8.2%;
    }
    .box:before {
        content: "";
        position: absolute;
        background: inherit;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
        filter: blur(10px);
    }
    .div{
        width: 20%;
        height: 4rem;
        background: transparent;
        border: 1px solid #43E8E1;
    }
    .count-down{
        display: flex;
    }
    .count-separator{
        margin: 1.3rem .5rem;
    }
    .reason {
        margin-left: 10%;
        margin-right: 20%;
        animation: slide-in 2000ms;
        
    }
    .header-text1{
        text-align: center;
    }
    .header-text {
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 150%;
        color: white;
        text-align: center;
    }
    .reason-box1 {
        width: 95%;
        height: 65vh;
        overflow-y: scroll;
        min-width: 70%;
        box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        position: relative;
        z-index: 1;
        background: inherit;
        margin-top: 20px;
        margin-bottom: 20px;
        color: white;
        padding: 25px;
        font-size: 1.2rem;
        font-weight: normal;
        text-align: center;
        /* line-height: 1.5rem; */
    }
    li{
        line-height: 1rem;  
    }
    /* h5 {
        line-height: .2rem;  
    } */
    .icon{
        margin-right: 20px
    }
    .reason-box1:before {
        content: "";
        position: absolute;
        background: inherit;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0px 4px 26px 22px rgba(0, 0, 0, 0.25);
        filter: blur(10px);
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 700px) {
        margin-top: 55%;
        flex-direction: column;
    
        .reason {       
        padding:20px;
        margin: 0px;
    }
    .reason-box1{
        padding-left: 10px;
    }
    .box{
        margin-left: 5%;
        margin-right:5%;
    width: 70%;
    }
    .header-text {
    text-align: center;
    margin-top:-8rem;
    }

    @media screen and (max-width: 700px){
        .header-text{
            margin-top: 150px;
        }
    }

}
`

const AddFTMNetBtn = styled.button`
    border: 1px solid #4dffff;
    border-radius: 9px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
`;

export const Button = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 1rem 1rem 1rem 1.5rem;
width: 60%;
height: 4.3rem;
background: transparent;
border-radius: 2rem;
color: white;
font-weight: bold;
border: 1px solid #43E8E1;
margin-top: 25%;

@media screen and (max-width: 700px) {

    width: 75%;
    height: 4rem;
    margin: 0 auto;


}
` 
const HowToBtns = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const MetaMask = styled.button`
    border: 1px solid #4dffff;
    border-radius: 20px;
    color: white;
    padding: 9px 12px;
    font-weight: bold;
`;

const TrustWallet = styled.button`
    border-radius: 20px;
    border: 1px solid #4dffff;
    color: white;
    padding: 9px 12px;
    font-weight: bold;
`;

const Note = styled.p`
    color: yellow;
    margin: 0;
`;