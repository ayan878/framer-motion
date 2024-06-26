import React from 'react'
import ShadowCard from './components/ShadowCards'
import imgae from "../src/assets/react.svg"

function App() {
  return (
    <div>
      <ShadowCard
        imageSrc={imgae}
        altText="Sample Image"
      />
    </div>
  );
}

export default App