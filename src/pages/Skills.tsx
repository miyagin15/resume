import Footer from '../style/Footer'
import Header from '../style/Header'
import DmmCount from '../images/DmmCount.jpg'
import Skill from '../images/Skills.jpg'
import { useMediaQuery } from "react-responsive"
import skills from '../data/skills.json'
function Skills() {
  const isMobileScreen: boolean = useMediaQuery({ query: '(max-width: 560px)' })
  const certificationList = skills.certifaictions.map((certifaiction) =>
    <li>{certifaiction}</li>
  );
  const favoritesList = skills.favorites.map((favorite) =>
    <li>{favorite}</li>
  );
  const imageColorList = ["007ACC", "F7DF1E", "3776AB", "3776e3", "46a2f1", "007396", "4FC08D", "45b8d8", "092E20", "FFCA28", "46a2f1"]
  const languageList = skills.language.map((language, index) =>
    <img alt={language} src={`https://img.shields.io/badge/-${language}-${imageColorList[index]}?style=flat-square&amp;logo=${language}&amp;logoColor=white`} />
  );
  const otherList = skills.other.map((other, index) =>
    <img alt={other} src={`https://img.shields.io/badge/-${other}-${imageColorList[index]}?style=flat-square&amp;logo=${other}&amp;logoColor=white`} />
  );
  return (
    <div style={{ textAlign: "center", justifyContent: "center", backgroundColor: "#f5f5ff" }}>
      <Header />
      <h2 id="保有スキル">好きな技術</h2>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", listStyle: "disc", paddingLeft: "15px" }}>
        <ul style={{ textAlign: "left" }}>
          {favoritesList}
        </ul>
      </div>
      <hr />
      <h2 id="技術スタック">技術スタック</h2>
      <div style={{ paddingLeft: "10px" }}>
        <a
          href="https://github.com/miyagin15"
          rel="noreferrer noopener"
          target="_blank"
        >github repo</a>
        <h3 id="言語">言語</h3>
        <p>
          {languageList}
        </p>
        <h3 id="フレームワークその他">フレームワーク・その他</h3>
        <p>
          {otherList}
        </p>
        <img style={{ width: "50%" }} src={Skill} alt={`description of Skills`} width={'10%'} />
      </div>
      <div style={{ flex: 1 }}>
        <h2 id="保有スキル">保有資格</h2>
        クラウドの資格は<a
          href="https://www.credly.com/users/ginga-miyata/badges"
          rel="noreferrer noopener"
          target="_blank"
        >credly</a>に掲載済み
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", listStyle: "disc", paddingLeft: "15px" }}>
          <ul style={{ textAlign: "left" }}>
            {certificationList}
          </ul>
        </div>
      </div>
      {isMobileScreen || <div style={{ paddingLeft: "30px", flex: 0.5 }}>
        <h2 >
          英語でのコミュニケーションは勉強中。
        </h2>
        <img style={{ width: "80%" }} src={DmmCount} alt={`description of DmmCount`} width={'10%'} />
      </div>}
      <hr />
      <Footer />
    </div>
  )
}

export default Skills
