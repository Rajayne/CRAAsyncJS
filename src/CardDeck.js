import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./CardDeck.css";

const CardDeck = () => {
  const cardURL = "https://deckofcardsapi.com/api/deck";
  const [deckId, setDeckId] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function requestDeck() {
      const res = await axios.get(`${cardURL}/new`);
      setDeckId(res.data.deck_id);
    }
    requestDeck();
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    const res = await axios.get(`${cardURL}/${deckId}/draw`);
    console.log(res.data.cards[0].image);
    setCards([...cards, res.data.cards[0].image]);
  }

  return (
    <div className="CardDeck">
      <h1 className="CardDeck-Header">Card Deck</h1>
      <p>{deckId}</p>
      {deckId !== "" ? (
        <button className="CardDeck-button" onClick={handleClick}>
          Draw a Card!
        </button>
      ) : (
        <h1>"Loading..."</h1>
      )}
      <div className="CardDeck-Cardwrapper">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardDeck;
