import React from 'react';
import DataFound from './components/DataFound';
import Header from './components/Header';
import Loading from './components/Loading';
import Newslist from './components/Newslist';
import Pagination from './components/Pagination';
import { newsCategory } from './news';
import axios from 'axios';
import Lifecycle from './components/Lifecycle';

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

//8600e22e97a24deebde523aff55e902a

const URL = 'https://jsonplaceholder.typicode.com/users';
axios.get(URL).then((res) => {
  console.log(res);
})

const user = {
  name: 'Maruf Ahmed',
  email: 'maruf@gmail.com',
  userName: 'Mdmaruf',
}

axios.post(URL, user)
  .then(res => {
    console.log(res);
  })

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header category={newsCategory.technology}/>
        <DataFound />
        <Newslist news={fakeNews} />
        <Pagination />
        <Loading />
        <Lifecycle count={1000} />
      </div>
    );
  }
}

export default App;
