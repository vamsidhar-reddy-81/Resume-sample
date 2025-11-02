import { useEffect, useState } from 'react';

const useRealtime = (userInput) => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userInput) return;

        const fetchSuggestions = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/suggestions?input=${encodeURIComponent(userInput)}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch suggestions');
                }
                const data = await response.json();
                setSuggestions(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const debounceFetch = setTimeout(fetchSuggestions, 300);

        return () => clearTimeout(debounceFetch);
    }, [userInput]);

    return { suggestions, loading, error };
};

export default useRealtime;