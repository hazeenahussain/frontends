import React from 'react';
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Homepage = () => {
    return (
        <div className="page">
            <h1>AJIO Blog</h1>
            <Carousel>
                <div>
                    <img className='pic' src="./home1.jpg" />
                    <p className="legend">“Maybe you should pick a colour that suits you' or 'Act your age and wear something else', go ahead and do exactly what you please”</p>
                </div>
                <div>
                    <img className='pic' src="./home2.jpg" />
                    <p className="legend">“The Joggers And polo Shop.”</p>
                </div>
                <div>
                    <img className='pic' src="./home3.jpg" />
                    <p className="legend">“All you need is PERFOMAX active wear.”</p>
                </div> 
                <div>
                    <img className='pic' src="./home6.jpg" />
                    <p className="legend">“Step into style.”</p>
                </div>
                <div>
                    <img className='pic' src="./home4.jpg" />
                    <p className="legend">“Kids collections.”</p>
                </div>
                <div>
                    <img className='pic' src="./home5.jpg" />
                    <p className="legend">“The best baby care essentials.”</p>
                </div>
            </Carousel>
            
            <p>
            AJIO, a fashion and lifestyle brand, is Reliance Retail’s digital commerce initiative and is the ultimate fashion destination for styles that are handpicked, on trend and at prices that are the best you’ll find anywhere.

Celebrating fearlessness and uniqueness, Ajio is constantly looking to bring a fresh, current and accessible perspective to personal style.

At the heart of it all, Ajio’s philosophy and initiatives point to one simple truth – inclusivity and acceptance as the only way to make our society a little more humane. And along the way, just a little more stylish, whether it’s through creating capsule collections that make putting together great looks easy, making exclusive international brands available in one place, reviving India’s rich textile heritage through the Indie collection or making great style an easy purchase through the in-house brand AJIO Own.
            </p>
            <h2>Which benefits does AJIO provide?</h2>
            With the advanced internet infrastructure built by JIO and a robust physical retail business built by Reliance Retail, we’re creating a differentiated e-commerce model for India through AJIO. 

            <li>Insurance, Health & Wellness. Health Care & Insurance. 3.0★ 1 Rating. Life Insurance. 3.0★ 1 Rating. ...</li>
            <li>Family & Parenting. Maternity & Paternity Leave. 4.3★ 4 Ratings. Work From Home. 3.3★ 3 Ratings. ...</li>
            <li>Perks & Benefits. Employee Discount. 3.3★ 4 Ratings. Company Car. Gym Membership. Professional Support.</li>
           
            

        </div>
    );
};

export default Homepage;