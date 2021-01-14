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
            <section className="hero">
                <img className="parallax"
                    src={stats}
                    style={{
                        transform: `translateY(${offset * 0.5}px)`
                    }}
                />
            </section>
            <p id='about'>
                <br />
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
            {/* Make space to scroll */}
            <section className="overflow" />
            <p>
                More about Dashing
        </p>
        </div>
    );
}

// Previous Landing page component called Directory replaced by Carousel slides --> 

        // <div className='directory'>
        //     <div className='wrap'>

        //             <div
        //                 className='item'
        //                 style={{
        //                     backgroundImage: `url(${blueBackdrop})`
        //                 }}
        //             ><div className='parallax'>
        //                 <div id='test'>
        //                     <a className='test' href='/about'>Why Go Dashing?</a>
        //                 </div>
        //             </div>
        //             <div className='more'>

        //             </div>
        //             <div
        //                 style={{
        //                     backgroundImage: `url(${blueBackdrop})`
        //                 }}
        //             ></div>
        //         </div>
        //     </div>
        // </div>


// If I want to create a parallax effect -->
// export default function App() {
//     const [offset, setOffset] = useState(0);

//     useEffect(() => {
//       function handleScroll() {
//         setOffset(window.pageYOffset);
//       }

//       window.addEventListener("scroll", handleScroll);

//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, [offset]);

//     return (
//       <div className="App">
//         <section className="hero">
//           <img
//             src="https://picsum.photos/800/600"
//             alt="test"
//             className="parallax"
//             style={{
//               filter: `blur(4px)`,
//               transform: `translateY(${offset * 0.5}px)`
//             }}
//           />
//           <div className="text-wrapper">
//             <h1 className="headline">Dashing</h1>
//             <h2 className="sub-headline">Scrolling effect</h2>
//           </div>
//         </section>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
//           consequatur quisquam accusamus nobis repellat, velit sequi et autem
//           tenetur aliquid eum cupiditate ipsa. Est odit quas maiores voluptatem a
//           dolores? Dolor repellendus placeat minus, tempora error accusantium ea a
//           porro recusandae nam, nostrum quo, nihil pariatur iste! Aperiam, ut eum,
//           suscipit porro modi dolor perferendis error est doloremque vitae cumque.
//           Soluta id eum necessitatibus excepturi voluptate hic porro veritatis
//           quod exercitationem, laudantium error ex iure sunt fugiat nemo odit quis
//           itaque tenetur velit minima cum enim, expedita possimus tempore! Eius!
//           Consequatur, ratione! Rem quam unde alias libero autem velit possimus
//           nihil vel, itaque culpa reiciendis molestias. Assumenda eveniet deleniti
//           ut. Molestiae quos repudiandae nostrum consequuntur in explicabo eos
//           cupiditate quis? Dolorum, qui! Sit nulla quo autem minus labore commodi,
//           rerum optio expedita cum accusamus deserunt praesentium quod dolores
//           exercitationem unde incidunt natus quis inventore temporibus, voluptas,
//           reprehenderit aspernatur eligendi! Sapiente. Obcaecati dicta ratione qui
//           saepe vitae! Recusandae autem, nesciunt cumque minus fuga facere modi
//           impedit at cupiditate est non fugit architecto ipsum qui numquam. Ipsam
//           cumque vitae accusantium nisi eos. Officiis rerum modi officia
//           laboriosam harum ullam assumenda mollitia, nemo cumque? Autem hic libero
//           consequatur sed! Aut porro placeat laborum voluptatum dolorem. Iure iste
//           ab doloremque atque earum molestiae placeat. Adipisci nam animi quia
//           quasi magni optio debitis expedita ipsam voluptate nulla voluptatibus
//           facilis soluta placeat quos aut neque repellendus eum eaque autem
//           eligendi officiis esse, corporis ratione corrupti. Odit! Perspiciatis
//           quis exercitationem dignissimos quo cum. Cupiditate delectus rem fugit
//           molestias consectetur quis facilis soluta laudantium? Ratione sunt ad
//           deleniti porro repellat ipsum modi debitis, tempore iure tempora vero
//           placeat. Magnam modi error nesciunt magni perferendis accusamus corrupti
//           tenetur dolor unde quas, quisquam debitis, corporis aliquam ab placeat
//           in totam voluptate molestiae facere odit facilis exercitationem impedit
//           deserunt repudiandae. Alias? Nulla minima rem at voluptatum id quisquam
//           voluptatem labore amet, quia doloribus corporis, reiciendis et.
//           Expedita, nam. Repellat natus voluptatibus quis amet at autem doloribus
//           a soluta similique, qui laborum? Sed perspiciatis ex asperiores alias
//           ullam quam tempore odit cum. Architecto ducimus explicabo itaque
//           doloribus esse, maxime vel amet veniam, tempore, possimus modi iste
//           blanditiis nam nobis eos ipsam corrupti! Neque reprehenderit, saepe
//           molestias quam eos culpa odio? Officiis necessitatibus quos nam, iste
//           veniam, aperiam dolorum assumenda nobis non animi doloribus alias
//           numquam rem quam reprehenderit ab. Ad, voluptates voluptatibus. Harum
//           quos veritatis dignissimos illum explicabo quibusdam, dolores debitis?
//           Praesentium ullam ea itaque nulla tenetur ipsam soluta error ipsa et,
//           voluptatum, facilis a commodi! Adipisci quaerat sit totam recusandae
//           asperiores. Aut iste veniam debitis delectus pariatur iusto eum
//           doloribus possimus est soluta maiores, laboriosam autem vero,
//           voluptatibus sapiente itaque voluptas iure explicabo accusantium maxime,
//           ipsum minus reiciendis id! Minus, eos. Sunt atque suscipit, nesciunt
//           eaque, delectus placeat odio vitae consequatur tempora blanditiis aut
//           quasi consectetur, ab maxime voluptates voluptate veritatis. Nihil sed
//           veritatis dolores repudiandae laudantium. Ad sunt nam fugit. Ut omnis
//           mollitia id perspiciatis consequatur quibusdam ab, soluta nobis. Quam
//           harum soluta odio consequuntur animi accusantium vero adipisci accusamus
//           doloremque laborum excepturi est provident tempora nihil, doloribus
//           atque placeat? Optio quo omnis vero mollitia ipsam ea numquam amet
//           expedita reiciendis, dicta facere provident aut laborum illo
//           reprehenderit commodi nesciunt quidem eos modi sunt ipsum nulla!
//           Doloribus ipsa non modi! Consequuntur sunt pariatur possimus odit
//           doloribus nostrum tenetur voluptate optio nulla harum quasi dolorum
//           debitis itaque reprehenderit eveniet sed eaque quod, porro labore qui
//           aspernatur veniam. A, sit tenetur? Et! Quia accusamus nihil dolorem ab
//           harum numquam quasi exercitationem fugit saepe distinctio ratione ea,
//           quis iusto quibusdam, odit debitis cumque non maiores reiciendis et
//           accusantium! Hic commodi soluta laborum dolor?
//         </p>

//         {/* Make space to scroll */}
//         <section className="overflow" />
//         <p>
//           Lalalalalla
//         </p>  
//       </div>
//     );
//   }