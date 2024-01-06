// EmailForm.js
import React, { useState } from 'react';

const EmailForm = ({ addEmail }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmail(email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Add Email</button>
    </form>
  );
};

export default EmailForm;