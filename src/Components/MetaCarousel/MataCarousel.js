import { Carousel } from 'react-carousel-minimal';
import Image1 from "./MetaImages/step1.png"
import Image2 from "./MetaImages/step2.png"
import Image3 from "./MetaImages/step3.png"
import Image4 from "./MetaImages/step4.png"
import Image5 from "./MetaImages/step5.png"
import Image6 from "./MetaImages/step6.png"


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
      <div style={{ textAlign: "center"  }}  >
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
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
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
    </div>
  );
}

export default MetaCarousels;