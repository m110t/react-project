// import React from 'react';
// import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons
// export function Call() {
//   return (
//     <div>
//          <h1 className='text-center contact-h1
          
//         '>CONTACT ME
//          </h1>
//       <div className="line justify-content-center">
//         <hr />
       
//         <img src={blogimgg} className="star-text" alt="Start React" />
//         <hr />
//       </div>

//       <div className="flex-column d-flex justify-content-center align-items-center">
//         <input type="text" placeholder="Name" className="contact" />
//         <input type="email" placeholder="Email" className="contact" />
//         <input type="text" placeholder="Address" className="contact" />
//         <textarea placeholder="Message" className="contact"></textarea>
//         <button className='btn btn-success p-3 ms-0'>Send</button>
//       </div>
//       <div>
//         <div>
//             <h1>LOCATION</h1>
//             <p>2215 John Daniel Drive
//             Clark, MO 65243</p>
//         </div>
//         <div>
//             <h1>AROUND THE WEB</h1>
//             <div>
//             <FontAwesomeIcon icon={fafacrbook} />
//             <FontAwesomeIcon icon={fatwitter} />
//             <FontAwesomeIcon icon={fainstagram} />
//             <FontAwesomeIcon icon={fayoutube} />
//             </div>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Call() {
  return (
    <div>
      <h1 className='text-center contact-h1'>CONTACT ME</h1>
      
      <div className="line justify-content-center">
        <hr />
        <img src={blogimgg} className="star-text" alt="Start React" />
        <hr />
      </div>

      <div className="flex-column d-flex justify-content-center align-items-center">
        <input type="text" placeholder="Name" className="contact" />
        <input type="email" placeholder="Email" className="contact" />
        <input type="text" placeholder="Address" className="contact" />
        <textarea placeholder="Message" className="contact"></textarea>
        <button className='btn btn-success p-3 ms-0 mb-5'>Send</button>
      </div>
<div className='info overflow-hidden'>
    
<div className="mt-5 d-flex container justify-content-between mt-3 call-media">
        <div className='m-media'>
          <h2 className='text-center'>LOCATION</h2>
          <p  className='text-center'>2215 John Daniel Drive, Clark, MO 65243</p>
        </div>

        <div className='m-media'>
          <h2 className='text-crnter aroumd'>AROUND THE WEB</h2>
          <div className='d-flex justify-content-center '>
            <div className=' rounded-circle '><FontAwesomeIcon icon={faFacebook} size="2x" className="i " /></div>
            <div className=' rounded-circle '><FontAwesomeIcon icon={faTwitter} size="2x" className="i " /></div>
            <div className=' rounded-circle '>    <FontAwesomeIcon icon={faInstagram} size="2x" className="i " /></div>
            <div className=' rounded-circle '>  <FontAwesomeIcon icon={faYoutube} size="2x" className=" i" /></div>
          </div>
        </div>
        <div className='m-media'>
            <h1  className='text-center'>ABOUT FREELANCER</h1>
            <p  className='text-center'>Freelance is a free to use, MIT licensed <br /> Bootstrap theme created by Hamza Nouh

</p>
        </div>
      </div>
</div>

<div className='copyRight'>
<p>Copyright © Hamza Nouh 2022</p>
</div>
    </div>
  );
}
