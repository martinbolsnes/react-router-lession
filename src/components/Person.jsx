import React from 'react';

import { Button, Container } from '@mantine/core';

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

    this.handleDecrease = () => {
      this.setState({ ...this.state, age: this.state.age - 1 });
    };
  }

  componentDidMount() {
    console.log('Component did mount');
    setTimeout(() => {
      this.setState({ name: 'Ola' });
    }, 1000);
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
        <h2>{this.props.title}</h2>
        <h3>
          Name: {this.state.name} <br /> Age: {this.state.age}
        </h3>
        <br />
        <Container
          style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
        >
          <Button onClick={() => this.handleIncrease()}>Increase age</Button>
          <Button onClick={() => this.handleDecrease()}>Decrease age</Button>
        </Container>
      </div>
    );
  }
}

export default Person;
