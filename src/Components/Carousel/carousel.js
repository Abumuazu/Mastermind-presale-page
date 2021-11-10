import { Carousel } from 'react-carousel-minimal';
import Image1 from "../Carousel/CarouselImages/step1.png"
import Image2 from "../Carousel/CarouselImages/step2.png"
import Image3 from "../Carousel/CarouselImages/step3.png"
import Image4 from "../Carousel/CarouselImages/step4.png"
import Image5 from "../Carousel/CarouselImages/step5.png"
import Image6 from "../Carousel/CarouselImages/step6.png"
import Image7 from "../Carousel/CarouselImages/step7.png"
import Image8 from "../Carousel/CarouselImages/step8.png"
import Image9 from "../Carousel/CarouselImages/step9.png"
import Image10 from "../Carousel/CarouselImages/step10.png"
import styled from "styled-components"


function Carousels() {
 const data = [
    {
      image: Image1,
      caption: `<div>
                  Step 1
                </div>`
    },
    {
      image: Image2,
      caption: "Step2"
    },
    {
        image:Image3,
        caption: "Step4"
      },
    {
      image: Image4,
      caption: "Step3"
    },
    {
      image: Image5,
      caption: "Step5"
    },
    {
      image: Image6,
      caption: "Step6"
    },
    {
        image: Image7,
        caption: "Step7"
      },
      {
        image: Image8,
        caption: "Step8"
      },
      {
        image: Image9,
        caption: "Step9"
      },
      {
        image: Image10,
        caption: "Step10"
      }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <Container  className="App">
      <div style={{ textAlign: "center" }}>
        <h2></h2>
        <p></p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={6000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="black"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "700px",
              margin: "200px auto 50px auto",
            //   boxShadow: "0 0"
            }}
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 700px) {
    margin: -40% 0 -40% 0;
  }
`;

export default Carousels;