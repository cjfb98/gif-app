import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
  // const categories = ['One punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['One piece'])
  // const handleApp = (a) => {
  //   setCategories([...categories, 'Frieren'])
  // }
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((a) => (
          <GifGrid key={a} category={a} />
        ))}
      </ol>
    </div>
  )
}

export { GifExpertApp }
