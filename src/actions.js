import { ADD_COMMENT } from "./constants";
import { ADD_NAME } from "./constants";
import { CHANGE_RATING } from "./constants"

export function addName(payload) {
    return { type: ADD_NAME, payload };
}

export function addComment(payload) {
    return { type: ADD_COMMENT, payload };
}

export function changeRating(payload) {
    return { type: CHANGE_RATING, payload};
}

