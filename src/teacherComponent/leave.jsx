import React from 'react';

const Leave = ({ event }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approved':
        return { color: 'green', backgroundColor: '#ccffcc' };
      case 'Rejected':
        return { color: 'red', backgroundColor: '#ffcccc' }; 
      case 'Pending':
        return { color: 'orange', backgroundColor: '#ffe5cc' }; 
      default:
        return { color: 'black', backgroundColor: '#e0e0e0' }; 
    }
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Leave ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Start Date</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>End Date</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Type</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Reason</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {event.map((item, index) => (
          <tr key={index} style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.leaveId}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.startDate}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.endDate}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.type}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.reason}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <span style={{ ...getStatusStyle(item.status), padding: '5px', borderRadius: '3px', display: 'inline-block' }}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Leave;
