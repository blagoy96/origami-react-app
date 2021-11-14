import Header from "./components/Header/Header";
import Menu from "./components/Main/Menu/Menu";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Component } from "react";
import { Route, Routes, Link, NavLink, Redirect } from "react-router-dom";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";

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
            <Route path="/about/:name" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/" element={<Main posts={this.state.posts} />} />
            <Route path="*" element={<h1>Error page</h1>} />
            <Route path="/about" element={<About />} />
          </Routes>
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
