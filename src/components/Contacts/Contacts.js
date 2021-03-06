import PropTypes from 'prop-types';
import ContactsListElement from '../ContactsListElement';

function Contacts({ names, onClick }) {
  return (
    <ul className="list">
      {names().map(el => {
        return (
          <ContactsListElement
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
}

ContactsListElement.PropTypes = {
  names: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default Contacts;
