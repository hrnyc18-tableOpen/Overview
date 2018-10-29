import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  

    }
  }

  componentDidMount() {
    this.state.item = window.location.pathname.slice()
  }
  
  render() { 
    return (  );
  }
}

export default App;
