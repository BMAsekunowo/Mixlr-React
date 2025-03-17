import React from 'react'
import './components.css'

import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';
import Img4 from './images/img4.png';
import Img5 from './images/img5.png';
import Icon1 from './images/icon1.svg';
import Icon2 from './images/icon2.svg';
import Icon3 from './images/icon3.svg';
import Icon4 from './images/icon4.svg';
import Icon5 from './images/icon5.svg';
import Icon6 from './images/icon6.svg';



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

        <div className="contentWrap2">
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

        <div className="contentWrap2">
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

        <ul className='content2wrap'>
            <li>
                <span className="iconWrap">
                <img src={Icon1} alt="" className='dashIcon'/>
                </span>
                <h3>One link, two functions</h3>
                <p>Your scheduled event automatically turns into a live stream page with chat as soon as you go live. Use only one link to promote your event in advance and during your broadcast. </p>
            </li>
            <li>
                <span className="iconWrap">
                <img src={Icon2} alt="" className='dashIcon'/>
                </span>  
                <h3>Top level listener stats</h3>
                <p>Keep informed on how well your broadcasts are performing with end-of-broadcast and weekly stats emails. Get numbers on your unique listeners, chat messages and hearts.</p>
            </li>
            <li>
                <span className="iconWrap">
                <img src={Icon3} alt="" className='dashIcon'/>
                </span>
                <h3>Private access to your channel</h3>
                <p>Decide who can access your channel with access settings enabled. Remain private indefinitely or create one-off exclusive audio content for select listeners only.</p>
            </li>
            <li>
                <span className="iconWrap">
                <img src={Icon4} alt="" className='dashIcon'/>
                </span>
                <h3>Detailed listener metrics</h3>
                <p>See how many unique listeners connected, how long for, and which countries or cities they tuned in from. View your listener stats over any selectable time period, and export the most relevant data as an easy to use spreadsheet file.</p>
            </li>
            <li>
                <span className="iconWrap">
                <img src={Icon5} alt="" className='dashIcon'/>
                </span>
                <h3>Optimal audio quality</h3>
                <p>Control audio quality as needed to suit bandwidth restrictions or to match the quality required for your type of content. With the desktop app, you can switch between low, standard, and high quality audio even while broadcasting.</p>
            </li>
            <li>
                <span className="iconWrap">
                <img src={Icon6} alt="" className='dashIcon'/>
                </span>
                <h3>Go white label</h3>
                <p>With a unique livestream URL, you're free to build your own website, app or player around your live audio. We encode your livestream URL in mp3 format at a quality of 128kbps.</p>
            </li>
        </ul>

        <div className='secHero'>
            <h2>Become a Mixlr <br />audio creator today</h2>
                
            <div className='buttonHold'>
                <a className='ctaButton' href="/priceplans">Start Free Trial</a>
            </div>
        </div>

    </div>
  )
}

export default Content
