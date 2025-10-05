import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CardsDetails = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await axios.get("http://localhost:5000/cards"); 
                console.log("Fetched cards:", res.data);
                setCards(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchCards();
    }, []);

    if (loading) return <p className="text-white p-10">Loading cards...</p>;

    return (
        <div className="max-w-7xl mx-auto px-5 py-16 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) =>
                index < 4 ? (
                    <Link key={card._id} to={`/cards/${card._id}`}>
                        <Card
                            title={card.title}
                            description={card.description1 || card.heading}
                            imageUrl={card.imageUrl}
                            hoverText={card.hoverText}
                        />
                    </Link>
                ) : (
                    <Card
                        key={card._id}
                        title={card.title}
                        description={card.description1 || card.heading}
                        imageUrl={card.imageUrl}
                        hoverText={card.hoverText}
                    />
                )
            )}
        </div>
    );
};

export default CardsDetails;
