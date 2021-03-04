import React, { Component } from 'react'

class DataFound extends Component {
    render() {
        return (
            <div className='d-flex'>
                <p className='text-black-50'>
                    About {0} results found
                </p>
                <p className='text-black-50 ml-auto'>
                    {1} page of {100}
                </p>
            </div>
        )
    }
}

export default DataFound
