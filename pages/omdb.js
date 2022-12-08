import { useState, useEffect } from "react"
import Head from 'next/head'
import Image from "next/image"
import Layout from '../components/layout'
import LoadingGif from "../public/img/loading.gif"

export default function Home() {

  const [moviesData, setMoviesData] = useState(null)
  const [movieDetail, setMovieDetail] = useState(null)
  const [isLoadingMovies, setIsLoadingMovies] = useState(false)
  const [isLoadingMovieDetail, setIsLoadingMovieDetail] = useState(false)

  async function fetchMovies(e) {
    e.preventDefault()
    setMoviesData(null)
    setIsLoadingMovies(true)

    const data = {
      form_search_movie: e.target.form_search_movie.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = 'api/omdb/search'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()
    if (result.Response == "False") {
      setMoviesData('No Movies Found!')
    } else {
      setMoviesData(result.Search)
    }
    setIsLoadingMovies(false)
  }
  
  async function fetchMovieDetail(e) {
    e.preventDefault()
    setMovieDetail(null)
    setIsLoadingMovieDetail(true)

    const imdbID = e.target.dataset.movie_id
    const endpoint = `api/omdb/detail/${imdbID}`

    const response = await fetch(endpoint)
    const result = await response.json()

    setMovieDetail(result)
    setIsLoadingMovieDetail(false)
  }

  return (
    <Layout activeNav="omdb">
      <Head>
        <title>omdb</title>
      </Head>
      <div className="container">
        <h1 className="text-center my-3">Movies</h1>
        <div className="row my-3 justify-content-center">
          <div className="col-md-10">
            <form onSubmit={fetchMovies}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search Your Movie Here..." name="form_search_movie"/>
                <button className="btn btn-primary" type="submit" id="btn-search-movie">Search</button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="row" id="content">
          { isLoadingMovies ? <div className="d-flex"><Image className="mx-auto" src={LoadingGif} alt="Loading" width={50}/></div> : null }
          { (!moviesData || moviesData === 'No Movies Found!' ) ? <div className="d-flex"><h1 className="mx-auto">{moviesData}</h1></div> : 
            moviesData.map((movie) => (
              <div className="col-md-3 my-3" key={movie.imdbID}>
                <div className="card">
                    <img src={movie.Poster} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{`${movie.Title} (${movie.Year})`}</h5>
                        <div className="row justify-content-center">
                            <div className="col-md-10 my-3 text-center">
                                <button
                                  onClick={fetchMovieDetail}
                                  type="button"
                                  id="btn-movie-detail"
                                  className="btn btn-primary w-100"
                                  data-bs-toggle="modal"
                                  data-bs-target="#MovieDetailModal"
                                  data-movie_id={movie.imdbID}>
                                    See Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))
          }
        </div>
      </div>

      {/* MODAL */}
      <div className="modal modal-lg fade" id="MovieDetailModal" tabIndex="-1" aria-labelledby="MovieDetailModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Movie Detail</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    { isLoadingMovieDetail ? <div className="d-flex"><Image className="mx-auto" src={LoadingGif} alt="Loading" width={50}/></div> : null }
                    { !movieDetail ? null : 
                      <>
                        <div className="row justify-content-center">
                            <div className="col-md-12 text-center">
                                <img src={movieDetail.Poster}/>
                            </div>
                        </div>
                        <div className="text-center my-3">
                            Title : {movieDetail.Title} <br/>
                            Year : {movieDetail.Year} <br/>
                            Rated : {movieDetail.Rated} <br/>
                            Released : {movieDetail.Released} <br/>
                            Runtime : {movieDetail.Runtime} <br/>
                            Genre : {movieDetail.Genre} <br/>
                            Director : {movieDetail.Director} <br/>
                            Writer : {movieDetail.Writer} <br/>
                            <p className="my-3">
                            {movieDetail.Plot}
                            </p>
                        </div>
                      </>
                    }
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  );
}
