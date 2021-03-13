import axios from './http-common';

/************************* user index image upload *************************/
export const imageUpload = async (userImg) => {
  return await axios.post(`/users/upload`, {image: userImg})
    .then(data => data.data)
    .catch(error => { throw error.response.data });
};