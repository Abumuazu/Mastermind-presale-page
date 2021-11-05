import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

// const baseURL = "http://localhost:9090/mmdpresale/";
const baseURL = "https://mastermindtoken.com/";
const Axios = axios.create({
    baseURL: baseURL
});

function PresaleUpdate(){

    const [amountDistr, setAmountDistr] = useState(0);
    const [amountRemaining, setAmountRemaining] = useState(0);


    const chartColors = [
        "#01c55d",
        "#0878d7"
    ];

    const Options = {
        legend: {
            display: true,
            position: "right",
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        animations: {
            tension: {
                duration: 1500,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        cutoutPercentage: 20
    };
    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["Token Sold", "Token Remaining"],
        datasets: [
            {
                fill: false,
                data: [amountDistr, amountRemaining],
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors,
                fontColor: "white",
            }
        ]
    };
    
    async function getAmountDistributed(){
        const res = await Axios.get('get_presale.php');
        const tokenDistr = res.data;
        if(tokenDistr != "error"){
            setAmountDistr(tokenDistr);
            setAmountRemaining(4500000 - tokenDistr);
        }
    }

    

    useEffect(() => {
        const interval = setInterval(() => {
            getAmountDistributed();
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    return(
        <Display>
            <Doughnut 
                data={data}
                options={Options}
            />
        </Display>
    );
}


export default PresaleUpdate;


const Display = styled.div`

`;