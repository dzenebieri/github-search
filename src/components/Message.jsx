import bg from '../imgs/bg.png';
import ERROR from '../imgs/404.png';
import hubgit from '../imgs/hubgit.png';
import shadow from '../imgs/shadow.png';
import { useEffect } from 'react';

function Message() {
  useEffect(() => {
    document.title = 'User not found';
    return () => { document.title = 'GitHub Search'; };
  }, []);

  return (
    <div className='Message'>
      <img src={bg} alt="404 Background" className='bg' />
      <div>
        <span><img src={ERROR} alt="404 Background" /></span>
        <span><img src={hubgit} alt="404 Background" /></span>
        <span><img src={shadow} alt="404 Background" /></span>
      </div>

      <p>
        This is not the username you are looking for.
        <a href="https://docs.github.com/rest/users/users#get-a-user" target="_blank" rel="noreferrer">Read Documentation</a>
        — OR —
        <a href="https://support.github.com/request?tags=dotcom-404" target="_blank" rel="noreferrer">Contact Support</a>
      </p>
    </div>
  );
}

export default Message;
