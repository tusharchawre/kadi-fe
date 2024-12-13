import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useParams } from "react-router-dom"

export function useSharedCotent () {
    const {sharelink} = useParams()
    const [shareContent, setShareContent] = useState([])

    const sharedContent = async () =>{
         axios.get(`${BACKEND_URL}/api/v1/user/${sharelink}`,{
            headers:{
                "Authorization" : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setShareContent(response.data.content)
        })
        
    }

    useEffect(()=>{
        sharedContent()
       
    })

    return shareContent
}