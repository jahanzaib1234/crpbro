import React from 'react'
import Navbar from './components/Navbar'
import Our_features from './components/our_features'
import Economics from './components/Economics'
import Brotable from './components/Brotable'
import Meet_bros from './components/Meet_bros'
const Web3 = require('@solana/web3.js');

const App = () => {
  
  return (
    <div>
      
      <Navbar/>
      <Our_features/>
      <Economics/>
      <Brotable/>
      <Meet_bros/>
    </div>
  )
}

export default App
