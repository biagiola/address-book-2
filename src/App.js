import { useState } from "react";
import "./App.css";
import ToggleTab from './components/ToggleTab'
import Content from './components/Content'

function App() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="App">
        <ToggleTab 
          toggleTab={toggleTab} 
          toggleState={toggleState}
        />
        <Content 
          toggleState={toggleState}
        />
    </div>
  );
}
    
export default App;
