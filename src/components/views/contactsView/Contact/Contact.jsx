import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contacts';

import {
  ContactEditName,
  ContactEditNumber,
  ContactStyled,
  DeleteContactButton,
} from './Contact.styled';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Contact = ({ id, name, number }) => {
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const [localName, setLocalName] = useState(name);
  const [localNumber, setLocalNumber] = useState(number);

  const onSubmitEdit = e =>
    updateContact({ id, [e.target.name]: e.target.value });

  const onDeleteContact = () => deleteContact(id);

  const disabled = isUpdating || isDeleting;

  return (
    <ContactStyled>
      <ContactEditName
        type="text"
        name="name"
        value={localName}
        onChange={e => setLocalName(e.target.value)}
        onBlur={onSubmitEdit}
        disabled={disabled}
      />

      <ContactEditNumber
        type="tel"
        name="number"
        value={localNumber}
        onChange={e => setLocalNumber(e.target.value)}
        onBlur={onSubmitEdit}
        disabled={disabled}
      />

      <DeleteContactButton onClick={onDeleteContact} disabled={disabled}>
        <AiOutlineClose size={20} />
      </DeleteContactButton>
    </ContactStyled>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
