import { ENDPOINT_PRODUCT } from "../variables";

const getAllArticles = () => {
  return fetch(`${import.meta.env.VITE_API_HOST}${ENDPOINT_PRODUCT}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));
}

const getArticlesFromCategory = (category) => {
  return fetch(`${import.meta.env.VITE_API_HOST}${ENDPOINT_PRODUCT}`)
    .then((res) => res.json())
    .then((res) => res.filter((res) => res.category === category))
}

const getOneArticles = (id) => {
  return fetch(`${import.meta.env.VITE_API_HOST}${ENDPOINT_PRODUCT}`)
    .then((res) => res.json())
    .then((res) => res.find((e) => e.id == id))
    .catch((error) => console.log(error));
}

const getArticleIdByName = (title) => {
   return fetch(`${import.meta.env.VITE_API_HOST}${ENDPOINT_PRODUCT}`)
   .then((res) => res.json())
    .then((res) => res.find((res) => res.title === title))
    .then((res) => res.id)
} 

export {
  getAllArticles,
  getOneArticles,
  getArticlesFromCategory,
  getArticleIdByName,
};
