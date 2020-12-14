import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import './style-movie.scss'

export const Movie = ({ data }) => {
  const url = getUrlImage(200, data.poster_path) || imageDefault
  console.log(url)
  return (
    <div className="movie-page-s">
      <img src={url} heigth="150px" width="100px"></img>
      <div className="movie-page-s__info">
        <h4>{data.title}</h4>
        <h5>{data.release_date}</h5>
      </div>
    </div>
  )
}
