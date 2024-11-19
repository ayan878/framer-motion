import { ContextProvider } from "./ContextProvider";
import SliderToggles from "./SliderToggles";
import Toggles from "./Toggles";

function App() {
  return (
    <ContextProvider>
      <Toggles />
      <SliderToggles/>
    </ContextProvider>
  );
}

export default App;
