import React, { Component } from 'react';
import TravelCard from './TravelCard'

class Travel extends Component {

    state = {
        travelArticles: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/travels')
          .then(response => response.json())
          .then(travelArticles => this.setState({ 
              travelArticles: travelArticles 
        }))
    }

    render() {
        const { travelArticles } = this.state;
        const { article, handleArticleUpdate } = this.props;

        return (
            <div>
                {/* <h1>from the Verge...</h1> */}
            <select 
              className='inputField'
              onChange={(e) => {
                e.preventDefault();
                const selectedIndex = e.target.options.selectedIndex;
                const articleId = e.target.options[selectedIndex].getAttribute('data-ids');
                handleArticleUpdate(articleId, e.target.value)
              }
            }>
            <option>Select...</option>
                {
                travelArticles.map((article, i) => 
                    (<option key={i} data-ids={article.id}>{article.title}</option>))}
            </select>
            <h3>Featured Headlines from BBC Travel</h3>
                {/* {
                travelArticles.map(article => (
                    (article.title) ? (<h2 className='subtitle'><strong>{article.author}</strong></h2>) : (<p></p>)
                ))} */}
            {
              travelArticles.map((article, i) => (
                <TravelCard 
                  key={i}
                  title={article.title}
                  summary={article.summary}
                  url={article.url}
                />
              ))
            }
          </div>
        )
    }
}

export default Travel;