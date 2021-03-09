import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        isEditable: false,
    }
    render() {
        const {
            currentPage,
            totalPage,
            next, 
            prev,
            isPrevious,
            isNext,
            handlePageChange,
            goToPage,
        } = this.props;
        return (
            <div className='d-flex align-items-center my-5'>
                <button 
                    className='btn btn-warning' 
                    onClick={() => {
                        prev();
                    }} 
                    disabled={!isPrevious}
                >
                        Previous
                </button>
                <div className="flex-grow-1 text-center">
                    {
                        this.state.isEditable ? (
                            <input 
                                type="number" 
                                value={currentPage}
                                onChange={e => handlePageChange(e.target.value)}
                                onKeyPress={(e) => {
                                    if(e.key === 'Enter') {
                                        this.setState({isEditable: false})
                                        goToPage();
                                    }
                                }}
                            />
                        ) : (
                            <p
                                style={{
                                    userSelect: 'none',
                                    lineHeight: '1.1',
                                }}
                                title='Double Tap to Jump Page'
                                onDoubleClick={() => {
                                    this.setState({isEditable: !this.state.isEditable})
                                }}
                            >
                                {currentPage} of {totalPage}
                                <br/>
                                <small>Double Tap to Edit</small>
                            </p>
                        )
                    }
                </div>
                <button 
                    className='btn btn-warning ml-auto'
                    disabled={!isNext}
                    onClick={() => {
                        next();
                    }}
                >
                    Next
                </button>
            </div>
        )
    }
}

export default Pagination
