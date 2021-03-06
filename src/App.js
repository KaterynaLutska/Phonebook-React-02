import './App.css';
// бібліотеки json //
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// all import //
import Container from './components/container/Container';
// import Phonebook from './components/Phonebook';
// import Contacts from './components/Contacts';

class App extends Component {
  state = {
    name: '',
    number: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(e.currentTarget);

    this.setState({
      [name]: value,
    });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = this.state.contacts;
    newContact.push({
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
      contacts: newContact,
    });
    console.log('array', newContact);
  };

  formSubmitHandler = data => {
    console.log('data', data);
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { name, number, filter } = this.state;
    const { title } = this.props;

    // filter //
    const normalize = this.state.filter.toLowerCase();

    console.log('norma', normalize); // друкує всі з маленької літери

    const visibleFilter = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(normalize),
    );

    console.log(visibleFilter);

    return (
      <div className="App">
        <Container>
          {/* <Phonebook
            onSubmit={this.formSubmitHandler}
            title="Phonebook"
          ></Phonebook> */}
          <div className="phonebook">
            <h1>Phonebook</h1>
            <form onSubmit={this.handleSubmit} className="phonebook-form">
              <div className="phonebook-wrap">
                <label htmlFor={this.nameInputId} className="phonebook-label">
                  Name
                  <input
                    className="phonebook-input"
                    // id={this.nameInputId}
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
                    //  id={this.numberInputId}
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
          <div>
            <h1>Contacts</h1>
            <div>
              <label>
                <input
                  type="text"
                  value={this.state.filter}
                  placeholder="Search..."
                  onChange={this.changeFilter}
                />
              </label>

              <ul>
                {visibleFilter.map(el => (
                  <li>
                    {el.name + ':'}
                    <span>{el.number}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <Contacts title="Contacts"> </Contacts> */}
        </Container>
      </div>
    );
  }
}

export default App;
