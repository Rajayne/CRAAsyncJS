import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./CardDeck.css";

const CardDeck = () => {
  const cardURL = "https://deckofcardsapi.com/api/deck";
  const [deck, setDeck] = useState("");
  const [cards, setCards] = useState([]);
  const [remaining, setRemaining] = useState(52);

  useEffect(() => {
    async function requestDeck() {
      const res = await axios.get(`${cardURL}/new/shuffle`);
      setDeck(res.data);
    }
    requestDeck();
  }, []);

  async function drawCard(e) {
    e.preventDefault();
    const res = await axios.get(`${cardURL}/${deck.deck_id}/draw`);
    setRemaining((remaining) => remaining - 1);
    setCards([...cards, res.data.cards[0].image]);
  }

  async function resetDeck(e) {
    e.preventDefault();
    await axios.get(`${cardURL}/${deck.deck_id}/shuffle/`);
    setCards([]);
    setRemaining(52);
    alert("Deck Reset!");
  }

  return (
    <div className="CardDeck">
      <h1 className="CardDeck-Header">Card Deck</h1>
      <p>{remaining}</p>
      {remaining !== 0 ? (
        <button className="CardDeck-button" onClick={drawCard}>
          Draw a Card!
        </button>
      ) : (
        ""
      )}
      <button onClick={resetDeck}>Reset Deck!</button>
      <div className="CardDeck-Cardwrapper">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardDeck;
