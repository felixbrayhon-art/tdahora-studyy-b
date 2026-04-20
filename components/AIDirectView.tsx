import React, { useState } from 'react';

const AIDirectView = () => {
    const [input, setInput] = useState('');
    const [responses, setResponses] = useState([]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!input) return;
        const reply = await getAIResponse(input);
        setResponses([...responses, { question: input, answer: reply }]);
        setInput('');
    };

    const getAIResponse = async (query) => {
        // Simulated API call to Gemini AI. Replace with actual API call.
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Response to: ${query}`);
            }, 1000);
        });
    };

    return (
        <div>
            <h1>Talk to Gemini AI</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask a question..."
                />
                <button type="submit">Send</button>
            </form>
            <div>
                {responses.map((response, index) => (
                    <div key={index}>
                        <p><strong>Q:</strong> {response.question}</p>
                        <p><strong>A:</strong> {response.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIDirectView;