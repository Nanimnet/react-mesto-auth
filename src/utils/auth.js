import { apiUserData } from "./utils.js"; 
const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    })

    .then((res)=> {
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    })
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    })

    .then((res)=>{
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    })

    .then((data) => {
        if (data.token){
            localStorage.setItem('jwt', data.token);
            return data;
        }
    })
}

export const checkToken = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${jwt}`
        }
    })

    .then((res) => {
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    })
}