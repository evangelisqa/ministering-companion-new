import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';

function Reports() {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fetchVisits = async () => {
      const querySnapshot = await getDocs(collection(db, 'visits'));
      const visitData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVisits(visitData);
    };
    fetchVisits();
  }, []);

  const completedCount = visits.length;
  const followUps = visits.filter(v => v.followUp).length;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📈 Ministering Progress Report</h2>
      <p><strong>Total Visits Logged:</strong> {completedCount}</p>
      <p><strong>Households Needing Follow-Up:</strong> {followUps}</p>
      <p><em>Consider sharing this summary with your presidency or ward council.</em></p>
    </div>
  );
}

export default Reports;