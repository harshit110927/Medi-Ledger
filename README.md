# MediLedger – Blockchain-Based Medical Report Verification System

MediLedger is a blockchain-powered system that ensures medical reports are tamper-proof, verifiable, and securely recorded.

## 🛠️ Tech Stack
- Node.js + Express.js
- Custom Blockchain in JavaScript (with SHA256 + Proof of Work)
- HTML + CSS + JavaScript for frontend

## 📁 Project Structure
```
MediLedger/
├── blockchain/         # Block and Blockchain classes
├── routes/             # Express routes (API endpoints)
├── public/             # HTML, CSS, JS frontend
├── server.js           # Entry point for Express server
└── README.md           # This file
```

## 🚀 How to Run the Project

### 1. Clone or unzip the project

### 2. Install dependencies
```bash
npm install
```

### 3. Run the server
```bash
node server.js
```
Server will run at: `http://localhost:3000`

### 4. Open the UI
Open `public/index.html` in your browser. Use it to:
- Submit a medical report (hash stored in blockchain)
- Verify an existing report by ID

---

## 📌 API Endpoints
- `POST /addReport` → Add a new report block
- `GET /verifyReport/:id` → Verify report by report ID
- `GET /chain` → View full blockchain

## 👨‍⚕️ Sample Report Format (stored in block)
```json
{
  "reportID": "MED-2025-001",
  "patientName": "John Doe",
  "type": "Blood Test",
  "date": "2025-04-21"
}
```

## 📦 Extras
- Proof-of-Work ensures block integrity
- Hash-based verification
- Tamper-detection included
