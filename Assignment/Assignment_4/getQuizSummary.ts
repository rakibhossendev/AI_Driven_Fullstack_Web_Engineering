interface QuizSummary{
    total: number;
    average: number;
}

const getQuizSummary = (marks: number[]): QuizSummary => {
    let total = marks.reduce((accumulator,value) => accumulator + value,0);

    return {total: total, average: marks.length===0? 0:total/marks.length};
}