import "./App.css";
import Greetings from "./Greetings";
import Menu from "./Menu";
import Toggler from "./Toggler";

function App() {
  return (
    <div className="App">
      <Toggler>
        {({ on, toggle }) => {
          return <Menu on={on} toggle={toggle} />;
        }}
      </Toggler>
      <Toggler>
        {({ on, toggle }) => {
          return <Greetings on={on} toggle={toggle} />;
        }}
      </Toggler>
    </div>
  );
}

export default App;
