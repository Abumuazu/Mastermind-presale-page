import { Carousel } from 'react-carousel-minimal';
import Image1 from "./MetaImages/step1.png"
import Image2 from "./MetaImages/step2.png"
import Image3 from "./MetaImages/step3.png"
import Image4 from "./MetaImages/step4.png"
import Image5 from "./MetaImages/step5.png"
import Image6 from "./MetaImages/step6.png"
import Image7 from "./MetaImages/step7.png"
import Image8 from "./MetaImages/step8.png"
import styled from "styled-components"

function MetaCarousels() {
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
        image: Image3,
        caption: "Step3"
      },
    {
        image:Image4,
        caption: "Step4"
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
    <div >
      <Container  style={{ textAlign: "center"  }}  >
        <h2></h2>
        <p></p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={6000}
            width="850px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="#43E8E1"
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
      </Container>
    </div>
  );
}

export default MetaCarousels;

const Container = styled.div`
  @media screen and (max-width: 700px) {
      margin: -40% 0 -40% 0;
  }
`