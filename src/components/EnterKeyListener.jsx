import { useEffect } from 'react';
import PropTypes from 'prop-types';

function EnterKeyListener({ onEnter }) {
  useEffect(() => {
    const enterKey = (e) => {
      if (e.key === 'Enter') {
        onEnter();
      }
    };

    document.addEventListener('keydown', enterKey);
    return () => { document.removeEventListener('keydown', enterKey); };
  }, [onEnter]);

  return null;
}

EnterKeyListener.propTypes = { onEnter: PropTypes.func };

export default EnterKeyListener;
