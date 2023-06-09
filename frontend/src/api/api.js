import axios from 'axios'

const api = 'http://localhost:5050'

export const uploadfileusingurl = async (url) =>{
    try {
        console.log(url)
        await axios.post(`${api}/api/test/storage/upload-via-url` , {url:url} )
        return "success"
    } catch (error) {
        return error
    }
}

export const signUpApi = async (user) =>{
    try {
        console.log(user)
        const res = await axios.post(`${api}/api/auth/signup` , user)
        return res

    } catch (error) {
        return error
    }
}

export const signInApi = async (user) =>{
    try {
        console.log(user)
        const res = await axios.post(`${api}/api/auth/signin` , user)
        return res

    } catch (error) {
        return error
    }
}

export const getSignedUrlApi = async(file) =>{
    try {
        const res = await axios.post(`${api}/api/test/storage/get-signed-url` , {file:file})
        return res.data.url
    } catch (error) {
        return error
    }
}

export const getTranscriptApi = async(file) =>{
    try {
        let address = "gs://video-call-transcript/" +file
        const res = await axios.post(`${api}/api/test/video/transcript` , {file:address})
        return res.data.response.annotationResults
    } catch (error) {
        return error
    }
}

export const getCurrentUserApi = async() =>{
    try {
        const res = await axios.post(`${api}/api/auth/currentuser`)
        console.log(res.data)
        return res.data
    } catch (error) {
        return error
    }
}

export const signOutUser = async() =>{
    try {
        await axios.post(`${api}/api/auth/signout`)
    } catch (error) {
        return error
    }
}

// firestore

export const getContactList = async()=>{
    try {
        const res = await axios.get(`${api}/api/firestore/getuserlist`)
        return res.data
    } catch (error) {
        return error
    }
}

export const addContactFirestore = async(contact)=>{
    try {
        const res = await axios.post(`${api}/api/firestore/add-user` , contact)
        return res.data
    } catch (error) {
        return error
    }
}