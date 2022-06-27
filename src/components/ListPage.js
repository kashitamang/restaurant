import React from 'react';
import { useEffect, useState } from 'react';
import { getMissedConnections } from '../services/fetch-utils';
import { MissedConnection } from './MissedConnection';

export default function ListPage() {
  const [missedConnections, setMissedConnections] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const missedConnections = await getMissedConnections();
      
      setMissedConnections(missedConnections);
    }
    doFetch();
  }, []);

  return (
    <div className="list">
      {
        missedConnections.map((missedConnection, i) => 
          <MissedConnection missedConnection={missedConnection} key={missedConnection.title + i} />
        )
      }
    </div>
  );
}






// #"List page#
// Make state for our data
// Fetch our data in a use effect
// map over the data in our JSX
// Render a link to detail page for each item in the array
