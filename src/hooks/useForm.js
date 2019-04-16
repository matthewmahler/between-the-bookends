import { useState } from 'react';

const useForm = callback => {
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setPassword(password => ({
      ...password,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    password,
  };
};

export default useForm;
