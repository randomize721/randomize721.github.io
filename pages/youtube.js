import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {
    
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
                <img id="channel-pp" className="rounded-circle"/>
            </div>
            <div className="col-md-5">
                <ul className="list-group">
                    <li className="list-group-item">
                        <h1 className="mb-0" id="channel-name"></h1>
                        <div className="mb-3" id="channel-subs"></div>
                        <div className="g-ytsubscribe" data-channelid="UCJgKoSpz2fSeu_KNFC_uqtw" data-layout="default" data-count="default"></div>
                    </li>
                    <li className="list-group-item">
                    <p id="channel-desc"></p>
                    </li>
                </ul>
            </div>
        </div>
        <h1 className="text-center">My Latest Video</h1>
        <div className="row my-3 text-center" id="latest-videos">
        </div>
        <a href="https://www.youtube.com/channel/UCJgKoSpz2fSeu_KNFC_uqtw" className="btn btn-danger w-100 my-3" target="_blank"><br/> Visit Channel</a>
      </div>
    </Layout>
  )
}
