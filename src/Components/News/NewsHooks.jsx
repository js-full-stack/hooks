import axios from 'axios';
import { useState, useEffect } from 'react';
export default function NewsHooks() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  axios.defaults.baseURL = 'https://hn.algolia.com';
  const url = '/api/v1/search?query=react';

  // *
  // !Aboart controller
  // const controller = new AbortController();
  // const signal = controller.signal;
  // !Cancel Token
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  // *

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, { cancelToken: source.token })
      .then(({ data }) => setArticles(data.hits))
      .catch(error => setError(error))
      .finally(() => setLoading(false));

    return () => {
      axios.get(url, { cancelToken: source.token });
    };
  }, []);

  return (
    <ul>
      {articles.map(({ title, url }) => (
        <li key={title}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
