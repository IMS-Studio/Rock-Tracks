import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MusicDetail from "../screens/MusicDetail";
import MusicList from "../screens/MusicList";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MusicList}></Route>
        <Route path="/music-detail" component={MusicDetail}></Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
