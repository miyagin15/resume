import Footer from '../style/Footer'
import Header from '../style/Header'
import DmmCount from '../Images/DmmCount.jpg'
import Skill from '../Images/Skills.jpg'
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
  const languageList = skills.lanugages.map((language) =>
    <img alt={language.alt} src={`${language.src}`}></img>
  );
  const frameworkList = skills.frameworks.map((framework) =>
    <img alt={framework.alt} src={`${framework.src}`}></img>
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
          {frameworkList}
        </p>
        <img style={{ width: "50%" }} src={Skill} alt={`description of Skills`} width={'10%'} />
      </div>
      <div style={{ flex: 1 }}>
        <h2 id="保有スキル">保有資格</h2>
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
        <img style={{ width: "30%" }} src={DmmCount} alt={`description of DmmCount`} width={'10%'} />
      </div>}
      <hr />
      <Footer />
    </div>
  )
}

export default Skills
