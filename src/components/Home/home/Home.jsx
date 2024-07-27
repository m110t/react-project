

import React from 'react';  
  // Adjust path as needed

import { PhotoComponent } from '../../img/img';  // Adjust path as needed
import { Navbar } from '../../NavBar/NavBar';
import { Text } from '../../textHome/Text';

// Define the Home component
export function Home() {
  return (
    <div className="home">
      <Navbar/>
      
      <Text/>
   
    </div>
  );
}