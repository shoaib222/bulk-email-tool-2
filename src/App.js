// App.js
import React, { useState } from 'react';
import EmailForm from './EmailForm';
import EmailList from './EmailList';

const App = () => {
  const [emails, setEmails] = useState([]);

  const addEmail = (newEmail) => {
    setEmails([...emails, newEmail]);
  };

  return (
    <div>
      <h1>Bulk Email Tool</h1>
      <EmailForm addEmail={addEmail} />
      <EmailList emails={emails} />
    </div>
  );
};

export default App;