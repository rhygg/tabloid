export const name = 'tabloid'


export const ps = '20'
export const available_Headlines = `${name}/HEADLINES_AVAILABLE`;

export const available_Categories = `${name}/CATEGORY_HEADLINES_AVAILABLE`;



export const token = `HIDEY_HIDEY_TOKEN_HIDEY`;
export const url = 'https://newsapi.org/v2';
export const params = `&pageSize=${ps}`;

/*
Endpoints
*/

export const headlines =`${url}/top-headlines??apiKey=${token}${params}`

export const search = `${url}/everything?apiKey=${token}${params}&sortBy=relevancy`
export const Categories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];
