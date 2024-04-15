import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ text: "", author: "" })

    useEffect(() => { //처음 시작시 렌더링하고 다시 렌더링 하지 않는다.
        fetchQuote();
    }, [])

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return (
        <div>
            <button onClick={fetchQuote}>Get quote Using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}