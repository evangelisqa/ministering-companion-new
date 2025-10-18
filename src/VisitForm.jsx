import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db} from './fireConfig';

function VisitForm() {
  const [household, setHousehold] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [followUp, setFollowUp] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Later: Save to Firestore
    try {
        await addDoc(collection(db, 'visits'), {
            household,
            date,
            notes,
            followUp,
            timesstamp: new Date()
        });
        setMessage ('Visit saved successfully.');
        setHousehold('');
        setDate('');
        setNotes('');
        setFollowUp(false);
    }catch (error) {
        setMessage('Error saving visit:' + error.message);
    }
    console.log({ household, date, notes, followUp });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>📝 Record a Ministering Visit</h2>
      <input
        type="text"
        placeholder="Household Name"
        value={household}
        onChange={(e) => setHousehold(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Notes or impressions"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows="4"
      />
      <label>
        <input
          type="checkbox"
          checked={followUp}
          onChange={(e) => setFollowUp(e.target.checked)}
        />
        Follow-up needed
      </label>
      <button type="submit">Save Visit</button>
    </form>
  );
}

export default VisitForm;