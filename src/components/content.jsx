import React from 'react'
import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';
import Img4 from './images/img4.png';
import Img5 from './images/img5.png';



const Content = () => {
  return (
    <div className='contentSection'>
        <div className="contentWrap">
            <div className="contentWords1">
                <h2>Our broadcast apps with your audio setup</h2>
                <p>Plug and play your audio into the mobile or desktop broadcast app. Keep it simple with one audio source for mobile. Or use the desktop app for a mix of audio input and a playlist of sounds. Your audio, done your way. </p>
            </div>

            <div className="contentImg1">
                <img src={Img1} alt="" className='dashImg'/>                
            </div>            
        </div>

        <div className="contentWrap">
            <div className="contentImg2">
                <img src={Img2} alt="" className='dashImg'/>
            </div>
            
            <div className="contentWords2">
                <h2>No limits to audience size</h2>
                <p>Reach an audience as big as you need. Connect, chat and engage with listeners all over the world with the confidence that everyone will be able to connect to your live stream. Mixlr has dedicated servers set aside, allowing you to scale your broadcasts as big as you need without extra costs.</p>
            </div>
        </div>

        <div className="contentWrap">
            <div className="contentWords1">
                <h2>Your own channel, a custom website for audio</h2>
                <p>This is where all your audio is hosted. People can listen live while chatting or play back recordings. The custom players are ad-free, feature audio visuals and an immersive full-screen experience.  Brand your channel with a logo, custom background and personalized URL. It's your site for your audio.</p>
            </div>

            <div className="contentImg1">
                <img src={Img3} alt="" className='dashImg'/>
            </div>
        </div>

        <div className="contentWrap">
            <div className="contentImg2">
                <img src={Img4} alt="" className='dashImg'/>            
            </div>
            
            <div className="contentWords2">
                <h2>Showcase your recordings collection</h2>
                <p>Record your broadcasts and publish them to your channel when you're ready. Listeners can visit your entire archive of past broadcasts and share direct links to their favorites.</p>
            </div>
        </div>

        <div className="contentWrap">
            <div className="contentWords1">
                <h2>Custom embeddable player</h2>
                <p>Make it easier for people to come across your audio. Embed an ad-free player to your other existing sites to promote your audio content. It's as simple as copying and pasting an HTML widget code.</p>
            </div>

            <div className="contentImg1">
                <img src={Img5} alt="" className='dashImg'/>
            </div>
        </div>

        <h2 className='moreText'>And there's more...</h2>
    </div>
  )
}

export default Content
