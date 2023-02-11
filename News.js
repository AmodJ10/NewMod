import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pagesize: 12
    }

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false,
        }
    }
    handleLeft = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93bfc42c90f44132b5e8219b0d21bb20&pagesize=${this.props.pagesize}&page=${this.state.page - 1}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        console.log("LeftBtn")
    }
    handleRight = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93bfc42c90f44132b5e8219b0d21bb20&pagesize=${this.props.pagesize}&page=${this.state.page + 1}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93bfc42c90f44132b5e8219b0d21bb20&pagesize=${this.props.pagesize}&page=${this.state.page}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,

            loading: false
        })
    }
    render() {
        return (
            <div>
                <div className='container my-3 ' >
                    <h1 className='text-center'><strong>NewsMod Presents</strong></h1>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title} description={!element.description ? 'No Description' : element.description} imgUrl={element.urlToImage} url={element.url} author={!element.author ? 'Unknown' : element.author} time={new Date(element.publishedAt).toGMTString()} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-outline-success" onClick={this.handleLeft}>&larr; Previous</button>
                        <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pagesize)} className="btn btn-outline-success" onClick={this.handleRight}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
