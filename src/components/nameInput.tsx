import { useEffect } from 'react';

export default function NameInput({
  userName,
  nameType,
  setIsNameValid,
  isNameValid,
}: any) {
  function validateUserName(value: string) {
    const nameRegex = /^[a-z ,.'-]+$/i;
    setIsNameValid(nameRegex.test(value));
  }

  useEffect(() => {
    validateUserName(userName);
  }, [userName]);

  return (
    <>
      <label htmlFor={nameType}>{nameType}:</label>
      <input
        type='text'
        id={nameType}
        name={nameType}
        defaultValue={userName}
        onChange={(e) => validateUserName(e.target.value)}
        className={isNameValid ? 'valid' : 'invalid'}
      />
    </>
  );
}