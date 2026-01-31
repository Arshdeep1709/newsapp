
import React, { Component } from 'react'

export class SubNews extends Component {
  render() {
    let {title,description,imgUrl,unqId} = this.props
    return (
      <>
      <div className="card" style={{width: "15rem"}}>
  <img src= {imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={unqId} target='_blank' className="btn btn-primary">Read more</a>
  </div>
</div>
      </>
    )
  }
}

export default SubNews
