
interface CardProps{
    title: string
    link: string
    type: "twitter" | "youtube"
}




export const Card = ({title, link, type }: CardProps) => {
  return (
    <div className="bg-white/10 w-full rounded-lg p-4 text-white break-inside-avoid-column mb-4">
        <p className="text-3xl font-medium">{title}</p>
        <div className="pt-4">
                {type === "youtube" && <iframe className="w-full rounded-lg h-60" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>


        
    </div>
  )
}
