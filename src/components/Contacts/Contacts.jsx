import PropTypes from 'prop-types';
import { ContactsList, ContactItem, DeleteContactButton } from './Contacts.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

export function Contacts({contacts, onDeleteContact}) {
  return (
    <ContactsList>
      {contacts.map(({id, name, number}) => (
        <ContactItem
          key={id}
        >
          {renderIcons('contact', iconSize.md)}
          <span className='contact__name'>{name}: </span>
          <span className='contact__number'>{number}</span>
          <DeleteContactButton
            type='button'
            className='deleteBtn'
            onClick={() => onDeleteContact(id)}
            
          >
            {renderIcons('delete', iconSize.sm)}
          </DeleteContactButton>
          
      </ContactItem>
      ))}
    </ContactsList>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};