import React from 'react'
import { Vote } from '../../../../components/Vote'
import './style-info.scss'
export const Info = ({ title, overview, genres, releaseDate, vote }) => {
  return (
    <div className="detail-info">
      <div className="detail-info__title">
        <h2>{title} { releaseDate && `(${releaseDate.split('-')[0]})`}</h2>
        <div className="detail-info__genre">
          {genres.map((d, index) => {
            return (
              <span key={index}>{d.name}</span>
            )
          })}
        </div>
        <div style={{ width: 'max-content', margin: '10px' }}>
          <Vote vote={vote}></Vote>
        </div>
      </div>
      <div className="detail-info__res">
        <h4 >Resumen</h4>
        <p className="detail-info__overview">{overview}</p>
      </div>
    </div>
  )
}