import * as config from "./config";

export const addHeadlines = (headlines) => ({
    type: config.available_Headlines,
    headlines
});

export const addCategoryHeadlines = (category, headlines, page = 1) => ({
    type: config.avaliable_Categories,
    category,
    headlines,
    page
});