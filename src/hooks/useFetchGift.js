import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'

export const useFetchGif = (category) => {
  const [state, setstate] = useState({ data: [], loading: true })
  useEffect(() => {
    getGif(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      })
    })
  }, [category])
  return state
}
