import React from 'react';
import Link from 'next/link';
import PhoneInput from '@/components/phoneInput';
import EmailInput from '@/components/emailInput';
import { useState } from 'react';
import ProgressBar from '@/components/progressBar';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  salary: string;
};

interface ContactProps {
  userData: User;
  updateUserProperties: (
    e: React.FormEvent<HTMLFormElement>,
    nextpage: string
  ) => void;
}

export default function Contact({
  updateUserProperties,
  userData,
}: ContactProps) {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  return (
    <>
      <ProgressBar progress={50} />
      <form onSubmit={(e) => updateUserProperties(e, 'salary')}>
        <EmailInput
          setIsEmailValid={setIsEmailValid}
          isEmailValid={isEmailValid}
          userEmail={userData.email}
        />
        <PhoneInput
          setIsPhoneValid={setIsPhoneValid}
          isPhoneValid={isPhoneValid}
          userPhone={userData.phone}
        />
        <button disabled={!isEmailValid || !isPhoneValid}>next</button>
      </form>
      <Link href='/name'>name</Link>
    </>
  );
}
