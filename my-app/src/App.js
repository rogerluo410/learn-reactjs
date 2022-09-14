import "./App.css";
import Jsx from "./jsx-example/index";
import CompoA from "./component-example/index";
import State from "./state-example/index";
import Effect from "./useeffect-example/index";
import Hooks from "./hooks-example/index";

function App() {
  return (
    <div className="App">
      <body>
        <Jsx />
        <CompoA />
        <State />
        <Effect />
        <Hooks />
      </body>
    </div>
  );
}

export default App;
