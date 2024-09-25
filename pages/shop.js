import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Shop() {
  const [cards] = useState(['Card A', 'Card B', 'Card C', 'Card D']);
  const router = useRouter();

  const buyPack = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    // Retrieve current inventory or start with empty slots
    const currentInventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const newInventory = [...currentInventory, randomCard].slice(0, 30); // Limit to 30 cards

    // Save new inventory
    localStorage.setItem('inventory', JSON.stringify(newInventory));
    alert(`You received: ${randomCard}`);
  };

  return (
    <div className="shop-container">
      <h1>Welcome to the Shop</h1>
      <button onClick={buyPack}>Buy Free Pack</button>
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
  );
}

