import React from 'react';
import emailjs from 'emailjs-com';

function ReminderSender() {
  const sendReminder = () => {
    const templateParams = {
      to_name: 'Sister Angel',
      message: '🌸 Just a gentle reminder to complete your ministering visit this month. “By small and simple things are great things brought to pass.” — Alma 37:6',
      link: 'https://your-app-url.com/dashboard'
    };

    emailjs.send('service_iffzllt', 'template_nd3vcma', templateParams, 'your_user_id')
      .then(() => {
        alert('Reminder sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending reminder:', error);
      });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h3>🔔 Send Monthly Reminder</h3>
      <button onClick={sendReminder}>Send Monthly Reminder</button>
    </div>
  );
}

export default ReminderSender;