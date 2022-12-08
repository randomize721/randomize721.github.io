// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    if (req.method !== 'GET') return res.status(405).end()
  
    const data = req.query
    
    const apiKey = process.env.OMDB_API_KEY
    const endpoint = `https://www.omdbapi.com/?apikey=${apiKey}&i=${data.id}`

    const response = await fetch(endpoint);
    const result = await response.json();
  
    return res.status(200).json(result);
  };