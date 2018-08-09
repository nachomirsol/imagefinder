import React, { Component } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import './App.css';

class App extends Component {

  state = {
    query:'',
    images:[],
    page:'',
    loading:false
  }

  fetchApi = async () => {
    const query = this.state.query;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=281601-6b76e6ea76d05e411688e3d48&q=${query}&per_page=30&page=${page}`;
    await fetch(url)
      .then(res => {
        this.setState({
          loading:true
        });
        return res.json()
      })
      .then(result => {
        setTimeout(() =>{
          this.setState({
            images:result.hits,
            loading:false
          })
        },1000);
        
      })
  }

  dataSearch = (query) => {
    this.setState({
      query:query,
      page: 1
    },() => {
      this.fetchApi();
    })
  }


  prevPage = () => {
    let page = this.state.page;
    if(page === 1) return null
    page -= 1;
    this.setState({
      page
    },() => {
      this.fetchApi();
      this.scroll();
    });

    
  }

  nextPage = () => {
    let page = this.state.page;
    page += 1;
    this.setState({
      page
    },() => {
      this.fetchApi();
      this.scroll();
    });
    
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth','start');
  }

  render() {
    const loading = this.state.loading;
    let result; 

    if(loading){
      result = <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
    }else{
      result = <Result
                  images = {this.state.images}
                  prevPage = {this.prevPage}
                  nextPage = {this.nextPage}
                />
    }
    return (
      <div className="App">
        <div className ="jumbotron">
          <p className ="lead text-center">Search for an image...</p>
          <Search 
            dataSearch = {this.dataSearch}
          />
        </div>

        <div className ="row justify-content-center">
          {result}

        </div>
        
      </div>

    );
  }
}

export default App;
