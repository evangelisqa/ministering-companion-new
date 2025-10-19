import React from 'react';

const messages = [
  {
    title: "Compassion",
    quote: "“When ye are in the service of your fellow beings ye are only in the service of your God.” — Mosiah 2:17",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2023/04/compassion"
  },
  {
    title: "Hope",
    quote: "“Peace I leave with you, my peace I give unto you.” — John 14:27",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2022/10/hope"
  }
];

function MessageLibrary() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>📚 Uplifting Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index} style={{ marginBottom: '1.5rem' }}>
            <strong>{msg.title}</strong><br />
            <em>{msg.quote}</em><br />
            <a href={msg.link} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageLibrary;