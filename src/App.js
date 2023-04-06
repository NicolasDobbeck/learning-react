import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'The title1',
        body: 'The body1'
      },
      {
        id: 2,
        title: 'The title2',
        body: 'The body2'
      },
      {
        id: 3,
        title: 'The title3',
        body: 'The body3'
      }
    ]
  };

  timeoutUpdate = null;

  //default react, não tem arow(=>) function
  componentDidMount() {
    this.handleTimeOut();
  }

  //default react, não tem arow(=>) function
  componentDidUpdate() {
    this.handleTimeOut();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'The title change'
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000);
  }

  //default react, não tem arow(=>) function
  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id} >
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
