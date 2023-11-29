import PropTypes from 'prop-types';

function SearchIN({ value, placeholder, autoFocus, inputRef, onChange }) {
  return (
    <input
      type="search"
      value={value}
      ref={inputRef}
      onChange={onChange}
      autoFocus={autoFocus}
      placeholder={placeholder}
    />
  );
}

SearchIN.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  inputRef: PropTypes.object,
  placeholder: PropTypes.string,
};

export default SearchIN;
