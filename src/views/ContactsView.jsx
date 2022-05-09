import { useCallback, useMemo, useState } from 'react';

import {
  getVisibleContacts,
  useCreateContactMutation,
  useReadContactsQuery,
} from 'redux/contacts';
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
import { toast } from 'react-toastify';
const ContactsContainer = styled(Container)``;

const FilterContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;
`;

const ContactsView = () => {
  const { data: contacts, isFetching } = useReadContactsQuery();
  const [createContact, { isLoading: isCreating }] = useCreateContactMutation();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);

  const lang = useLang();

  const [filter, setFilter] = useState('');
  const visibleContacts = useMemo(
    () => getVisibleContacts(contacts, filter),
    [contacts, filter]
  );

  const onSubmitCreateContact = useCallback(
    e => {
      e.preventDefault();
      const form = e.target;
      const name = form.elements.name.value.trim();
      const number = form.elements.number.value.trim();

      if (!name || !number) {
        return toast.error('Please fill name and phone');
      }

      createContact({ name, number });
      form.reset();
      toggleModal();
    },
    [createContact, toggleModal]
  );

  return (
    <Section>
      <ContactsContainer>
        <h1>{lang.contactsView.title}</h1>

        <FilterDescription>{lang.contactsView.filter.desc}</FilterDescription>

        <FilterContainer>
          <Filter
            isFetching={isFetching}
            filter={filter}
            setFilter={setFilter}
            lang={lang}
          />

          <Button
            color="info"
            variant="contained"
            endIcon={<AiFillPlusCircle size={24} />}
            onClick={toggleModal}
          >
            <span>{lang.contactsView.createContactButtonLabel}</span>
          </Button>
        </FilterContainer>

        <Modal showModal={showModal} toggleModal={toggleModal}>
          <CreateContactForm
            onSubmit={onSubmitCreateContact}
            isCreating={isCreating}
            lang={lang}
          />
        </Modal>

        {contacts && <ContactsList contacts={visibleContacts} />}
      </ContactsContainer>
    </Section>
  );
};

ContactsView.propTypes = {};

export default ContactsView;
