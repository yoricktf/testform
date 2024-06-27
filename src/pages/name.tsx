type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  salary: string;
};

interface HomeProps {
  userData: User;
  updateUserProperties: (
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) => void;
}

export default function Home({ updateUserProperties, userData }: HomeProps) {
  function validateUserName(value: string) {}

  return (
    <>
      <form onSubmit={(e) => updateUserProperties(e, 'contact')}>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          defaultValue={userData.firstName}
          onChange={(e) => validateUserName(e.target.value)}
        />
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          defaultValue={userData.lastName}
          onChange={(e) => validateUserName(e.target.value)}
        />
        <button>next</button>
      </form>
    </>
  );
}
