import React, { Component } from 'react';
import { connect } from "react-redux";
import { addFriend} from './Actions';
import { Button} from 'reactstrap/lib';

import './index.css'
class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  addFriendHandler = event => {
    event.preventDefault();
      const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    this.props.addFriend(friend);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.addFriendHandler}>
        
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="email"
            value={this.state.email}
            name="email"
          />
          <Button color="success" type="submit">Add Friend</Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    addFriend
  }
)(FriendForm);


