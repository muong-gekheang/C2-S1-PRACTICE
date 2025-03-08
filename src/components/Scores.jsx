import StatisticComponent from "./components/StatisticComponent"
function Scores({courseName, courseResult}) {
    return (
      <div className="scores-container">
        <div className="scores"> 
          <header>
              <h1>{courseName}</h1>
              <table>
              <thead>
                <tr > 
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                  {courseResult.map((student,index)=>(
                      <tr key={index}>
                          <td>{student.firstName} </td>
                          <td>{student.lastName}</td>
                          <td className={student.score < 50 ? "warning" : ""}>{student.score}</td>
                      </tr>
                  ))}
              </tbody>
            </table>
          </header>
        </div>
          <StatisticComponent courseName="HTML" courseResult={HTML_RESULTS} />
      </div>
    )
}

export default Scores;