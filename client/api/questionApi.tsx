import client from './client'
import {QuestionI} from "../domain/QuestionI";
import {callApi} from "./apiUtils";


export const getQuestions = (data) => {
    return callApi("getBookQuestions", data);
};

export const addQuestion = (question: QuestionI) => {
    callApi('addBookQuestion', question)
        .then(result => console.log(result))
        .catch(error => console.log(error))
}
