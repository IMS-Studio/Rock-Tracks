import { Provider } from "react-redux";

import "./App.css";
import Navigation from "./navigation/Router";
import { store } from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
