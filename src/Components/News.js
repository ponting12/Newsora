import React, { Component } from 'react'
import NewsItems from './NewsItems';
export class News extends Component {
  render() {
    return (
      <div className='container my-4'>
        <h2>Newsora - Top Headlines </h2> 
        <div className='row'>
          <div className='col-md-4'>
            <NewsItems title="myTitle" description="mydesc"/>
          </div>
          <div className='col-md-4'>
            <NewsItems title="myTitle" description="mydesc"/>
          </div>
          <div className='col-md-4 '>
            <NewsItems title="myTitle" description="mydesc"/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default News;
