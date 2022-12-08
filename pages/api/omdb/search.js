// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end()

  const data = req.body

  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY
  const endpoint = `https://www.omdbapi.com/?apikey=${apiKey}&s=${data.form_search_movie}`
  
  const response = await fetch(endpoint);
  const result = await response.json();

  return res.status(200).json(result);
};