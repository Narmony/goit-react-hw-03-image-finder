import { Component } from 'react';
import './styles.css';
// import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {};

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    // console.log('app component did update');
  }

  render() {
    return <div className="app"></div>;
  }
}
export default App;
