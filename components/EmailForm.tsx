// components/ContactForm.tsx
import { useState } from 'react';

const onlyNumber = (input:any) => {
  // Remove non-digit characters
  const filteredInput = input.replace(/\D/g, '');

  // Limit the length to 15 digits
  return filteredInput.slice(0, 15);
};

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e:any) => {
    // Apply onlyNumber function when input changes
    const filteredPhone = onlyNumber(e.target.value);
    setPhone(filteredPhone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/', {
      // method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      setStatus('Email sent successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      setStatus('Failed to send email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="hidden">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Name'
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label htmlFor="email" className="hidden">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Email'
          className="w-full p-2 border"
        />
      </div>
      <div>
        <label htmlFor="phone" className="hidden">Phone</label>
        <input
            id="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            required
            placeholder='Phone'
            className="w-full p-2 border"
            pattern="^\d{1,15}$" // Regex to accept only digits with max length 15
            title="Phone number should only contain digits (10 to 15 Digits)" // Tooltip for user
        />
        </div>
      <div>
        <label htmlFor="message" className="hidden">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={8}
          placeholder='Message'
          className="w-full p-2 border"
        ></textarea>
      </div>
      <button type="submit" className="p-2 text-2xl bg-green-600 w-full rounded hover:bg-green-700 cursor-pointer text-white">Get in Touch</button>
      <div>{status}</div>
    </form>
  );
};

export default EmailForm;
