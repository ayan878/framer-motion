import React from 'react'
import ShadowCard from './components/ShadowCards'
import imgae from "../src/assets/react.svg"
import Card from './components/Card';

function App() {
  return (
    <div>
      <ShadowCard
        imageSrc={imgae}
        altText="Sample Image"
      />
      <Card/>
    </div>
  );
}

export default App