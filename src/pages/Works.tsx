import React from 'react'
import Footer from '../style/Footer'
import Header from '../style/Header'

function Works() {
  return (
    <div>
      <Header />
      <h2 id="保有スキル">保有資格とスキル</h2>
      資格は<a
        href="https://www.credly.com/users/ginga-miyata/badges"
        rel="noreferrer noopener"
        target="_blank"
      >credly</a>に掲載済み
      <ul>
        <li>JavaScript / TypeScript + React.js でのフロントエンド開発・設計</li>
        <li>Django でのサーバーサイド開発</li>
      </ul>
      <hr />
      <h2 id="技術スタック">技術スタック</h2>
      <div style={{ padding: "10px" }}>
        <h3 id="言語">言語</h3>
        <p>
          <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&amp;logo=typescript&amp;logoColor=white" />
          <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&amp;logo=JavaScript&amp;logoColor=white" />
          <img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&amp;logo=Python&amp;logoColor=white" />
          <img alt="C#" src="https://img.shields.io/badge/-Csharp-3776e3?style=flat-square&amp;logo=Csharp&amp;logoColor=white" />
        </p>
        <h3 id="フレームワークその他">フレームワーク・その他</h3>
        <p>
          <img alt="AWS" src="https://img.shields.io/badge/-AWS-F7DF1E?style=flat-square&amp;logo=Amazon+AWS&amp;logoColor=white" />
          <img alt="Azure" src="https://img.shields.io/badge/-Azure-46a2f1?style=flat-square&amp;logo=Microsoft+Azure&amp;logoColor=white" />
          <img alt="Unity" src="https://img.shields.io/badge/-Unity-007396?style=flat-square&amp;logo=Unity&amp;logoColor=white" />
          <img alt="Vue" src="https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&amp;logo=Vue.js&amp;logoColor=white" />
          <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&amp;logo=react&amp;logoColor=white" />
          <img alt="Django" src="https://img.shields.io/badge/-Django-092E20?style=flat-square&amp;logo=Django&amp;logoColor=white" />
          <img alt="Firebase" src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&amp;logo=Firebase&amp;logoColor=white" />
          <img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&amp;logo=docker&amp;logoColor=white" />
        </p>
        <a
          href="https://github.com/miyagin15"
          rel="noreferrer noopener"
          target="_blank"
        >github repo</a>

      </div>
      <Footer />
    </div>
  )
}

export default Works
