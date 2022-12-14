import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// π¨π¨π¨
// React Router μ€μΉν λ. μλ μ»€λ§¨λλ₯Ό μ¬μ©ν΄μ£ΌμΈμ:
// npm i react-router-dom@5.3.0
// π¨π¨π¨
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
