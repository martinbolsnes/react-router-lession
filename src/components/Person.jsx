import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Martin',
      age: 27,
    };

    this.handleIncrease = () => {
      this.setState({ ...this.state, age: this.state.age + 1 });
    };
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component did unmount');
  }

  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <h3>
          Name: {this.state.name} <br /> Age: {this.state.age}
        </h3>
        <br />
        <button onClick={() => this.handleIncrease()}>Increase age</button>
      </div>
    );
  }
}

export default Person;
