
// import ShadowCard from './components/ShadowCards'
// import imgae from "../src/assets/react.svg"
// import Card from './components/Card';
import ButtonClick from './components/ButtonClick';
import OnHoverButton from './components/OnHoverButton';
import TiltCard from './components/TiltCard';

function App() {
  return (
    <div>
      {/* <ShadowCard
        imageSrc={imgae}
        altText="Sample Image"
      /> */}
      {/* <Card/> */}
      <TiltCard/>
      <ButtonClick/>
      <OnHoverButton/>
    </div>
  );
}

export default App