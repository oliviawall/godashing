import React from 'react';
// import { Row, Col } from 'react-bootstrap'; 
import Passion from './../../assets/contact.png';
import './styles.scss';

// export default React.createClass ({
  
//     render() {
//         var background = {backgroundSize : 'cover'};
//         var textStyle = {
//           position: 'absolute', 
//           top: '50%', 
//           left: '50%'
//         };

//         return (
//             <div style={{width: 'auto'}}>
//                 <img 
//                   style={background} responsive 
//                   src='https://unsplash.com/photos/TamMbr4okv4'
//                 </img>
//                 <h1 style={textStyle}>Text over image</h1>
//             </div>
//         );
//     }

// });
const Contact = props => {
    return (

    <div className="background">
        <img src={Passion} />
        <div className='box'>
        <h3>Looking to connect?</h3></div>
    </div>
    );
};

export default Contact;
