import { useSelector } from 'react-redux';
import st from './Contactlist.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, removeUser }) => {
  const contactsState = useSelector(state=>state.contacts);
  const filterState = useSelector(state=>state.filter);
  console.log(contactsState,filterState)
  return (
    <>
      <ul>
        {contacts&&contacts
          .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
          .map(el => {
            const { id, name, number } = el;
            return (
              <li className={st.listItem} key={id}>
                <span className={st.userName}>{name}:</span>
                <span className={st.userNumber}>{number}</span>
                <button className={st.btn} onClick={() => removeUser(id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string,
  removeUser: PropTypes.func,
};

export default ContactList;
