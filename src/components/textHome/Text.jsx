// import React from 'react';
// import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location

// export function Text() {
//   return (
//     <div>
//       <h1  className='h-text'>START REACT</h1>
//       <span className='line'></span>
//       <img src={blogimgg} className='star-text' alt="Start React" />
//       <span className='line'></span>
//     </div>
//   );
// }




import React from 'react';
import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location
import { PhotoComponent } from '../img/img';
// import './Text.css'; // Import CSS file for styling

export function Text() {
  return (
    <div className="text-container">
       <PhotoComponent/>
      <h1 className='h-text'>START REACT</h1>
    <div className='line'>
   
    <hr /><img src={blogimgg} className='star-text' alt="Start React" /><hr />
    </div>
    <p className='para'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
  );
}
