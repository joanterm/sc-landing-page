import React from "react"
import styled from "styled-components"
import scdance from "../imgs/logo3.jpg"
import music from "../imgs/musiccopy.png"
import facebookIcon from "../imgs/fb1copy.png"
import insta from "../imgs/instacopy.png"
import venmo from "../imgs/venmo_icon copy.png"
import lesson from "../imgs/lessoncopy.png"
import tiktok from "../imgs/tiktokcopy.png"
import youtube from "../imgs/youtube.png"
import heroImage from "../imgs/nelson-dark.jpg"
import {Link} from "react-router-dom"
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   background-color: #a0dcff;
//   font-family: sans-serif;
// `

// const AvatarContainer = styled.div`
//   margin-top: 39px;
//   margin-bottom: 7px;
// `

// const Avatar = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   object-fit: cover;
// `
// const ButtonsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   @media (max-width: 767px) {
//     flex-direction: column;
//   }
// `
// const Button = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   text-decoration: none;
//   margin: 10px;
//   padding: 10px 10px;
//   background-color: #fdffff;
//   // color: #a0dcff;
//   color: black;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 60%;
//   @media (max-width: 767px) {
//     width: 90%;
//   }

//   &:hover {
//     background-color: lightblue;
//     color: white;
//   }
// `
// const BlankDiv = styled.div`
//   // border: 2px red solid;
//   width: 40px;
//   height: 40px;
// `
// const ButtonImage = styled.img`
//   // border: 2px red solid;
//   width: 40px;
//   height: 40px;
// `
// const ButtonText = styled.div`
//   // /* border: 2px green solid; */
//   padding: 10px;
// `
// const Footer = styled.footer`
//   color: white;
//   padding: 15px 0 20px 0;
//   font-size: 12px;
// `
// const YoutubeFrame = styled.div`
// width: 560px;
// height: 315px;
// // border: 2px solid #333;  
// margin-top: 20px;
// margin-bottom: 90px;
//   @media (max-width: 767px) {
//     width: 80%;
//     height: 250px;
     
//     }
//   }
// `

