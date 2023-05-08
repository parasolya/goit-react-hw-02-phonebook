import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
   
    return (
      <div>
          <ul>
        {contacts.map(el => {
          
          return (
              <li key={el.id}>
            <p>
              {el.name}: <span>{el.number}</span>
            </p>
            <button onClick={() => onDelete(el.id)}>delete</button>
            </li>
          );
        })}
        </ul>
      </div>
    );
  };
  ContactList.prototype = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  export default ContactList;