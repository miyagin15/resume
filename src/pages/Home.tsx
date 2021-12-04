import React from 'react'
import Footer from '../style/Footer'
import Header from '../style/Header'
import Jump from '../Images/Jump.jpg'
import Kagoshima from '../Images/Kagoshima.jpg'
import TripleJump from '../Images/TripleJump.jpg'
import UnivResearch from '../Images/UnivResearch.jpg'
import Work from '../Images/Work.jpg'
import MasterReserach from '../Images/MasterReserach.jpg'
import YouTube from 'react-youtube';

type Experience = {
  period: string
  where: string
  content: string
  picture?: any
}

function Home() {
  const opts = {
    height: '390',
    width: '640',
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };
  const _onReady: any = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const experiences: Experience[] = [
    {
      "period": "1996",
      "where": "誕生",
      "content": "鹿児島で生まれ育ち",
      "picture": Kagoshima
    },
    {
      "period": "2012-2015",
      "where": "高校生",
      "content": "陸上部。高校３年時に三段跳びで全国大会出場。全国30位ぐらい",
      "picture": TripleJump
    },
    {
      "period": "2015-2019",
      "where": "大学の研究",
      "content": "深層学習を用いて，センサデータから人の動作を推定する研究を行った",
      "picture": UnivResearch
    },
    {
      "period": "2019-2021",
      "where": "大学院の研究",
      "content": "人の顔情報をカメラから取得して，手を必要としない操作インタフェースアプリの研究を行った",
      "picture": MasterReserach
    },
    {
      "period": "2021-",
      "where": "IT通信",
      "content": "terraform, aws, azureなどを使用したクラウドソーリューション開発",
      "picture": Work
    },
  ]
  const experience_list = experiences.map((experience) =>
    // <div style={{display:"table",border:"1px solid #000000",backgroundColor:"#ffffff"}}>
    <div style={{ display: "flex", content: "flex", flexWrap: "wrap", width: "100%", backgroundColor: "#ffffff", margin: "10px", borderRadius: "20px" }}>
      <div style={{ color: "#75bdff", fontSize: 25 }}>{experience.period}
        <span style={{ color: "#333333", fontWeight: "bold", fontSize: 20 }}> {experience.where}</span>
        <p style={{ color: "#333333", fontSize: 20, padding: "10px" }}>{experience.content}</p>
      </div>
      <div><img style={{ width: "50%" }} src={experience.picture} alt={`description of ${experience.content}`} width={'50%'} /></div>
    </div>
  );
  return (
    <div style={{ backgroundColor: "#f5f5ff" ,}}>
      <Header />
      <h1 style={{ padding: "10px" }}>自己紹介</h1>
      <div
        style={{
          border: 'black',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ flex: 1 }}>
          <img src={Jump} alt={"description of jump"} width={'100%'} />
          <div style={{ textAlign: 'center' }}>
            <p>小学校から大学まで陸上競技を続けた</p>
            <p>全国大会出場経験あり</p>
          {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} /> */}
          <YouTube videoId="bdu4HQvZC3I" opts={opts} onReady={_onReady} />
          </div>
        </div>
        <div style={{ flex: 3, paddingLeft: 50 }}>
          {experience_list}
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
