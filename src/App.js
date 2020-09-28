import React from 'react';
import Header from './components/Header';
import { newsCategory } from './news';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header category={newsCategory.technology}/>
      </div>
    );
  }
}

export default App;
