import React from 'react'
import Footer from '../style/Footer'
import Header from '../style/Header'

function Works() {
  return (
    <div style={{backgroundColor: "#f5f5ff"}}>
      <Header />
      <div >
        <h2 id="保有スキル">職務経歴詳細</h2>
        <ul>
          <li>インターン2年 (LineAPI+Watson+Django+React)</li>
          <li>2021上半期 (Terraform+AWS+Azure+python)</li>
        </ul>
        <h2 id="保有スキル">趣味開発。リリース済みアプリ</h2>
        <ul>
          <li>AI顔の大きさ診断アプリ (Unity+ncmb+firebase)</li>
          <li>カロリーアプリ (react-native+gcp)</li>
          <li>ナッツの栄養アプリ (Flutter+firebase)</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Works
