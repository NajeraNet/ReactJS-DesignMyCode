import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    };
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber() {
    this.setState({data: this.state.data +1})
  }
  // 
  render() {
    return (
      <div>
        <button onClick = {this.setNewNumber}>INCREMENT</button>
        <Content myNumber = {this.state.data}></Content>
      </div>
    );
  }
}

class Component extends React.Component {
  // Here the component Method

  // Component Will Mount
  componentWillMount() {
    console.log('Component WILL MOunt!');
  }
  // Component Did Mount
  componentDidMount() {
    console.log('Component Did Mount!');
  }
  // Component Will Recive Props
  componentWillReceiveProps() {
    console.log('Component Will Receive Props');
  }
  // Should Component Update
  shouldComponentUpdate() {
    console.log('Component: Should Component Update');
  }
  // Component Will Update 
  componentWillUpdate() {
    console.log('Component will Update!');
  }
  // Component Did Update
  componentDidUpdate() {
    console.log('Component Did Update!');
  }
  // Component Will Unmount 
  componentWillUnmount() {
    console.log('Component Will Unmount!');
  }
  // 
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
// 
export default App;