import { Button } from '@mui/material';
import { LoadingIcon } from 'components/common';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateContactMutation } from 'redux/contacts';
import { closeModal } from 'redux/modal';
import { CreateContactFormLabel } from '../ContactsList/ContactsList.styled';
import { CreateContactFormStyled } from './CreateContactForm.styled';

export const CreateContactForm = () => {
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (!name || !number) {
      return toast.error('Please fill name and phone');
    }

    createContact({ name, number });
    form.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact created');
      dispatch(closeModal());
    }
  }, [dispatch, isSuccess]);

  return (
    <CreateContactFormStyled onSubmit={handleSubmit} autoComplete="off">
      <CreateContactFormLabel>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. e.g. Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </CreateContactFormLabel>

      <CreateContactFormLabel>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and may start with +"
          required
        />
      </CreateContactFormLabel>

      <Button type="submit" variant="contained" disabled={isLoading}>
        {isLoading && <LoadingIcon />}
        Create Contact
      </Button>
    </CreateContactFormStyled>
  );
};
