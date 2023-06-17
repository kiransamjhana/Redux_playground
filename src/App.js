import "./App.css";

import { Button } from "./Components/Button";
import { DisplayData } from "./Components/DisplayData";
import { FormData } from "./Components/FormComponent/FormData";
import { RealTime } from "./Components/FormComponent/RealTime";

function App() {
  return (
    <div className="App">
      <DisplayData />
      <Button />
      <FormData />
      <RealTime />
    </div>
  );
}

export default App;
