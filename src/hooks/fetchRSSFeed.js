import { useState, useEffect } from 'react';

const useFetchRSSFeed = (url) => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");
        const items = Array.from(xml.querySelectorAll("item")).map(item => ({
          title: item.querySelector("title").textContent,
          link: item.querySelector("link").textContent,
          pubDate: item.querySelector("pubDate").textContent,
          creator: item.querySelector("dc\\:creator") ? item.querySelector("dc\\:creator").textContent : '',
          description: item.querySelector("description").textContent,
        }));
        setFeed(items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [url]);

  return { feed, loading, error };
};

export default useFetchRSSFeed;
