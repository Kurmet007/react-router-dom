import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  if (mailboxes.length === 0) return <p>No mailboxes found.</p>;

  return (
    <main>
      <h2>Mailboxes</h2>
      <div className="mailbox-list">
        {mailboxes.map((mailbox) => (
          <div className="mail-box" key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>{mailbox._id}</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MailboxList;
