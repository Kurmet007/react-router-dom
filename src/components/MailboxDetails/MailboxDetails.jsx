import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((m) => m._id === Number(mailboxId));

  if (!mailbox) return <p>Mailbox Not Found!</p>;

  return (
    <main>
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {mailbox._id}</p>
      <p><strong>Owner:</strong> {mailbox.boxOwner}</p>
      <p><strong>Size:</strong> {mailbox.boxSize}</p>
    </main>
  );
};

export default MailboxDetails;
