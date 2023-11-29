import { useEffect } from 'react';
import PropTypes from 'prop-types';

function EscapeKeyListener({ onEscape }) {
  useEffect(() => {
    const escapeKey = (e) => {
      if (e.key === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', escapeKey);
    return () => { document.removeEventListener('keydown', escapeKey); };
  }, [onEscape]);

  return null;
}

EscapeKeyListener.propTypes = { onEscape: PropTypes.func };

export default EscapeKeyListener;
