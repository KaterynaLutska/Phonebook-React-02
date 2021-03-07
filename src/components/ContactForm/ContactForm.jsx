import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className="phonebook">
        <form onSubmit={this.handleSubmit} className="phonebook-form">
          <div className="phonebook-wrap">
            <label htmlFor={this.nameInputId} className="phonebook-label">
              Name
              <input
                className="phonebook-input"
                name="name"
                value={name}
                type="text"
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <div className="phonebook-wrap">
            <label className="phonebook-label">
              Number
              <input
                className="phonebook-input"
                name="number"
                value={number}
                type="text"
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
