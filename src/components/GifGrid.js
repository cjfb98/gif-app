import React, { useEffect, useState } from 'react'
import { GifGridItem } from './gifGridItem'
import { useFetchGif } from '../hooks/useFetchGift'

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGif(category)

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((a) => {
          return <GifGridItem key={a.id} {...a} />
        })}
      </div>
    </>
  )
}
