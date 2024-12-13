import axios from "axios"
import {  Trash } from "lucide-react"
import { BACKEND_URL } from "../config"
import { useContent } from "../hooks/useContent"
import { useEffect } from "react"

interface CardProps{
    title: string
    link: string
    type: "twitter" | "youtube"
    id : Number
}




export const Card = ({title, link, type, id }: CardProps) => {


  const handleDelete = async ()=>{
    axios.delete(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        Authorization: localStorage.getItem("token")
      },
      data: {
        contentId: id
      }
    });

    
  }

 
  





  return (
    <div className="bg-white/10 w-full rounded-lg p-4 text-white break-inside-avoid-column mb-4 relative group/card">
      <div
    role="button"
    onClick={handleDelete}
    className="h-8 w-8 text-muted-foreground rounded-sm hover:bg-neutral-600 absolute top-4 right-2 opacity-0 group-hover/card:opacity-100 transition flex items-center justify-center"
    >
        <Trash className="size-5" />
      </div>


        <p className="text-3xl font-medium">{title}</p>
        <div className="pt-4">
                {type === "youtube" && <iframe className="w-full rounded-lg h-60" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet w-full transition-all">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>


        
    </div>
  )
}
