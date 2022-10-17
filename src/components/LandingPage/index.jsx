import React from 'react'
import Outer_range from '../../assets/images/outer-range.jpg'
import Apple_tv from '../../assets/images/transparent-white-plus-sign-png-apple-tv-logo.png'
import './index.scss'

const LandingPage = () => {
    return (
        <div className='LandingPageContainer'>
            <div className='LandingPageImageContainer'>
                <img src={Outer_range} alt="Jai_Bhim" />
                <div className='LandingPageDataContainer'>
                    <div>
                        <div>
                            {/* <img src={Apple_tv} alt="Jai_Bhim" style={{backgroundColor:"transparent"}}/> */}
                        </div>
                        <div>

                        </div>
                    </div>
                    <hr style={{color:"white"}}/>
                    <div className='LandingPageDataSubContainer'>
                        <div style={{width:"60%"}}>
                            The Last Post" follows a unit of Royal Military Police and their families in British-controlled Aden, Yemen in 1965. Newlyweds Honor and Joe Martin, the latter a captain with the RMP, arrive into the mix and must adapt to their new environment and their new lives together. Throughout the community, relationships are tested as the women struggle against what is expected of them as army wives
                        </div>
                        <div style={{width:"20%"}}> 
                            <div>New originals every month.</div>
                            <div>Share with your family.</div>
                            <div>Watch online or off.</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LandingPage