import React from 'react';
import DataFound from './components/DataFound';
import Header from './components/Header';
import Loading from './components/Loading';
import Newslist from './components/Newslist';
import Pagination from './components/Pagination';
import News, { newsCategory } from './news';
// import Lifecycle from './components/Lifecycle';

// const fakeNews = [
//   {
//     title: 'Title',
//     content: 'Content',
//     url: 'https://linktonews.com',
//     urlToImage: 'https://linktoimage.com',
//     publishedAt: 'published date and time',
//     source: {
//       name: 'CNN',
//     },
//   },
//   {
//     title: 'Title',
//     content: 'Content',
//     url: 'https://linktonews.com',
//     urlToImage: 'https://linktoimage.com',
//     publishedAt: 'published date and time',
//     source: {
//       name: 'CNN',
//     },
//   }
// ]

//8600e22e97a24deebde523aff55e902a

// const URL = 'https://jsonplaceholder.typicode.com/users';
// axios.get(URL).then((res) => {
//   console.log(res);
// })

// const user = {
//   name: 'Maruf Ahmed',
//   email: 'maruf@gmail.com',
//   userName: 'Mdmaruf',
// }

// axios.post(URL, user)
//   .then(res => {
//     console.log(res);
//   })

const news = new News(newsCategory.technology);

class App extends React.Component {

  state = {
    data: {},
    isLoading: true,
  }

  componentDidMount() {
    news.getNews()
      .then(data => {
        console.log(data);
        this.setState({data, isLoading: false})
      })
      .catch(e => {
        console.log(e);
        alert('Something Went Wrong');
        this.setState({isLoading: false})
      })
  }

  next = () => {
    if(this.state.data.isNext){
      this.setState({isLoading: true})
    }
    news.next()
      .then(data => {
        this.setState({data, isLoading: false})
      })
      .catch(e => {
        console.log(e);
        alert('Something Went Wrong');
        this.setState({isLoading: false})
      })
  }

  prev = () => {
    if(this.state.data.isPrevious){
      this.setState({isLoading: true})
    }
    news.prev()
      .then(data => {
        this.setState({data, isLoading: false})
      })
      .catch(e => {
        console.log(e);
        alert('Something Went Wrong');
        this.setState({isLoading: false})
      })
  }

  handlePageChange = value => {
    this.setState({
      data: {
        ...this.state.data,
        currentPage: Number.parseInt(value),
      }
    })
  }

  goToPage = () => {
    this.setState({isLoading: true})
    news.setCurrentPage(this.state.data.currentPage)
      .then(data => {
        this.setState({data, isLoading: false})
      })
      .catch(e => {
        console.log(e);
        alert('Something Went Wrong');
        this.setState({isLoading: false})
      })
  }

  changeCategory = category => {
    this.setState({isLoading: true});
    news.changeCategory(category)
      .then(data => {
        this.setState({data, isLoading: false})
      })
      .catch(e => {
        console.log(e);
        alert('Something Went Wrong');
        this.setState({isLoading: false})
      })
  }

  render () {
    const {
      articles,
      isPrevious,
      isNext,
      category,
      totalPage,
      totalResults,
      currentPage,
    } = this.state.data;
    return (
      <div className="container">
        <Header 
          category={category} 
          changeCategory={this.changeCategory}
        />
        <DataFound 
          totalResults={totalResults}
          currentPage={currentPage}
          totalPage={totalPage}
        />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            <Newslist news={articles} />
            <Pagination 
              next={this.next}
              prev={this.prev}
              isPrevious={isPrevious}
              isNext={isNext}
              totalPage={totalPage}
              currentPage={currentPage}
              handlePageChange={this.handlePageChange}
              goToPage={this.goToPage}
            />
          </div>
        )}
        {/* <Lifecycle count={1000} /> */}
      </div>
    );
  }
}

export default App;
