import { Component } from 'react';
// import NewsSearchForm from './NewsSearchForm';
import axios from 'axios';
export default class NewsClasses extends Component {
  state = {
    articles: [],
    // currentPage: 1,
    // searchQuery: '',
    // isLoading: false,
    error: null,
  };

  componentDidMount() {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(({ data }) => this.setState({ articles: data.hits }))
      .catch(error => {
        console.log(error);
      });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     this.fetchArticles();
  //   }
  // }

  // onChangeQuery = query => {
  //   this.setState({
  //     searchQuery: query,
  //     currentPage: 1,
  //     articles: [],
  //     error: null,
  //   });
  // };

  // fetchArticles = () => {
  //   const { currentPage, searchQuery } = this.state;
  //   const options = { searchQuery, currentPage };

  //   this.setState({ isLoading: true });

  //   fetchArticles(options)
  //     .then(articles => {
  //       this.setState(prevState => ({
  //         articles: [...prevState.articles, ...articles],
  //         currentPage: prevState.currentPage + 1,
  //       }));
  //     })
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  render() {
    // const { articles, isLoading, error } = this.state;
    // const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

    return (
      <div>
        {/* {error && <h1>Ой ошибка, всё пропало!!!</h1>} */}

        {/* <NewsSearchForm onSubmit={this.onChangeQuery} /> */}

        <ul>
          {this.state.articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>

        {/* {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchArticles}>
            Загрузить ещё
          </button>
        )} */}

        {/* {isLoading && (
          <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
            Загружаем...
            <span
              aria-label="Иконка"
              role="img"
              style={{ fontSize: 32, marginLeft: 10 }}
            >
              🧙‍♂️
            </span>
          </p>
        )} */}
      </div>
    );
  }
}
