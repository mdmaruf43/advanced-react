import React, { Component } from 'react';
import {newsCategory} from '../news';

class Header extends Component {
    state = {
        searchItem: '',
    }

    handleChange = e => {
        this.setState({ searchItem: e.target.value });
    }

    hadleKeyPress = e => {
        if(e.key === 'Enter') {
            this.props.search(this.state.searchItem);
        }
    }
    render() {
        const {category, changeCategory} = this.props;
        return (
            <div className="my-4">
                <h1 className="mb-4" style={{fontWeight: '300'}}>
                    Block Buster Headlines
                </h1>
                <input 
                    type="search"
                    className="form-control"
                    placeholder="Type Anything & Press Enter To Search"
                    value={this.state.searchItem}
                    onChange={this.handleChange}
                    onKeyPress={this.hadleKeyPress}
                />
                <div className="my-4">
                    {
                        newsCategory && 
                            Object.keys(newsCategory).map((item) => {
                                if (category === newsCategory[item]) {
                                    return (
                                        <button onClick={() => changeCategory(newsCategory[item])} className="btn btn-sm btn-warning mr-2 mb-2">
                                            {`#${newsCategory[item]}`}
                                        </button>
                                    )
                                }
                                return (
                                    <button onClick={() => changeCategory(newsCategory[item])} className="btn btn-sm btn-light mr-2 mb-2">
                                        {`#${newsCategory[item]}`}
                                    </button>
                                )
                                // category === newsCategory[item] ?
                                // <div>
                                //     <button className="btn btn-sm btn-warning mr-2 mb-2">
                                //     {`#${newsCategory[item]}`}
                                //     </button>
                                // </div>
                                // :
                                
                                // <div>
                                //     <button className="btn btn-sm btn-light mr-2 mb-2">
                                //         {`#${newsCategory[item]}`}
                                //     </button>
                                // </div>
                                

                            })
                    }
                </div>
            </div>
        )
    }
}

export default Header
