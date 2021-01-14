import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import about from '../../assets/blueBackdrop.png';
import stats from '../../assets/stats.png';

import './styles.scss';

// If I want to create a parallax effect -->
export default function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div className="App">
      <section className="hero">
        <img className="parallax"
          src={about}
          style={{
            filter: `blur(4px)`,
            transform: `translateY(${offset * 0.5}px)`
          }}
        />
        <div className="text-wrapper">
          <h1 className="headline">Be Bold</h1>
          <h2 className="sub-headline">Be Confident</h2>
        </div>
      </section>
      
  
      {/* // section for the carousel slides  */}
     <div className='carousel'>
      <Carousel />
      </div>
<p id='about'>
  <br/>
        Dashing is a company that helps you make an impression and get a job using one minute videos on your job application.
        We were created out of a need for ourselves to stand out in the massive unemployment hike of the Covid-19 pandemic.
        Our CEO Jake Shelby had just finished school in March of 2020 when he realized that he had to do more than just submit a
        typical resume. He knew he needed to let the hiring managers see him speak, as opposed to skimming his paper resume and
        stalking social media to see his personality.At Dashing, we believe the traditional resume is now obsolete and the wave of the future is having a secure,
        online place for hiring managers to get a real impression of the job candidate via videos.
        Hiring managers can hear and see you, as opposed to read about you, while simultaneously skimming your job application.
        The goal is to take control of the first impression, all while becoming more than just another paper in a stack of resumes.
        With Dashing's easy-to-make online profiles, hiring managers can greatly reduce the time and costs of first wave,
        in-person interviews. Job applicants likewise can greatly increase the chances of getting a job/interview opportunity.
        </p>
        <section className="hero">
        <img className="parallax"
          src={stats}
          style={{
            transform: `translateY(${offset * 0.5}px)`
          }}
        />
      </section>
      {/* Make space to scroll */}
      <section className="overflow" />
      <p>
        More about Dashing
        </p>
    </div>
  );
}