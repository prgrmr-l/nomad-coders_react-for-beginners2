import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// 🚨🚨🚨
// React Router 설치할때. 아래 커맨드를 사용해주세요:
// npm i react-router-dom@5.3.0
// 🚨🚨🚨
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
