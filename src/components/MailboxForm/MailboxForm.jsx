import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({ boxOwner: "", boxSize: "Small" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Box Owner:
          <input
            type="text"
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Box Size:
          <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <button type="submit">Add Mailbox</button>
      </form>
    </main>
  );
};

export default MailboxForm;