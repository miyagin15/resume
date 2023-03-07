import React from 'react'
import Footer from '../style/Footer'
import Header from '../style/Header'
import Kagoshima from '../Images/Kagoshima.jpg'
import TripleJump from '../Images/TripleJump.jpg'
import UnivResearch from '../Images/UnivResearch.jpg'
import Work from '../Images/Work.jpg'
import MasterReserach from '../Images/MasterReserach.jpg'
import { useMediaQuery } from "react-responsive"

type Experience = {
  period: string
  where: string
  content: string
  picture?: any
}

function Home() {
  const isMobileScreen: boolean = useMediaQuery({ query: '(max-width: 560px)'})
  const experiences: Experience[] = [
    {
      "period": "2021-",
      "where": "IT通信",
      "content": "terraform, aws, azureなどを使用したクラウドソーリューション開発",
      "picture": Work
    },
    {
      "period": "2019-2021",
      "where": "大学院の研究",
      "content": "人の顔情報をカメラから取得して，手を必要としない操作インタフェースアプリの研究を行った",
      "picture": MasterReserach
    },
    {
      "period": "2015-2019",
      "where": "大学の研究",
      "content": "深層学習を用いて，センサデータから人の動作を推定する研究を行った",
      "picture": UnivResearch
    },
    {
      "period": "2012-2015",
      "where": "高校生",
      "content": "陸上部。高校３年時に三段跳びで全国大会出場。全国30位ぐらい",
      "picture": TripleJump
    },
    {
      "period": "1996",
      "where": "誕生",
      "content": "鹿児島で生まれ育ち",
      "picture": Kagoshima
    },
  ]
  const experienceList = experiences.map((experience) =>
    // <div style={{display:"table",border:"1px solid #000000",backgroundColor:"#ffffff"}}>
    <div key={experience.content} style={{ display: "flex", content: "flex", flexWrap: "wrap", width: "100%", backgroundColor: "#ffffff", margin: "10px", borderRadius: "20px" }}>
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
      <div
        style={{
          border: 'black',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isMobileScreen ||  <div style={{ flex: 0 }}>
          <div style={{ textAlign: 'center' }}>
          </div>
        </div>}
        <div style={{ flex: 1, padding: 10 }}>
          {experienceList}
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
