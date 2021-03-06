// import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// // console.log(uuidv4());

// import './Phonebook.css';

// class Phonebook extends Component {
//   state = {
//     // contacts: [],
//     name: '',
//     number: '',
//   };

//   nameInputId = uuidv4();
//   numberInputId = uuidv4();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     console.log(e.currentTarget);

//     this.setState({
//       [name]: value,
//     });
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.reset();

//     this.state.contacts.push(this.state);
//     console.log('Contacts', this.state);
//   };

//   render() {
//     const { name, number } = this.state;
//     const { title } = this.props;
//     return (
//       <div className="phonebook">
//         <h1>{title}</h1>
//         <form onSubmit={this.handleSubmit} className="phonebook-form">
//           <div className="phonebook-wrap">
//             <label htmlFor={this.nameInputId} className="phonebook-label">
//               Name
//               <input
//                 className="phonebook-input"
//                 id={this.nameInputId}
//                 name="name"
//                 value={name}
//                 type="text"
//                 onChange={this.handleChange}
//               ></input>
//             </label>
//           </div>
//           <div className="phonebook-wrap">
//             <label htmlFor={this.numberInputId} className="phonebook-label">
//               Number
//               <input
//                 className="phonebook-input"
//                 id={this.numberInputId}
//                 name="number"
//                 value={number}
//                 type="text"
//                 onChange={this.handleChange}
//               ></input>
//             </label>
//           </div>
//           <button type="submit">Add contact</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Phonebook;
