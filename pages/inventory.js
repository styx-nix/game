import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Inventory() {
  const [inventory, setInventory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch user's inventory from local storage
    const storedInventory = JSON.parse(localStorage.getItem('inventory')) || [];
    setInventory(storedInventory);
  }, []);

  return (
    <div className="inventory-container">
      <h1>Your Inventory</h1>
      <div className="inventory-grid">
        {Array(30).fill(null).map((_, index) => (
          <div key={index} className="inventory-slot">
            {inventory[index] ? <p>{inventory[index]}</p> : <p>Empty Slot</p>}
          </div>
        ))}
      </div>
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
  );
}

