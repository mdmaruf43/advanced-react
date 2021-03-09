import React, { Component } from 'react'

class DataFound extends Component {
    render() {
        const {
            totalPage,
            totalResults,
            currentPage,
        } = this.props
        return (
            <div className='d-flex'>
                <p className='text-black-50'>
                    About {totalResults} results found
                </p>
                <p className='text-black-50 ml-auto'>
                    {currentPage} page of {totalPage}
                </p>
            </div>
        )
    }
}

export default DataFound
