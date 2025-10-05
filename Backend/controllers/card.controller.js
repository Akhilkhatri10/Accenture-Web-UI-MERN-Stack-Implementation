import { Card } from "../models/card.model.js";

// Get all cards
export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({});  
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  } 
};

// Get single card by ID
export const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.json(card);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
