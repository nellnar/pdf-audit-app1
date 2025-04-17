import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import PdfUploader from './components/PdfUploader';
export default function App() {
  const [selectedSet, setSelectedSet] = useState('default');
  const [autoSelectEnabled, setAutoSelectEnabled] = useState(true);
  const [autoSelectedSet, setAutoSelectedSet] = useState(null);
  const [naChecklistSets, setNaChecklistSets] = useState({ default: ['15', '44'] });
  const [newSetName, setNewSetName] = useState('');
  const [newNaItem, setNewNaItem] = useState('');

  const user = { uid: 'demo-user-id' };
  const selectedAudit = { filename: 'Forklift_Safety_Inspection.pdf' };

  useEffect(() => {
    const fetchNaSets = async () => {
      if (user) {
        const ref = doc(db, 'naChecklists', user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) setNaChecklistSets(snap.data());
      }
    };
    fetchNaSets();
  }, [user]);

  useEffect(() => {
    if (user) {
      const ref = doc(db, 'naChecklists', user.uid);
      setDoc(ref, naChecklistSets);
    }
  }, [naChecklistSets]);

  useEffect(() => {
    if (selectedAudit && autoSelectEnabled) {
      const key = Object.keys(naChecklistSets).find(set =>
        selectedAudit.filename.toLowerCase().includes(set.toLowerCase())
      );
      if (key) {
        setSelectedSet(key);
        setAutoSelectedSet(key);
      }
    }
  }, [selectedAudit, autoSelectEnabled]);

  const naChecklist = naChecklistSets[selectedSet] || [];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🧾 N/A Checklist Manager</h1>
<PdfUploader onFileSelect={(file) => console.log("PDF selected:", file)} />
      <div className="mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={autoSelectEnabled}
            onChange={() => setAutoSelectEnabled(!autoSelectEnabled)}
          />
          <span className="text-sm">Enable auto-select checklist based on filename</span>
        </label>
        <div className="text-xs text-gray-600 mt-1">
          <p>
            Currently applied set: <strong>{selectedSet}</strong>
          </p>
          {autoSelectedSet && autoSelectEnabled && (
            <p>
              Last auto-detected set: <strong>{autoSelectedSet}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
<PdfUploader onFileSelect={(file) => console.log("PDF selected:", file)} />




