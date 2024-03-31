export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=edpUj3bEu2VxUJP2rlnWEDCl6TFnuhB7`

  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = await data.map((a) => {
    return {
      id: a.id,
      title: a.title,
      url: a.images?.downsized_medium.url,
    }
  })
  return gifs
}
