// import React from 'react';
// import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location
// import blogimggg from '../../assets/5.png'; // Adjust path based on actual location
// import blogimgggg from '../../assets/6.png'; // Adjust path based on actual location
// import blogimggggg from '../../assets/7.png'; // Adjust path based on actual location
// import blogimgggggg from '../../assets/8.png'; // Adjust path based on actual location
// import blogimggggggg from '../../assets/9.png'; // Adjust path based on actual location
// import blogimgggggggg from '../../assets/10.png'; // Adjust path based on actual location

// export function Portifolio() {
//   return (
//     <div className="mt-5 container flex-column">
//       <h1 className=" text-center" id='port-h1'>PORTFOLIO</h1>
//       <div className='line justify-content-center'>
//         <hr />
//         <img src={blogimgg} className='star-text' alt="Start React" />
//         <hr />
//       </div>
// <br />
//       <section className="row g-5">
//         <div className='col-4'>
//           <div  >
            
//             <img src={blogimggg} className='w-100 port-img position-realative' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div>
//             <img src={blogimgggg} className='w-100 port-img position-relative' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div>
//             <img src={blogimggggg} className='w-100 port-img position-relative' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div>
//             <img src={blogimgggggg} className='w-100 port-img position-relative' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div>
//             <img src={blogimggggggg} className='w-100 port-img position-relative' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div>
//             <img src={blogimgggggggg} className='w-100 port-img position-relative' alt="" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React from 'react';
// import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location
// import blogimggg from '../../assets/5.png'; // Adjust path based on actual location
// import blogimgggg from '../../assets/6.png'; // Adjust path based on actual location
// import blogimggggg from '../../assets/7.png'; // Adjust path based on actual location
// import blogimgggggg from '../../assets/8.png'; // Adjust path based on actual location
// import blogimggggggg from '../../assets/9.png'; // Adjust path based on actual location
// import blogimgggggggg from '../../assets/10.png'; // Adjust path based on actual location

// export function Portifolio() {
//   return (
//     <div className="mt-5 container flex-column">
//       <h1 className="text-center" id='port-h1'>PORTFOLIO</h1>
//       <div className='line justify-content-center'>
//         <hr />
//         <img src={blogimgg} className='star-text' alt="Start React" />
//         <hr />
//       </div>
//       <br />
//       <section className="row g-5">
//         <div className='col-4'>
//           <div className="img-container">
//             <img src={blogimggg} className='w-100' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div className="img-container">
//             <img src={blogimgggg} className='w-100' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div className="img-container">
//             <img src={blogimggggg} className='w-100' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div className="img-container">
//             <img src={blogimgggggg} className='w-100' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div className="img-container">
//             <img src={blogimggggggg} className='w-100' alt="" />
//           </div>
//         </div>
//         <div className='col-4'>
//           <div className="img-container">
//             <img src={blogimgggggggg} className='w-100' alt="" />
//           </div>
//         </div>
//       </section>

//       {/* Bootstrap Modal Trigger Button */}
//       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//         Launch demo modal
//       </button>

//       {/* Bootstrap Modal */}
//       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               Modal content goes here...
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location
// import blogimggg from '../../assets/5.png'; // Adjust path based on actual location
// import blogimgggg from '../../assets/6.png'; // Adjust path based on actual location
// import blogimggggg from '../../assets/7.png'; // Adjust path based on actual location
// import blogimgggggg from '../../assets/8.png'; // Adjust path based on actual location
// import blogimggggggg from '../../assets/9.png'; // Adjust path based on actual location
// import blogimgggggggg from '../../assets/10.png'; // Adjust path based on actual location

