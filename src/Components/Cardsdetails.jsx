import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../context/Context';
import cards from '../data/CardData';

const CardsDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams(); // get the card ID from URL

    // ye check krega ki card ki id selected card se match ho rhi he kya
    const card = cards.find((c) => c.id === parseInt(id))  //here parseint is use because useparems will show id in string

    const { isDarkMode } = useContext(DarkModeContext)

    // Handle case where card is not found
    if (!card) {
        return (
            <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${isDarkMode ? 'bg-black text-amber-50' : 'bg-gray-100 text-black'
                }`}>
                <h1 className="text-3xl font-bold mb-4">Card Not Found</h1>
                <p className="text-lg mb-6">The card you're looking for doesn't exist.</p>
                <button
                    onClick={() => navigate('/')}
                    className={`px-6 py-2 rounded transition-colors ${isDarkMode
                            ? 'bg-amber-600 hover:bg-amber-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${isDarkMode ? 'bg-black text-amber-50' : 'bg-gray-100 text-black'
            }`}>
            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                className={`self-start mb-6 px-4 py-2 rounded transition-colors ${isDarkMode
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
            >
                ← Back to Cards
            </button>

            {/* Card Details */}
            <div className={`p-8 rounded-lg shadow-lg w-full max-w-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                {/* Card Image */}
                <div className="flex justify-center mb-6">
                    <img
                        src={card.img}
                        alt={card.title}
                        className="w-64 h-64 object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Card Info */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">{card.title}</h1>
                    <p className="text-lg mb-6 opacity-80">{card.description}</p>
                    <p className="text-base leading-relaxed mb-6">{card.fullDescription}</p>

                    {/* Additional Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <h3 className="font-semibold mb-1">Genre</h3>
                            <p className="text-sm opacity-80">{card.genre}</p>
                        </div>
                        <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <h3 className="font-semibold mb-1">Release Date</h3>
                            <p className="text-sm opacity-80">{card.releaseDate}</p>
                        </div>
                        <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <h3 className="font-semibold mb-1">Duration</h3>
                            <p className="text-sm opacity-80">{card.duration}</p>
                        </div>
                    </div>
                </div>

                {/* Card ID Info */}
                <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
                    <div className="text-center text-sm opacity-70">
                        <span>Card ID: {card.id}</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardsDetails;

// YOU HAVE TO MAKE NAVBAR AND MUSICBAR TO SHOW WITH CARD MAKE OUTLET COMPONENT AND CHANGE ROUTE PATH
