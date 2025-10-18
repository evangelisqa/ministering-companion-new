import React from 'react';
import VisitForm from './VisitForm';

function Dashboard() {
  return (
    <div>
      <h2>🌸 Welcome to Your Ministering Dashboard</h2>
      <VisitForm />
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.8rem', color: '#333' }}>
        🌸 Welcome to Your Ministering Dashboard
      </h2>
      <p style={{ marginBottom: '1rem', fontStyle: 'italic', color: '#555' }}>
        Here you’ll find your assignments, visit history, and uplifting messages.
      </p>

      {/* Placeholder sections */}
      <section style={{ marginTop: '2rem' }}>
        <h3>Assigned Companions & Households</h3>
        <p>Coming soon: A list of your ministering assignments.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Recent Visits</h3>
        <p>Coming soon: A log of your recorded visits and impressions.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Spiritual Message of the Day</h3>
        <blockquote style={{ fontStyle: 'italic', color: '#666' }}>
          “By small and simple things are great things brought to pass.” — Alma 37:6
        </blockquote>
      </section>
    </div>
  );
}

export default Dashboard;