import React from 'react';
import Header from './components/Header';
import Newslist from './components/Newslist';
import { newsCategory } from './news';

const fakeNews = [
  {
    title: 'Title',
    content: 'Content',
    url: 'https://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'published date and time',
    source: {
      name: 'CNN',
    },
  },
  {
    title: 'Title',
    content: 'Content',
    url: 'https://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'published date and time',
    source: {
      name: 'CNN',
    },
  }
]

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header category={newsCategory.technology}/>
        <Newslist news={fakeNews} />
      </div>
    );
  }
}

export default App;
