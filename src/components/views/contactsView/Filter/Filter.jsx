import {
  ClearFilterButton,
  FilterInput,
  FilterLabel,
  FilterStyled,
  LoadingIconAbsolute,
} from './Filter.styled';

import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter, isFetching, lang }) => {
  const onSetFilter = e => setFilter(e.target.value);
  const clearFilter = () => setFilter('');

  return (
    <FilterStyled>
      <FilterLabel>
        <FilterInput value={filter} onChange={onSetFilter} />
      </FilterLabel>

      <ClearFilterButton onClick={clearFilter}>
        {lang.contactsView.filter.clearFilterButtonLabel}
      </ClearFilterButton>

      {isFetching && <LoadingIconAbsolute />}
    </FilterStyled>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lang: PropTypes.object.isRequired,
};
