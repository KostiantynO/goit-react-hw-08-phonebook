import { ButtonStyled } from 'components/common/Button';
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';
import {
  useDeleteContactMutation,
  useReadContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts';
import { useLang } from 'hooks';
import { LoadingIcon } from 'components/common';

const ContactStyled = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 4px 16px 4px 4px;
  background-color: ${({ theme }) => theme.colors.nav};
`;

const ContactEditName = styled.input`
  width: 55%;
`;

const ContactEditNumber = styled.input`
  width: 40%;
`;

const DeleteContactButton = styled(ButtonStyled)`
  position: absolute;
  top: -8px;
  right: -12px;
`;

const Contact = ({ id, name, number }) => {
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const onUpdateContact = e =>
    updateContact({ id, [e.target.name]: e.target.value });
  const onDeleteContact = () => deleteContact(id);
  const disabled = isUpdating || isDeleting;

  return (
    <ContactStyled>
      <ContactEditName
        type="text"
        name="name"
        value={name}
        onChange={onUpdateContact}
        disabled={disabled}
      />

      <ContactEditNumber
        type="tel"
        name="number"
        value={number}
        onChange={onUpdateContact}
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

const ContactsListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 4px;
  gap: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;

const ContactsList = ({ contacts }) => {
  return (
    <ContactsListStyled>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ContactsListStyled>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const FilterStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 280px;
`;

const FilterInput = styled.input`
  width: 100%;
  background-color: tomato;
`;

const ClearFilterButton = styled(ButtonStyled)``;

const LoadingIconAbsolute = styled(LoadingIcon).attrs({
  width: 30,
  height: 20,
})`
  position: absolute;
  right: -28px;
`;

const Filter = ({ filter, setFilter, isFetching }) => {
  const onSetFilter = e => setFilter(e.target.value);

  return (
    <FilterStyled>
      <FilterLabel>
        <FilterInput value={filter} onChange={onSetFilter} />
      </FilterLabel>

      <ClearFilterButton>Clear</ClearFilterButton>

      {isFetching && <LoadingIconAbsolute />}
    </FilterStyled>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const ContactsView = () => {
  const { data: contacts, isFetching } = useReadContactsQuery();
  const lang = useLang();
  const [filter, setFilter] = useState('');
  console.log('ContactsView ~ filter', filter);

  console.log('ContactsView ~ contacts', contacts);

  return (
    <div>
      <p>{lang.contactsView.filterDesc}</p>
      <Filter isFetching={isFetching} filter={filter} setFilter={setFilter} />

      {contacts && <ContactsList contacts={contacts} />}
    </div>
  );
};

ContactsView.propTypes = {};

export default ContactsView;
