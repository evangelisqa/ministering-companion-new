import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

function VisitHistory() {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fetchVisits = async () => {
      const querySnapshot = await getDocs(collection(db, 'visits'));
      const visitData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVisits(visitData);
    };
    fetchVisits();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📖 Ministering Visit History</h2>
      {visits.length === 0 ? (
        <p>No visits recorded yet.</p>
      ) : (
        <ul>
          {visits.map(visit => (
            <li key={visit.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <strong>Household:</strong> {visit.household}<br />
              <strong>Date:</strong> {visit.date}<br />
              <strong>Notes:</strong> {visit.notes}<br />
              <strong>Follow-up Needed:</strong> {visit.followUp ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VisitHistory;