function Home() {
  return (
    <div className="h-screen">
      <div style={{ backgroundImage: `url(${heroImage})` }} className="border-4 border-green-600 bg-cover bg-center h-screen">
        <div className="border-4 border-red-600">
          <div className="text-white flex items-center justify-end">
            <Link to="/" className="p-5 text-2xl">Home</Link>
            <Link to="/about" className="p-5 text-2xl">About</Link>
            <Link to="/millionaire" className="p-5 text-2xl">Millionaire</Link>
            <Link to="/socials" className="p-5 text-2xl">Socials</Link>
          </div>
        </div>
        <div className="border-4 border-green-300 h-3/6 w-full flex justify-center">
          <div className="border-4 border-pink-200 w-9/12 flex flex-col justify-end">
            <div className="border-4 border-pink-800">
              <h1 className="text-white text-7xl font-merriweather pb-4">Nelson Maldonado</h1>
              <p className="text-white text-3xl font-nunito pb-4">Dancer. Instructor. Lifelong Salsa Passionate.</p>
              <button className="text-white font-bold bg-red-600 px-8 py-4">Let's Dance</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-4 border-pink-100 w-full flex justify-center">
        <div className="border-4 border-green-900 w-9/12">
          <div className="border-4 border-blue-600">
            <div className="border-4 border-blue-600 w-9/12 mx-auto text-center pt-10">
                  <h2 className="text-5xl font-merriweather pb-4">TEXT HERE.</h2>
                  <p className="text-2xl border-4 border-blue-600 w-10/12 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="border-4 border-pink-100 h-dvh flex justify-between items-center">
            <div style={{ backgroundImage: `url(${heroImage})` }} className="bg-cover bg-center border-4 border-pink-600 mr-4 w-1/2 h-2/3">
              <h1 className="text-white">CARD</h1>
            </div>
            <div style={{ backgroundImage: `url(${heroImage})` }} className="bg-cover bg-center border-4 border-pink-600 mr-4 w-1/2 h-2/3">
              <h1 className="text-white">CARD</h1>
            </div>
            <div style={{ backgroundImage: `url(${heroImage})` }} className="bg-cover bg-center border-4 border-pink-600 w-1/2 h-2/3">
              <h1 className="text-white">CARD</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="border-4 border-red-600 bg-neutral-900 h-screen">
        <h1 className="text-white">BlACK</h1>
      </div>
    </div>
  //   <Container>
  //     <AvatarContainer>
  //       <Avatar src={scdance} alt="Avatar" />
  //     </AvatarContainer>
  //     <p style={{ color: "white" }}>@salsacolombia</p>
  //     <YoutubeFrame>
  //       {/* <iframe
  //         src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsalsacolombia.net%2Fvideos%2F2428469150668918%2F&show_text=false&width=560&t=0"
  //         width="560"
  //         height="314"
  //         style="border:none;overflow:hidden"
  //         scrolling="no"
  //         frameborder="0"
  //         allowfullscreen="true"
  //         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  //         allowFullScreen="true"
  //       ></iframe> */}
  //       <iframe
  //         width="100%"
  //         height="100%"
  //         src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsalsacolombia.net%2Fvideos%2F2428469150668918%2F&show_text=false&width=560&t=0"
  //         title="YouTube video player"
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //         allowFullScreen={true}
  //       ></iframe>
  //       <p style={{ color: "white", fontSize: "12" }}>New Choreo! </p>
  //     </YoutubeFrame>
  //     {/* <Millionaire /> */}
  //     <ButtonsContainer>
  //       {/* <Button target="_blank" href="https://m4f0dm-5173.preview.csb.app/">
  //         <ButtonImage src={foodPic} alt="food_icon" />
  //         <ButtonText> Let us pick your lunch</ButtonText>
  //         <BlankDiv />
  //       </Button> */}
  //       <Button href="https://www.eventbrite.com/e/salsa-calena-2-week-intensive-training-cali-colombia-tickets-759356785587?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl">
  //         <ButtonImage src={lesson} alt="lesson_icon" />
  //         <ButtonText> 2 Week Salsa Calena Intensive Tickets 🎫 </ButtonText>
  //         <BlankDiv />
  //       </Button>

  //       <Button target="_blank" href="https://venmo.com/u/Nelly-Maldonado">
  //         <ButtonImage src={venmo} alt="venmo_icon" />
  //         <ButtonText>VENMO</ButtonText>
  //         <BlankDiv />
  //       </Button>
  //       <Button
  //         target="_blank"
  //         href="https://www.facebook.com/salsacolombia.net"
  //       >
  //         <ButtonImage src={facebookIcon} alt="facebook_icon" />
  //         <ButtonText>Facebook</ButtonText>
  //         <BlankDiv />
  //       </Button>

  //       <Button
  //         target="_blank"
  //         href="https://www.tiktok.com/@salsacolombiatiktok"
  //       >
  //         <ButtonImage src={tiktok} alt="tiktok_icon" />
  //         <ButtonText>TikTok</ButtonText>
  //         <BlankDiv />
  //       </Button>

  //       <Button target="_blank" href="https://instagram.com/salsacolombia">
  //         <ButtonImage src={insta} alt="insta_icon" />
  //         <ButtonText>Instagram </ButtonText>
  //         <BlankDiv />
  //       </Button>
  //       <Button target="_blank" href="https://youtube.com/@SalsaColombiaUS">
  //         <ButtonImage src={youtube} alt="insta_icon" />
  //         <ButtonText>YouTube </ButtonText>
  //         <BlankDiv />
  //       </Button>

  //       <Button
  //         target="_blank"
  //         href="https://youtube.com/playlist?list=PLgme2F6mX8Xx2vkKU2ABQcXXKrRxpxer7"
  //       >
  //         <ButtonImage src={music} alt="music_icon" />
  //         <ButtonText>
  //           {" "}
  //           Need free Salsa music? Click on this playlist
  //         </ButtonText>
  //         <BlankDiv />
  //       </Button>
  //     </ButtonsContainer>
  //     <Footer>
  //       © SalsaColombia Dance Academy USA, All Rights Reserved 2024{" "}
  //     </Footer>
  //   </Container>
  // )
  )
}

export default Home