// export function Portifolio() {
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Data for each item
//   const items = [
//     { id: 1, image: blogimggg, title: 'LOG CABIN', description: 'Description for Item 1', head: "moooo" },
//     { id: 2, image: blogimgggg, title: 'TASTY CAKE', description: 'Description for Item 2', head: "yoooo" },
//     { id: 3, image: blogimggggg, title: 'CIRCUS TENT', description: 'Description for Item 3',head: "toooo"  },
//     { id: 4, image: blogimgggggg, title: 'CONTROLER', description: 'Description for Item 4',head: "aoooo" },
//     { id: 5, image: blogimggggggg, title: 'LOCKED SAFE', description: 'Description for Item 5',head: "moooo" },
//     { id: 6, image: blogimgggggggg, title: 'SUBMARINE', description: 'Description for Item 6',head: "moooo" },
//   ];

//   // Handle click on an item
//   const handleClick = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <div className="mt-5 container flex-column">
//       <h1 className="text-center" id='port-h1'>PORTFOLIO</h1>
//       <div className='line justify-content-center'>
//         <hr />
//         <img src={blogimgg} className='star-text' alt="Start React" />
//         <hr />
//       </div>
//       <br />
//       <section className="row g-5">
//         {items.map((item) => (
//           <div className='col-4' key={item.id} onClick={() => handleClick(item)}>
//             <div className="img-container">
//               <img src={item.image} className='w-100'  alt="" />
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Display selected item data in modal */}
//       {selectedItem && (
//         <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="exampleModal">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title text-danger text-center ">{selectedItem.title}
//                 <div className='line d-flex justify-content-center'>
   
//    <hr /><img src={blogimgg} className='star-text' alt="Start React" /><hr />
//    </div>
//                 </h1>
//                 <button type="button" className="btn-close" onClick={() => setSelectedItem(null)}></button>
//               </div>
//               <div className="modal-body ">
//                 <img src={selectedItem.image} style={{ width: '600px', height: '600px', objectFit: 'cover' }} alt={selectedItem.title} />
//                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas laborum tempore maxime illum, explicabo nesciunt error vero eos obcaecati possimus, cum itaque ipsum aspernatur qui natus fugiat iure veniam! Ullam.</p>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location
// import blogimggg from '../../assets/5.png'; // Adjust path based on actual location
// import blogimgggg from '../../assets/6.png'; // Adjust path based on actual location
// import blogimggggg from '../../assets/7.png'; // Adjust path based on actual location
// import blogimgggggg from '../../assets/8.png'; // Adjust path based on actual location
// import blogimggggggg from '../../assets/9.png'; // Adjust path based on actual location
// import blogimgggggggg from '../../assets/10.png'; // Adjust path based on actual location

// export function Portifolio() {
//   const [selectedItem, setSelectedItem] = useState(null);

//   // Data for each item
//   const items = [
//     { id: 1, image: blogimggg, title: 'LOG CABIN', description: 'Description for Item 1', head: "moooo" },
//     { id: 2, image: blogimgggg, title: 'TASTY CAKE', description: 'Description for Item 2', head: "yoooo" },
//     { id: 3, image: blogimggggg, title: 'CIRCUS TENT', description: 'Description for Item 3',head: "toooo"  },
//     { id: 4, image: blogimgggggg, title: 'CONTROLER', description: 'Description for Item 4',head: "aoooo" },
//     { id: 5, image: blogimggggggg, title: 'LOCKED SAFE', description: 'Description for Item 5',head: "moooo" },
//     { id: 6, image: blogimgggggggg, title: 'SUBMARINE', description: 'Description for Item 6',head: "moooo" },
//   ];

//   // Handle click on an item
//   const handleClick = (item) => {
//     setSelectedItem(item);
//   };

