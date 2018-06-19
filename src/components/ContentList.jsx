import React from "react";
import dataJSON from './db.json';
import NewsList from "./news_list.js";

class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered : dataJSON ,
      news: dataJSON

    };
   
  }
  filterNews(keywords){
    const key = keywords.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(key) > -1;
    })
    this.setState({filtered:filtered})
  }
  render() {
    return (
      <div className="content-list">
        <h2>ContentList</h2>
        <h3>Search</h3>
        <input type="text" onChange={this.filterNews.bind(this)} />
        <br/>
        <br/>
        <div className="newslist">
        < NewsList news={this.state.filtered} /></div>
      </div>
    );
  }
}

export default ContentList;