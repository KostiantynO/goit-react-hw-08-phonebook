const digitsRegExp = /^\d+$/;

export const getVisibleContacts = (contacts = [], filter = '') => {
  const normalizedFilter = filter.toLowerCase();
  const hasNumbers = digitsRegExp.test(normalizedFilter);

  return filter
    ? hasNumbers
      ? contacts?.filter(({ number }) =>
          number.toLowerCase().includes(normalizedFilter)
        )
      : contacts?.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        )
    : contacts;
};