//   return (
//     <div className="mt-5 container flex-column">
//       <h1 className="text-center" id='port-h1'>PORTFOLIO</h1>
//       <div className='line justify-content-center'>
//         <hr />
//         <img src={blogimgg} className='star-text' alt="Start React" />
//         <hr />
//       </div>
//       <br />
//       <section className="row g-5">
//         {items.map((item) => (
//           <div className='col-4' key={item.id} onClick={() => handleClick(item)}>
//             <div className="img-container">
//               <img src={item.image} className='w-100' alt="" />
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Display selected item data in modal */}
//       {selectedItem && (
//         <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="exampleModal">
//           <div className="modal-dialog modal-lg d-flex justify-content-center"> {/* Use modal-lg to make the modal larger */}
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h1 className="modal-title text-danger text-center ">{selectedItem.title}
//                   <div className='line d-flex justify-content-center'>
//                     <hr /><img src={blogimgg} className='star-text' alt="Start React" /><hr />
//                   </div>
//                 </h1>
//                 <button type="button" className="btn-close" onClick={() => setSelectedItem(null)}></button>
//               </div>
//               <div className="modal-body">
//                 <img src={selectedItem.image} style={{ width: '600px', height: '600px', objectFit: 'cover' }} alt={selectedItem.title} />
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas laborum tempore maxime illum, explicabo nesciunt error vero eos obcaecati possimus, cum itaque ipsum aspernatur qui natus fugiat iure veniam! Ullam.</p>
              
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from 'react';
import blogimgg from '../../assets/th-removebg-preview.png'; // Adjust path based on actual location
import blogimggg from '../../assets/5.png'; // Adjust path based on actual location
import blogimgggg from '../../assets/6.png'; // Adjust path based on actual location
import blogimggggg from '../../assets/7.png'; // Adjust path based on actual location
import blogimgggggg from '../../assets/8.png'; // Adjust path based on actual location
import blogimggggggg from '../../assets/9.png'; // Adjust path based on actual location
import blogimgggggggg from '../../assets/10.png'; // Adjust path based on actual location
import { Icon } from '../icons/Icon';

export function Portifolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Data for each item
  const items = [
    { id: 1, image: blogimggg, title: 'LOG CABIN', description: 'Description for Item 1', head: "moooo" },
    { id: 2, image: blogimgggg, title: 'TASTY CAKE', description: 'Description for Item 2', head: "yoooo" },
    { id: 3, image: blogimggggg, title: 'CIRCUS TENT', description: 'Description for Item 3', head: "toooo" },
    { id: 4, image: blogimgggggg, title: 'CONTROLLER', description: 'Description for Item 4', head: "aoooo" },
    { id: 5, image: blogimggggggg, title: 'LOCKED SAFE', description: 'Description for Item 5', head: "moooo" },
    { id: 6, image: blogimgggggggg, title: 'SUBMARINE', description: 'Description for Item 6', head: "moooo" },
  ];

  // Handle click on an item
  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="mt-5 container flex-column">
      <h1 className="text-center fs-1 text-primary fw-bold" id="port-h1 ">PORTFOLIO</h1>
      <div className="line justify-content-center">
        <hr />
        <img src={blogimgg} className="star-text" alt="Start React" />
        <hr />
      </div>
      <br />
      <section className="row g-5">
        {items.map((item) => (
          <div className=" col-xxl-4 col-xl-4 col-4--lg col-6-md col-12-sm" key={item.id} onClick={() => handleClick(item)}>
            <div className="img-container">
                <Icon/>
              <img src={item.image} className="w-100" alt="" />
            </div>
          </div>
        ))}
      </section>

      {/* Display selected item data in modal */}
      {selectedItem && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header flex-column">
              <button type="button" className="btn-close" onClick={() => setSelectedItem(null)}></button>
                <h1 className="modal-title text-danger text-center " >{selectedItem.title}</h1>
                <div className="line d-flex justify-content-center d-block">
                  <hr /><img src={blogimgg} className="star-text d-block"  alt="Start React" /><hr />
                </div>
                
              </div>
              <div className="modal-body">
                <img src={selectedItem.image} style={{ maxWidth: '100%', height: 'auto', maxHeight: '600px', objectFit: 'contain' }} alt={selectedItem.title} />
                <p className="text-center">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, facilis! Beatae, nemo eum repudiandae facere nihil voluptates molestias natus? Consequuntur odio quod corporis pariatur ut rerum tempora earum fugit sunt.</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
