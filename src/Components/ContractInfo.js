import { useState } from "react";
import styled from "styled-components";
import addLiqCond from "../Assests/addLiqCondition.JPG";
import addLiqImp from "../Assests/addLiqImplementation.JPG";

const {ReactDraggable: Draggable, React, ReactDOM} = window;


function ContractInfo({ hideModal}){

    
    function onStart(){
        setActiveDrags(activeDrags => ++activeDrags);
    }

    function onStop(){
        setActiveDrags(activeDrags => --activeDrags);
    }

    // function onDrop(e){
    //     setActiveDrags(activeDrags => ++activeDrags);
    //     if(e.target.classList.contains("drop-target")){
    //         alert("Dropped!");
    //         e.target.classList.remove('hovered'); 
    //     }
    // }
    //   onDropAreaMouseEnter = (e) => {
    //     if (this.state.activeDrags) {
    //       e.target.classList.add('hovered');
    //     }
    //   }
    //   onDropAreaMouseLeave = (e) => {
    //     e.target.classList.remove('hovered');
    //   }
    function handleDrag(e, ui){
        const {x, y} = deltaPosition;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY
        });
    }
    const [deltaPosition, setDeltaPosition] = useState({x: 0, y: 0});
    const [controlledPosition, setControlledPosition] = useState({x: -400, y: 200});
    const [activeDrags, setActiveDrags] = useState(0);
    const [showLargeImgOne, setShowLargeImgOne] = useState(false);
    const [showLargeImgTwo, setShowLargeImgTwo] = useState(false);
    
    function closeModal(){
        hideModal(false);
    }

    function enlargeImgOne(){
        setShowLargeImgOne(true);
    }

    function enlargeImgTwo(){
        setShowLargeImgTwo(true);
    }

    function shrinkImgOne(){
        setShowLargeImgOne(false);
    }

    function shrinkImgTwo(){
        setShowLargeImgTwo(false);
    }

    const dragHandlers = {onStart: onStart, onStop: onStop}

    return(
        <ModalWrapper>
            {
                showLargeImgOne
                ?
                <LargeImgContainer onClick={shrinkImgOne}>
                    {/* <Draggable {...dragHandlers}>
                        <LargeImg src={addLiqCond} />
                    </Draggable> */}
                    <LargeImg src={addLiqCond} />
                </LargeImgContainer>
                :
                ""
            }

            {
                showLargeImgTwo
                ?
                <LargeImgContainer draggable="true" onClick={shrinkImgTwo}>
                    {/* <Draggable {...dragHandlers}>
                        <LargeImg  src={addLiqImp} />
                    </Draggable> */}
                    <LargeImg  src={addLiqImp} />
                </LargeImgContainer>
                :
                ""
            }
            
            <ModalContent>
                <CloseBtn onClick={closeModal}>&times;</CloseBtn>
                <ModalHeader>
                    <ImgsContainer>
                        <Para>Click the images to toggle them in size</Para>
                        <Img onClick={enlargeImgOne} src={addLiqCond} />
                        <Img onClick={enlargeImgTwo} src={addLiqImp} />
                    </ImgsContainer>
                </ModalHeader>
                <ModalBody>
                    <Para>
                        The images show the code snippets that are 
                        responsible for the automatic adding of <Span>$MMD </Span> 
                         liquidity on SpookySwap. They check if the 
                        condition required for adding the liquidity
                        has been met and adds the liquidity accordingly
                    </Para>
                    <Link target="_blank" href="https://ftmscan.com/address/0xb2f53dabd3a01a51c919540a118520c3324d7944#code">View on FTMscan</Link>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </ModalWrapper>
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
    @media all and (min-width: 0px){
        background-color: #20203C;
        margin: 8em auto;
        padding: 0.3em 0.21em;
        border: 1px solid #888;
        width: 80%;
        max-width: 610px;
        border-radius: 20px;
        border: 5px outset #fefefe;
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


const ModalHeader = styled.div`
    @media all and (min-width: 0px){
        display: flex;
        width: 100%;
        flex-direction: column;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-top: 0em;
    }

    @media all and (min-width: 625px){
        flex-direction: row;
        justify-content: center;
        padding: 0 22px;
    }
    
`;

const ModalBody = styled.div`
    @media all and (min-width: 0px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2em 0.5em;
        padding: 1em 0.5em;
        border-radius: 20px;
        border: 5px outset #fefefe;
        /* dotted dashed solid double groove ridge inset outset*/
    }

    @media all and (min-width: 625px){
        align-items: center;
    }
    
`;

const ImgsContainer = styled.div`
    @media all and (min-width: 0px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`;

const Img = styled.img`
    @media all and (min-width: 0px){
        display: inline-block;
        max-width: 100%;
        width: 400px;
        text-align: center;
        margin: 12px auto;
        cursor: pointer;
    }
`;

const Para = styled.p`
    @media all and (min-width: 0px){
        color: #fefefe;
        margin: 0;
        padding: 0;
    }
`;


const Link = styled.a`
    color: #fca311;
`;

const LargeImgContainer = styled.div`
    @media all and (min-width: 0px){
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 10;
        top: 0;
        left: 0;
        overflow: auto;
        background-color: rgb(30,30,30);
        background-color: rgba(30,30,30,0.9);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    
    }
`;

const Span = styled.span`
    font-weight: 500;
    color: #fca311;

`;

const LargeImg = styled.img`
    @media all and (min-width: 0px){
        width: 100%;
    }
`;

const ModalFooter = styled.div`
    @media all and (min-width: 0px){
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 0 2em;
    }

    @media all and (min-width: 625px){
        flex-direction: row;
    }
`;



export default ContractInfo;