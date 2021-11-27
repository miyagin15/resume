import React from 'react'
import Footer from '../style/Footer'
import Header from '../style/Header'
import Jump from '../Images/Jump.jpg'
import YouTube from 'react-youtube';

function Home() {
  const opts = {
    height: '390',
    width: '640',
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };
  const _onReady:any=(event:any)=> {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <div>
      <Header />
      <h1>自己紹介</h1>
      <div
        style={{
          border: 'black',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        <div style={{ flex: 1 }}>
          <img src={Jump} alt={"description of jump"} width={'100%'} />
          <div style={{ textAlign: 'center' }}>
            <p>小学校から大学まで陸上競技を続けた</p>
            <p>全国大会出場経験あり</p>
          </div>
        </div>
        <div style={{ flex: 2, paddingLeft: 50 }}>
          <p>
            大学の研究室にて，深層学習を用いて，センサデータから人の動作を推定する研究を行った
          </p>
          <p>
            大学院の研究室にて，人の顔情報をカメラから取得して，手を必要としない操作インタフェースの研究を行った
          </p>
          <p>大学在学中に，ソフトウェアの便利さに気付く</p>
          <p>複数のインターンを経験し，アプリやウェブサービスの開発を行う</p>
          <br></br>
          <p>趣味は跳ぶこと</p>
          {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} /> */}
          <YouTube videoId="bdu4HQvZC3I" opts={opts} onReady={_onReady} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
