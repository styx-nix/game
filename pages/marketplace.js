// /pages/marketplace.js
import { useState, useEffect } from 'react';

export default function Marketplace() {
  const [cardsForSale, setCardsForSale] = useState([]);

  useEffect(() => {
    // Fetch cards from API or localStorage
    const mockMarketplaceCards = [
      { id: 1, name: 'Card A', price: 10, image: '/path/to/cardA.jpg' },
      { id: 2, name: 'Card B', price: 20, image: '/path/to/cardB.jpg' },
      // Add more mock cards
    ];
    setCardsForSale(mockMarketplaceCards);
  }, []);

  const buyCard = (cardId) => {
    // Implement the logic for buying a card and adding it to inventory
    alert(`You bought card with ID: ${cardId}`);
  };

  return (
    <div className="marketplace-container">
      <h1>Marketplace</h1>
      <div className="marketplace-grid">
        {cardsForSale.map((card) => (
          <div key={card.id} className="marketplace-card">
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>
            <p>Price: {card.price} Coins</p>
            <button onClick={() => buyCard(card.id)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}
