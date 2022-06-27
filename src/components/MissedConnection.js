import React from 'react';
import { Link } from 'react-router-dom';

export function MissedConnection({ missedConnection }) {
  return (
    <Link to={`/update/${missedConnection.id}`} className="link" id="missed-connection">
      <h2>{missedConnection.title}</h2>
      <p>{missedConnection.message}</p>
    </Link>
  );
}
