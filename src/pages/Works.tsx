import Footer from '../style/Footer'
import Header from '../style/Header'

function Works() {
  return (
    <div style={{ textAlign: "center", justifyContent: "center", backgroundColor: "#f5f5ff" }}>
      <Header />
      <div >
        <h2 id="保有スキル">職務経歴詳細</h2>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", listStyle: "disc", paddingLeft: "5px" }}>
          <ul style={{ textAlign: "left" }}>
            <li>インターン1社2年 (LineAPI+LinePay+Stripe+Watson+Django+React)</li>
            <li>2020年インターン3社 (Unity,Swift,AWS(ETL処理),Swift)</li>
            <li>2021年インターン3社 (Unity,GCP,React,CloudFormation,CDK)</li>
            <li>2021上半期 (Terraform+AWS+Azure+python)</li>
            <li>2021下半期 (python+NoSQL+Azure+AWS+深層学習)</li>
          </ul>
        </div>
        <h2 id="保有スキル">趣味開発。リリース済みアプリ</h2>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", listStyle: "disc", paddingLeft: "5px" }}>
          <ul style={{ textAlign: "left" }}>
            <li>AI顔の大きさ診断アプリ (Unity+ncmb+firebase)</li>
            <li>カロリーアプリ (react-native+gcp)</li>
            <li>ナッツの栄養アプリ (Flutter+firebase)</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Works
