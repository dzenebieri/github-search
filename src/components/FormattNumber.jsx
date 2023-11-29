import PropTypes from 'prop-types';

const FormattNumber = ({ number }) => {
  if (number < 1000) {
    return <span>{number}</span>;
  } else if (number < 1000000) {
    return <span>{(number / 1000).toFixed(1)}k</span>;
  } else {
    return <span>{(number / 1000000).toFixed(1)}M</span>;
  }
};

FormattNumber.propTypes = { number: PropTypes.number }

export default FormattNumber;
