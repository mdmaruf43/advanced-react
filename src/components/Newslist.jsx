import React from 'react'

const NewsItem = ({item}) => {
    return (
        <div className="card mb-4">
            {item.urlToImage && (
                <img 
                    className="card-img-top"
                    src={item.urlToImage} 
                    alt={item.title}
                />
            )}
            <div className="card-body">
                <a 
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: '#424242'}}
                >
                    <h5 className='card-title'>{item.title}</h5>
                </a>
            </div>
        </div>
    )
    
}

const Newslist = ({news}) => {
    return (
        <div>
            {news && news.length === 0 && <h4>There is no News</h4>}
            {news && news.map(item => <NewsItem key={item.title} item={item} />)}
        </div>
    )
}

export default Newslist
