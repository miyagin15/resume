import Footer from '../style/Footer'
import Header from '../style/Header'
import works from '../data/works.json'

function Works() {
  const hobbyList = works.hobbies.map((hobby) =>
    <li>{hobby}</li>
  );
  const studentList = works.students.map((student) =>
    <li>{student}</li>
  );
  const employmentList = works.employments.map((employment) =>
    <li>{employment}</li>
  );
  return (
    <div style={{ textAlign: "center", justifyContent: "center", backgroundColor: "#f5f5ff" }}>
      <Header />
      <div >
        <h2 id="保有スキル">職務経歴詳細</h2>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", listStyle: "disc", paddingLeft: "5px" }}>
          <ul style={{ textAlign: "left" }}>
            {employmentList}
          </ul>
        </div>
        <h2 id="保有スキル">学生時代の経験</h2>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", listStyle: "disc", paddingLeft: "5px" }}>
          <ul style={{ textAlign: "left" }}>
            {studentList}
          </ul>
        </div>
        <h2 id="保有スキル">趣味開発。リリース済みアプリ</h2>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", listStyle: "disc", paddingLeft: "5px" }}>
          <ul style={{ textAlign: "left" }}>
            {hobbyList}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Works
