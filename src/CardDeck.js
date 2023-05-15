import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const CardDeck = () => {
  const [deckId, setDeckId] = useState("");
  const cardURL = "https://deckofcardsapi.com/api/deck";

  useEffect(() => {
    async function requestDeck() {
      const res = await axios.get(`${cardURL}/new`);
      setDeckId(res.data.deck_id);
    }
    requestDeck();
  }, []);

  console.log(deckId);

  return (
    <div>
      <h1>Card Deck</h1>
      <p>{deckId}</p>
    </div>
  );
};

export default CardDeck;
