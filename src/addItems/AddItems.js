import React, { Component } from "react";
import "./AddItems.css";

class AddItems extends Component {
  state = {
    name: "",
    age: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.name.value === "") {
      return (document.getElementById("err").style.display = " block");
    }
    if (e.target.age.value === "") {
      return (document.getElementById("err").style.display = " block");
    } else {
      this.props.addItems(this.state);
      this.setState({
        name: "",
        age: "",
      });
      document.getElementById("succ").style.display = "block";
      // eslint-disable-next-line no-restricted-globals
      if (!closed) {
        setTimeout(() => {
          document.getElementById("succ").style.display = "none";
        }, 1000);
      }
    }
  };
  close = () => {
    document.getElementById("err").style.display = "none";
    document.getElementById("succ").style.display = "none";
  };

  render() {
    return (
      <div className="Add">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter name..."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter age..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
        <p id="err" className="error">
          Faild
          <span className="close" onClick={this.close}>
            &times;
          </span>
        </p>
        <p id="succ" className="success">
          success
          <span className="close" onClick={this.close}>
            &times;
          </span>
        </p>
      </div>
    );
  }
}

export default AddItems;
