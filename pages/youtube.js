import Head from 'next/head'
import Script from 'next/script'
import useSWR from 'swr'
import Layout from '../components/layout';
import fetcher from '../libs/fetcher'

export default function Home() {

  const { data: youtubeData, error: youtubeDataError } = useSWR('/api/youtube-data', fetcher)
  const { data: youtubeLatestVideo, error: youtubeLatestVideoError } = useSWR('/api/youtube-latest-video', fetcher)
  
  let youtube_profile_pic    = youtubeData?.result.items[0].snippet.thumbnails.high.url;
  let youtube_channel_name   = youtubeData?.result.items[0].snippet.title;
  let subscriber_count       = youtubeData?.result.items[0].statistics.subscriberCount;
  let youtube_channel_desc   = youtubeData?.result.items[0].snippet.description;
  
  return (
    <Layout activeNav="home">
      <Head>
        <title>yutub</title>
      </Head>
      <div className="container">
        <div className="row my-3  justify-content-center text-center">
            <div className="col-md-12 my-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" width="100"/>
                <h1>Youtube</h1>
            </div>
        </div>
        <div className="row my-3 justify-content-center">
            <div className="col-md-3 mb-3 text-center youtube-profile">
                <img id="channel-pp" src={youtube_profile_pic} className="rounded-circle"/>
            </div>
            <div className="col-md-5">
                <ul className="list-group">
                    <li className="list-group-item">
                        <h1 className="mb-0" id="channel-name">{youtube_channel_name}</h1>
                        <div className="mb-3" id="channel-subs">{subscriber_count} Subscribers</div>
                    </li>
                    <li className="list-group-item">
                    <p id="channel-desc">{youtube_channel_desc}</p>
                    </li>
                </ul>
            </div>
        </div>
        <h1 className="text-center">My Latest Video</h1>
        <div className="row my-3 text-center" id="latest-videos">
          {
            !youtubeLatestVideo ? <h1>Loading...</h1> : 
              youtubeLatestVideo?.result.items.map((video) => (
                <div className="col-md-4" key={video.id.videoId}>
                    <div className="ratio ratio-16x9">
                        <iframe src={"https://www.youtube.com/embed/"+video.id.videoId+"?rel=0"} title="YouTube video" allowFullScreen></iframe>
                    </div>
                </div>
              ))
          }
        </div>
        <a href="https://www.youtube.com/channel/UCJgKoSpz2fSeu_KNFC_uqtw" className="btn btn-danger w-100 my-3" target="_blank"><br/> Visit Channel</a>
      </div>
    </Layout>
  )
}
