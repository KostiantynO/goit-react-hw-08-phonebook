import { ContactsListStyled } from './ContactsList.styled';
import { Contact } from '../Contact';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts }) => (
  <ContactsListStyled>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id} id={id} name={name} number={number} />
    ))}
  </ContactsListStyled>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
