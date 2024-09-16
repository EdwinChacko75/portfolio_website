import React from 'react';

function Footer() {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', fontSize: '0.8rem', backgroundColor: '#f8f9fa', color: '#333', borderTop: '1px solid #e7e7e7' }}>
      <span>&copy; 2024 Edwin Chacko</span>
      <span>Personal React Portfolio</span>
    </footer>
  );
}

export default Footer;