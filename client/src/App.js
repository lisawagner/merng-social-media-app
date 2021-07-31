import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import SinglePost from "./pages/SinglePost";

// --------------------------- Pause at 4:51--------------------------------------
// ------------------------- Many errors with set up ------------------------------

function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuBar />
        <Container>
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          {/* <Route exact path="/posts/:postsId" component={SinglePost} /> */}
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
