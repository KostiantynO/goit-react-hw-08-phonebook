import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getVisibleContacts, useReadContactsQuery } from 'redux/contacts';
import { openModal } from 'redux/modal';
import { useLang } from 'hooks';

import { AiFillPlusCircle } from 'react-icons/ai';

import { Container, Modal, Section } from 'components/common';
import {
  ContactsList,
  CreateContactForm,
  Filter,
} from 'components/views/contactsView';
import { FilterDescription } from 'components/views/contactsView/Filter/Filter.styled';

import styled from 'styled-components';

import { Button } from '@mui/material';
const ContactsContainer = styled(Container)``;

const FilterContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;
`;

const ContactsView = () => {
  const { data: contacts, isFetching } = useReadContactsQuery();
  const lang = useLang();
  const dispatch = useDispatch();
  const onModalOpen = () => dispatch(openModal());

  const [filter, setFilter] = useState('');
  const visibleContacts = useMemo(
    () => getVisibleContacts(contacts, filter),
    [contacts, filter]
  );

  return (
    <Section>
      <ContactsContainer>
        <h1>Contacts</h1>

        <FilterDescription>{lang.contactsView.filterDesc}</FilterDescription>

        <FilterContainer>
          <Filter
            isFetching={isFetching}
            filter={filter}
            setFilter={setFilter}
          />

          <Button color="info" variant="contained" onClick={onModalOpen}>
            <AiFillPlusCircle size={24} />
          </Button>
        </FilterContainer>

        <Modal>
          <CreateContactForm />
        </Modal>

        {contacts && <ContactsList contacts={visibleContacts} />}
      </ContactsContainer>
    </Section>
  );
};

ContactsView.propTypes = {};

export default ContactsView;
