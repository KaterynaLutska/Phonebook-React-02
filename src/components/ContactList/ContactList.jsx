const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li>
          {el.name + ':'}
          <span>{el.number}</span>
          <button onClick={() => onDelete(el.id)}>Delete Contact</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
