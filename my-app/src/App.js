import "./App.css";
import Jsx from "./jsx-example/index";
import CompoA from "./component-example/index";
import State from "./state-example/index";
import Effect from "./useeffect-example/index";

function App() {
  return (
    <div className="App">
      <body>
        <Jsx />
        <CompoA />
        <State />
        <Effect />
      </body>
    </div>
  );
}

export default App;
