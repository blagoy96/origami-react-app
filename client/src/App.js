import Header from "./components/Header/Header";
import Menu from "./components/Main/Menu/Menu";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Component } from "react";

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
