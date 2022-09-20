import { GET_QUIZ, LEAVE_QUIZ } from "../constants";
const getQuiz = (quiz = [], action) => {
    if (action.type === GET_QUIZ || action.type === LEAVE_QUIZ) {
        return action.payload;
    }
    return quiz;
}

export default getQuiz;