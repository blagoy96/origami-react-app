import Header from "./components/Header/Header";
import Menu from "./components/Main/Menu/Menu";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Component } from "react";
import {
  Route,
  Link,
  NavLink,
  Redirect,
  Switch,
  Routes,
} from "react-router-dom";
import About from "./components/About/About";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((posts) => this.setState({ posts }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Menu />
          <Routes>
            <Route path="/about" component={About} />
          </Routes>
          <Main posts={this.state.posts} />
        </div>
        <Footer />
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Header />
//       <div className="container">
//         <Menu />
//         <Main className="content" />
//       </div>
//       <Footer />
//     </>
//   );
// }

export default App;
