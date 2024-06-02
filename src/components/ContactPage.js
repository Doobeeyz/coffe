import React, { useState } from 'react';
import '../css/App.css';
import '../css/Contact.css';


const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты');
      return;
    }
  
    alert(`Сообщение отправлено от ${name}`);
  };

  return (
    <div id='hero' className='contact-page'>
      <div id='cnt'>
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Имя:</label>
          <input type="text" class="form-control" id='name' value={name} onChange={(e) => setName(e.target.value)} />
          <label for="email" class="form-label">Эл.почта:</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Сообщение:</label>
          <textarea class="form-control" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
          <button type="submit" className='button'>Отправить</button>
        </form>
        </div>
    </div>
  );
};

export default ContactPage;
