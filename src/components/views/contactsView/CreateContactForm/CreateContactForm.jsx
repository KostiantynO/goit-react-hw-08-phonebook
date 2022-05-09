import { Button } from '@mui/material';
import { LoadingIcon } from 'components/common';

import { CreateContactFormStyled } from './CreateContactForm.styled';
import PropTypes from 'prop-types';
import { CreateContactFormLabel } from '../ContactsList/ContactsList.styled';

export const CreateContactForm = ({ onSubmit, isCreating, lang }) => {
  return (
    <CreateContactFormStyled onSubmit={onSubmit} autoComplete="off">
      <CreateContactFormLabel>
        <p>{lang.contactsView.createContactForm.nameLabel}</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. e.g. Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </CreateContactFormLabel>

      <CreateContactFormLabel>
        <p>{lang.contactsView.createContactForm.numberLabel}</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and may start with +"
          required
        />
      </CreateContactFormLabel>

      <Button type="submit" variant="contained" disabled={isCreating}>
        {isCreating && <LoadingIcon />}
        {lang.contactsView.createContactButtonLabel}
      </Button>
    </CreateContactFormStyled>
  );
};

CreateContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isCreating: PropTypes.bool.isRequired,
  lang: PropTypes.object.isRequired,
};
