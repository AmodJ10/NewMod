import React, { Component } from 'react';

class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, url, author, time } = this.props
        return (
            <div >
                <div className="card"        >
                    <img src={!imgUrl ? "https://images.moneycontrol.com/static-mcnews/2022/11/fraudster.jpg" : imgUrl} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title" >{title}...</h5>
                        <ul>
                            <li> <p className="card-text my-2">{description}...</p></li>
                            <li> <p className="card-text my-2"><small className="text-muted">By {author} on {time}</small></p></li>
                        </ul>
                        <a href={url} target="_blank" className="btn btn-sm  btn-outline-success" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
