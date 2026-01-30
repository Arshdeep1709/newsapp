
import React, { Component } from 'react'
import SubNews from './SubNews'

export class News extends Component {
  render() {
    return (
      <>
      <div className="container my-4">
        <h2>NewsApp - Top headlines</h2>
        <div className="row">
            <div className="col-md-5 mb-5 mx-5">
        <SubNews title = "Title" description = "description" imgUrl = "https://i-invdn-com.investing.com/news/world_news_2_108x81.jpg"/>
        </div>
        <div className="col-md-2 mb-2 mx-2">
        <SubNews title = "Title" description = "description" imgUrl = "https://i-invdn-com.investing.com/news/world_news_2_108x81.jpg"/>
        </div>
        <div className="col-md-2 mb-2 mx-2">
        <SubNews title = "Title" description = "description" imgUrl = "https://i-invdn-com.investing.com/news/world_news_2_108x81.jpg"/>
        </div>
        <div className="col-md-2 mb-2 mx-2">
        <SubNews title = "Title" description = "description"/>
        </div>
        <div className="col-md-2 mb-2 mx-2">
        <SubNews title = "Title" description = "description"/>
        </div>
        <div className="col-md-2 mb-2 mx-2">
        <SubNews title = "Title" description = "description"/>
        </div>
        <div className="col-md-2 mb-2 mx-2">
        <SubNews title = "Title" description = "description"/>
        </div>
        </div>
        </div>
      </>
    )
  }
}

export default News
