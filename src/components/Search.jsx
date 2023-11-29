import { useRef, useState } from 'react';
import User from './User';
import Message from './Message';
import SearchIN from './SearchIN';
import SearchBN from './SearchBN';
import SearchXBN from './SearchXBN';
import EnterKeyListener from './EnterKeyListener';
import EscapeKeyListener from './EscapeKeyListener';

const GitHubAPI = 'https://api.github.com/users';

function Search() {
  const inputRef = useRef(null);
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState('');
  const [inputValue, setInputValue] = useState('');

  const searchUsers = async () => {
    if (username) {
      try {
        const res = await fetch(`${GitHubAPI}/${username}`);
        if (res.ok) {
          const data = await res.json();
          setUserData(data);
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error("Fetch ERROR", error);
      }
    }
  };

  const userInVal = (e) => { const value = e.target.value; setUsername(value); setInputValue(value); };
  const EnterKey = () => { searchUsers(); };
  const clickSearchBN = () => { searchUsers(); };
  const inputX = () => { inputRef.current.focus(); setUserData(''); setUsername(''); setInputValue(''); };
  const EscapeKey = () => { inputRef.current.focus(); setUserData(''); setUsername(''); setInputValue(''); };

  return (
    <>
      <search>
        <SearchBN onClick={clickSearchBN} />
        <SearchIN autoFocus value={inputValue} inputRef={inputRef} onChange={userInVal} placeholder="Search github users by username..." />
        {inputValue.length > 0 && <SearchXBN onClick={inputX} />}
      </search>
      <EnterKeyListener onEnter={EnterKey} />
      <EscapeKeyListener onEscape={EscapeKey} />
      {userData === null ? <Message /> : userData && <User userData={userData} />}
    </>
  );
}

export default Search;
