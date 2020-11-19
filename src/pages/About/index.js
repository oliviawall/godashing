import React from 'react';
import './styles.scss';

import image1 from '../../assets/bright.png'

const About = props => {
    return (

        <div className='container'>
            <imf src={image1} className='image' />
            <div className='text-box' style={{ textAlign: 'center', color: 'white', position: "relative" }} >
                <br />
                <h4>Dashing is a company that helps you make an impression and get a job using 1 minute videos on your job application. We were created out of a need for ourselves to stand out in the massive unemployment hike of the Covid-19 pandemic.</h4>
                <h4> <br />

             Our CEO Jake Shelby had just finished school in March of 2020 when he realized that he had to do more than just submit a typical resume. He knew he needed to let the hiring managers see him speak, as opposed to skimming his paper resume and stalking social media to see his personality.
             At Dashing, we believe the traditional resume is now obsolete and the wave of the future is having a secure, online place for hiring managers to get a real impression of the job candidate via videos. Hiring managers can hear and see you, as opposed to read about you, while simultaneously skimming your job application. The goal is to take control of the first impression, all while becoming more than just another paper in a stack of resumes. With Dashing's easy-to-make online profiles, hiring managers can greatly reduce the time and costs of first wave, in-person interviews. Job applicants likewise can greatly increase the chances of getting a job/interview opportunity.
             <br />
                    <br />

             Our founding team hails from Northern California and Canada.</h4>
             <br/>
            </div>
        </div>
    );
}
//     <div className='about'>
//         <div className='text-box'>
//             <h1> About Dashing </h1>
//         </div>
//         <img className='image'/>
//         {/* <br /> */}
//         <h5>
//             <p>
//                 Dashing is a company that helps you make an impression and get a job using 1 minute videos on your job application. We were created out of a need for ourselves to stand out in the massive unemployment hike of the Covid-19 pandemic.
//             <br />
//                 <br />

//             Our CEO Jake Shelby had just finished school in March of 2020 when he realized that he had to do more than just submit a typical resume. He knew he needed to let the hiring managers see him speak, as opposed to skimming his paper resume and stalking social media to see his personality.
//             At Dashing, we believe the traditional resume is now obsolete and the wave of the future is having a secure, online place for hiring managers to get a real impression of the job candidate via videos. Hiring managers can hear and see you, as opposed to read about you, while simultaneously skimming your job application. The goal is to take control of the first impression, all while becoming more than just another paper in a stack of resumes. With Dashing's easy-to-make online profiles, hiring managers can greatly reduce the time and costs of first wave, in-person interviews. Job applicants likewise can greatly increase the chances of getting a job/interview opportunity.
//             <br />
//                 <br />

//             Our founding team hails from Northern California and Canada.
//         </p>

//         </h5>
//     </div>
// );
// }


export default About;