function StatisticComponent({courseName, courseResult}){
    const totalScore = courseResult.reduce((sum, student) => sum + student.score, 0);
    const averageScore = (totalScore / courseResult.length).toFixed(2);
    const minScore = Math.min(...courseResult.map(student => student.score));
    const maxScore = Math.max(...courseResult.map(student => student.score));
    return(
        <>
        <div className="scores-container" >
            <div>
                <p>Average Score: {averageScore}</p>
                <p>Minimum Score: {minScore}</p>
                <p>Maximum Score: {maxScore}</p>
            </div>
        </div>
        </>
    )
}

export default StatisticComponent;