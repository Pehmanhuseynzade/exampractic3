import axios from "axios"
import { BASE_URL } from "./base_URL"

//GET ALL DATAS
export const getAllDatas = async()=>{
     let globalData;
    await axios.get(`${BASE_URL}`)
    .then((res)=>{
     globalData = res.data
    })
    return globalData
}

//GET DATAS ID

export const getDatasID = async(id)=>{
     let globalData;
     await axios.get(`${BASE_URL}/${id}`)
     .then((res)=>{
          globalData = res.data
     })
     return globalData
}

//Delete

export const deleteDatasByID = async(id)=>{
     await axios.delete(`${BASE_URL}/${id}`)
}

//POST

export const postDataByID = async(payload)=>{
     await axios.post(`${BASE_URL}`,payload)
}