import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import MailboxList from "./components/MailboxList/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    const _id = mailboxes.length + 1;
    setMailboxes([...mailboxes, { _id, ...newMailbox }]);
  };

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />

        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />

        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />

        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

