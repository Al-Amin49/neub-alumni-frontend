import axios from 'axios';

const apiUrl= 'http://localhost:4000/';

export const axiosOpen= axios.create({
    baseURL:apiUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
})

export const axiosSecure=axios.create({
    baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
}) 
console.log('Headers in axiosSecure:', axiosSecure.defaults.headers);