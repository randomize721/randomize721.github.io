// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    const channelId = process.env.YOUTUBE_CHANNEL_ID
    const apiKey = process.env.YOUTUBE_API_KEY
    const url = 'https://www.googleapis.com/youtube/v3/search?key='+apiKey+'&channelId='+channelId+'&maxResults=3&order=date&part=snippet'
  
    const response = await fetch(url)
    const result = await response.json()
  
    return res.status(200).json({result})
  }
  