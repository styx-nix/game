export default function handler(req, res) {
  const cards = ['Card A', 'Card B', 'Card C', 'Card D'];
  res.status(200).json(cards);
}

