import { useSelector } from 'react-redux';
import st from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filterUser }) => {
  const filterState = useSelector(state=>state.filter)
  console.log(filterState)
  return (
    <>
      <label className={st.label}>
        Find contacts by name
        <input
          type="text"
          onChange={ev => filterUser(ev.target.value)}
          className={st.wordForSearch}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filterUser: PropTypes.func,
};

export default Filter;
