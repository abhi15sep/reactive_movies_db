import React, { Component } from 'react'
import Header from './Header'
import {BrowserRouter, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super()
        this.state = {
            tv: [],
            movies: [],
            tvLoading: true,
            movieLoading: true,
        }
        this.end_url = this.end_url.bind(this)
        this.api_key = this.api_key.bind(this)
        this.getPopularTv = this.getPopularTv.bind(this)
        this.getPopularMovies = this.getPopularMovies.bind(this)
    }

    end_url = () => { return "https://api.themoviedb.org/3" }
    api_key = () => { return 'cfe422613b250f702980a3bbf9e90716' }

    componentDidMount(){
        this.getPopularTv();
        this.getPopularMovies();
    }

    getPopularTv = () => {
        fetch(this.end_url() + "/tv/popular?api_key=" + this.api_key() + "&language=en-US&page=1" )
        .then(res => res.json())
        .then(data => this.setState({tv: data, tvLoading: false}))
    }

    getPopularMovies = () => {
        fetch(this.end_url() + "/movie/popular?api_key=" + this.api_key() + "&language=en-US&page=1" )
        .then(res => res.json())
        .then(data => this.setState({movies: data, movieLoading: false}))
    }


  render() {
    let TvData, MoviesData, loading;
    const tvs = this.state.tv;
    const movies = this.state.movies;

    const img_path = "https://image.tmdb.org/t/p/w500/" ;


      if (tvs && tvs.total_results > 0) {

          TvData = <div className="row animated fadeIn ">
              {tvs.results.slice(0, 12).map((tv) => {
                  return (
                      <div className="col s6 m6 l4  " key={tv.id} >                          
                          <Link to={"/tvs/" + tv.id}  >
                              <img className="responsive-img z-depth-3 poster tooltipped" data-tooltip={tv.name} data-position="top"  src={img_path + tv.poster_path} alt={tv.name} />
                          </Link>
                      </div>
                  );
                })
              }
          </div>
      }

      if (movies && movies.total_results > 0) {

        MoviesData = <div className="row animated fadeIn">
            {movies.results.slice(0, 12).map((movie) => {
                return (
                    <div className="col s6 m6 l4 " key={movie.id} >                        
                        <Link to={"movie/" + movie.id} >
                            <img className="responsive-img z-depth-3 poster tooltipped" data-tooltip={movie.name} data-position="top"  src={img_path + movie.poster_path} alt={movie.name} />
                        </Link>
                    </div>
                );
              })
            }
        </div>
    }

    loading = <div className="progress">
                <div className="indeterminate"></div>
            </div>

    return (
      <div>
          <BrowserRouter basename="rubicon/content"/>
        <Header />
        <div className="container" >
            <div className="row ">
                <div className="col s12 m6 l6">
                    <div className="section">
                        <Link to="/tv" className="waves-effect waves-light  btn-small tooltipped" data-tooltip="Popular Tv" data-position="right" > <i className="material-icons left">tv</i> On Tv</Link>
                    </div>                
                    {this.state.tvLoading ? loading : TvData}                    
                </div>
                <div className=" col s12 m6 l6 ">

                    <div className="section">
                        <Link to="/movies" className="waves-effect waves-light btn-small tooltipped" data-tooltip="Popular Movies" data-position="right" > <i className="material-icons left">theaters</i> In Theatre</Link>
                    </div>
                    {this.state.movieLoading ? loading : MoviesData}                                                        
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home