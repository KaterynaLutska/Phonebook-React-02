import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    message: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value, //
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', message: '' });
  };

  render() {
    const { name, number, message } = this.state;
    return (
      <div className="phonebook">
        <form onSubmit={this.handleSubmit} className="phonebook-form">
          <div className="phonebook-input-fielsds">
            <label htmlFor={this.nameInputId} className="phonebook-label">
              <input
                className="phonebook-input"
                name="name"
                value={name}
                type="text"
                placeholder="name"
                onChange={this.handleChange}
              ></input>
            </label>
            <label className="phonebook-label">
              <input
                className="phonebook-input"
                name="number"
                value={number}
                type="tel"
                pattern="^[ 0-9]+$"
                placeholder="number"
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <div className="msg">
            <textarea
              placeholder="more information"
              className="textarea"
              name="message"
              value={message}
              onChange={this.handleChange}
            ></textarea>
            <button type="submit" className="btn">
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  message: PropTypes.string,
  onSubmit: PropTypes.func,
};
