import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import '../styles/modalform.css';
import styled from "styled-components";
// import ContractAddress from "../ContractDetails/ContractAddress.json";
const ContractAddress = "0x99Bd820912fF49E340b244A97B15d74BcEd83d94"



function ModalForm({ hideModal }){

    // States
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [account, setAccount] = useState("");
    const [ftmAmt, setFtmAmt] = useState("");
    const [formattedAcct, setFormattedAcct] = useState("");
    const [connected, setConnected] = useState(false);
    const [isMetaMask, setIsMetaMask] = useState(false);
    const [web3Installed, setWeb3Installed] = useState(false);

    
    async function connectWallet(){
        if(web3Installed){
            if(isMetaMask){
                await loadMetaMaskWeb3();
            }else{
                await loadWeb3();
            }
        }else{
            setError(true);
            setMessage("Web3 Not Detected");
        }

    }

    function closeModal(){
        hideModal(false);
    }

    function formatWallet(acct){
        const dots = "...";
        const firstFour = acct.substring(0, 4);
        const lastFour = acct.substring(38,42);
        const displayAcct = firstFour + dots + lastFour;
        setFormattedAcct(displayAcct);
    }

    async function loadMetaMaskWeb3(){
        const netid = await window.web3.eth.net.getId();
        if(netid !== 250){
            setError(true);
            setMessage("Please Change To Fantom Network");
            return;
        }

        try {
            if(account == ""){
               const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
               setAccount(accounts[0]);
               formatWallet(accounts[0]);
               setConnected(true);
               setError(false);
               setMessage("Wallet connected!");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    async function loadWeb3(){
        window.web3 = new Web3(window.web3.currentProvider);

        try {
            const netid = await window.web3.eth.net.getId() !== 250;
            if(netid){
                setError(true);
                setMessage("Please Change To Fantom Network");
                return;
            }

            const accounts = await window.web3.eth.getAccounts()
            setAccount(accounts[0]);
            formatWallet(accounts[0]);
            setConnected(true);
            setMessage("Wallet connected!");
        } catch (error) {
            console.log(error);
        }

    }

    async function loadWeb3Modal(){

        const web3Modal = new Web3Modal({
            network: "mainnet", 
            cacheProvider: true,
        });

        const provider = await web3Modal.connect();
        window.web3 = new Web3(provider);
        
        try {
            const netid = await window.web3.eth.net.getId();
            if(netid != 250){
                setError(true);
                setMessage("Please Change To Fantom Network");
                return;
            }


            const accounts = await window.web3.eth.getAccounts()
            setAccount(accounts[0]);
            formatWallet(accounts[0]);
            setConnected(true);
            setMessage("Wallet connected!");
        } catch (error) {
            if(error.code === -32002){
                setError(true);
                setMessage("Please Sign In To Your Wallet To Connect");
            }
            
        }

    }

    
    async function buyPresale(){
        try {
            if(account == "") throw {message: "Please Connect Wallet", custom: true};
            
            const netid = await window.web3.eth.net.getId();
            
            if(netid !== 250){
                throw {message: "Please Change To The Fantom Network", custom: true};
            }

            if(ftmAmt == "") throw {message: "Enter FTM Amount", custom: true};

            if(isNaN(ftmAmt)) throw {message: "Please Type In A Number Value", custom: true};
            
            if(ftmAmt <= 0) throw {message: "FTM Amount Must Be Greater Than Zero", custom: true};
            
            // const gasPrice = await window.web3.eth.getGasPrice();
            const receipt = await window.web3.eth.sendTransaction({
                from: account,
                to: ContractAddress,
                value: window.web3.utils.toWei(ftmAmt, 'ether'),
                gas: 500000
            });

            console.log("Receipt: " + receipt);

            
            const data = await window.web3.eth.getTransactionReceipt(receipt.transactionHash);
            console.log("Data: " + data);
            if(data.status == '0x01'){
                setSuccess(true);
                setMessage("Presale Purchase Successful. Thank You");
                setFtmAmt("");
            }else{
                setError(true);
                setMessage("Presale Purchase Failed");
            }


        } catch (error) {
            console.log(error);
            setError(true);
            if(error.custom){
                setMessage(error.message);
            }else if(error.code == 4001){
                setMessage("Transaction Signing Rejected");
            }else{
                setMessage("Transaction Failed");
            }
        }
    }

    function handleChange(e){
        setFtmAmt(e.target.value);
        
    }

    
    useEffect(async () => {
        if(window.ethereum){
            setWeb3Installed(true);
            setIsMetaMask(true);
            window.web3 = new Web3(window.ethereum);
        }else if(window.web3){
            setWeb3Installed(true);
            window.web3 = new Web3(window.web3.currentProvider);
        }else{

        }

    }, []);

    return(
        <>
            <ModalWrapper>
                <ModalContent>
                    <CloseBtn onClick={closeModal}>&times;</CloseBtn>
                    <ModalHeader>
                        <ConnectWallet onClick={connectWallet}>
                            {connected ? formattedAcct : "Connect Wallet"}
                        </ConnectWallet>
                            
                        
                        <MsgDisplay>
                            <p style={{ color: error ? "red" : "green", fontWeight: "bold" }}>{message}</p>
                        </MsgDisplay>
                        
                    </ModalHeader>
                    <ModalBody>
                        <Input value={ftmAmt} onChange={handleChange} placeholder="Enter FTM Amount"/>
                        <BuyBtn onClick={buyPresale}>Buy MMD</BuyBtn>
                    </ModalBody>
                </ModalContent>
            </ModalWrapper>
            
        </>
    );
}

const ModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: rgb(30,30,30);
    background-color: rgba(30,30,30,0.9);
    h3{
        color: white;
        text-align: center;
    }
`;

const ModalContent = styled.div`
    background-color: #ccc;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 1em;
    border: 1px solid #888;
    width: 80%;
    max-width: 610px;
    border-radius: 20px;
    border: 5px outset #fefefe;
`;


const ModalHeader = styled.div`
    @media all and (min-width: 0px){
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin-top: 0em;
    }

    @media all and (min-width: 625px){
        flex-direction: row;
        justify-content: flex-start;
        padding: 0 22px;
    }
    
`;

const ModalBody = styled.div`
    @media all and (min-width: 0px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 3em 1em;
        padding: 2em 1em;
        border-radius: 20px;
        border: 5px outset #fefefe;
        /* dotted dashed solid double groove ridge inset outset*/
    }

    @media all and (min-width: 625px){
        align-items: flex-start;
    }
    
`;

const MsgDisplay = styled.div`
    @media all and (min-width: 0px){
        background-color: transparent;
        width: 100%;
        text-align: center;
        padding: 0;
        border-radius: 12px;
    }
    
    @media all and (min-width: 625px){
        width: 100%;
        margin: 0 auto;

        p{
            width: 70%;
            text-align: center;
            margin-left: 3em;
        }
    }
`;


const CloseBtn = styled.span`
    @media all and (min-width: 0px){
        display: inline-block;
        float: right;
        color: #777;
        font-size: 38px;
        font-weight: bold;
        margin-top: -14px;
        margin-right: 4px;
        cursor: pointer;
    }
    
`;

const ConnectWallet = styled.button`
    @media all and (min-width: 0px){
        width: 142px;
        height: 42px;
        color: white;
        background-color: #00ace6;
        border: 1px solid #00ace6;
        border-radius: 50px;
        padding: 0.8em 1.25em;
        font-weight: bold;
        font-size: 0.9rem;
    }

    @media all and (min-width: 625px){
        width: 200px;
    }
    
`;

const Input = styled.input`
    background-color: white;
    padding: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
    border-radius: 10px;
    width: 50%;
    margin-left: 1em;
    &:focus{
        border: none;
        outline: none;
    }
`;

const BuyBtn = styled.button`
    color: white;
    background-color: #00ace6;
    border: 1px solid #00ace6;
    border-radius: 50px;
    padding: 0.8em 1.25em;
    font-weight: bold;
    font-size: 0.8rem;
    margin: 1em;
`;


export default ModalForm;