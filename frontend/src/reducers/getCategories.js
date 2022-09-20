import { GET_CATEGORIES } from "../constants";
const getCategories = (categories = [], action) => {
    if (action.type === GET_CATEGORIES) {
        return action.payload;
    }
    return categories;
}

export default getCategories;