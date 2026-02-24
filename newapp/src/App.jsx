
import { useState } from 'react';
import './App.css';

function App() {
  const [partner1, setPartner1] = useState("");
  const [partner2, setPartner2] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCertificate(true);
  };

  const handleReset = () => {
    setPartner1("");
    setPartner2("");
    setDate("");
    setLocation("");
    setShowCertificate(false);
  };

  return (
    <div className="container">
      <h1>Fun Marriage Certificate Generator</h1>
      {!showCertificate ? (
        <form className="certificate-form" onSubmit={handleSubmit}>
          <div>
            <label>Partner 1 Name:</label>
            <input type="text" value={partner1} onChange={e => setPartner1(e.target.value)} required />
          </div>
          <div>
            <label>Partner 2 Name:</label>
            <input type="text" value={partner2} onChange={e => setPartner2(e.target.value)} required />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
          </div>
          <div>
            <label>Location:</label>
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} required />
          </div>
          <button type="submit">Generate Certificate</button>
        </form>
      ) : (
        <div className="certificate-display">
          <h2>💍 Marriage Certificate 💍</h2>
          <p>This is to certify that</p>
          <h3>{partner1} &amp; {partner2}</h3>
          <p>were joyfully united in fun matrimony</p>
          <p>on <b>{date}</b> at <b>{location}</b>.</p>
          <p>May your days be filled with laughter and love!</p>
          <button onClick={handleReset}>Create Another</button>
        </div>
      )}
    </div>
  );
}

export default App;
