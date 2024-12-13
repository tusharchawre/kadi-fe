import { ElementRef, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { cn } from "../lib/utils"
import { ChevronsLeft, LucideYoutube, MenuIcon, X, Youtube, YoutubeIcon} from "lucide-react"
import Button from "./Button"
import Share from "../assets/icons/Share"
import PlusIcon from "../assets/icons/PlusIcon"
import ContentModal from "./ContentModal"
import NavItem from "./NavItem"
import Twitter from "../assets/icons/Twitter"
import axios from "axios"
import { BACKEND_URL, FRONTEND_URL } from "../config"

function Navbar() {
    const isMobile = useMediaQuery("(max-width:768px)")

    const [isOpen, setIsOpen] = useState(false)

    const isResizingRef = useRef(false)
    const sidebarRef = useRef<ElementRef<"aside">>(null)
    const navbarRef = useRef<ElementRef<"div">>(null)
    const [isResetting, setIsResetting] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(isMobile)

    const handleMouseDown = (
        event : React.MouseEvent<HTMLDivElement, MouseEvent>
    ) =>{
        event.preventDefault()
        event.stopPropagation()

        isResizingRef.current = true
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
    }

    const handleMouseMove = (
        event : MouseEvent
    ) =>{
        if (!isResizingRef.current) return;

        let newWidth = event.clientX

        if (newWidth < 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;
        
        if (sidebarRef.current && navbarRef.current){
            sidebarRef.current.style.width = `${newWidth}px`

            navbarRef.current.style.setProperty("left", `${newWidth}px`)
            navbarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`)

        }
    }

    const handleMouseUp = () =>{
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
    }

    const resetWidth = () =>{
        if (sidebarRef.current && navbarRef.current){
            setIsCollapsed(false)
            setIsResetting(true)

            sidebarRef.current.style.width = isMobile ? "100%" : "240px"
            navbarRef.current.style.setProperty(
                "width",
                isMobile ? "0" : "calc(100%-240px)"
            );
            navbarRef.current.style.setProperty(
                "left",
                isMobile ? "100%" : "240px"
            );
            setTimeout(()=> setIsResetting(false), 700)
        }

      }

    const collapse = () =>{
        if(sidebarRef.current && navbarRef.current){
            setIsCollapsed(true)
            setIsResetting(true)

            sidebarRef.current.style.width = "0"
            navbarRef.current.style.setProperty("width","100%")
            navbarRef.current.style.setProperty("left","0")
            setTimeout(()=> setIsResetting(false),700)

        }
      }

      const handleShare = async () =>{
      const response =  await axios.post(`${BACKEND_URL}/api/v1/user/sharelink`, {
            share: true
        },{
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        })


        alert(`The Share link to this brain is : ${FRONTEND_URL}/user/${response.data.hash.hash}`)

      }


  return (
    <>
    
    <aside 
    ref={sidebarRef}

    className={cn("group/sidebar w-60 h-full bg-white/20 overflow-y-auto relative flex flex-col z-[9999] border-white/30 rounded-l-2xl",
        isResetting && "transition-all ease-in-out duration-700",
        isMobile && "w-0"
    )} >
    <div
    role="button"
    onClick={collapse}
    className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
    isMobile && "opacity-100"
    )}
    >
        <ChevronsLeft />
      </div>

    <div>
        {/* <p>Action Items</p> */}
    </div>

    <div className={cn("mt-4 flex justify-center flex-col transition-all ease-in-out",
        isCollapsed && "opacity-0"
    )}>
        <NavItem startIcon={<LucideYoutube />}>
            <p>YouTube</p>
        </NavItem>
        <NavItem startIcon={<Twitter />}>
            <p>Twitter</p>
        </NavItem>
    </div>

    <div 
    onMouseDown={handleMouseDown}
    onClick={resetWidth}
    
    className="w-[0.5px] h-full absolute top-0 right-0 opacity-0 bg-white/40 group-hover/sidebar:opacity-100 cursor-ew-resize transition" />
    </aside>

    <div 
    className={cn("absolute top-0 z-[999999] w-full h-fit",
        isOpen && "h-full",
        isResetting && "transition-all ease-in-out duration-700",
        isMobile && "left-0 w-full",
        isCollapsed && "w-full"
    )}
    >
        <nav
        ref={navbarRef}
        className={cn("bg-transparent px-3 py-2 w-full flex"
            
        )}>
            {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground " />}

            <div className="flex gap-2 px-3 py-2 h-fit absolute justify-end w-fit right-0">
          <Button 
          variant="dark" 
          startIcon={<Share />}
          onClick={handleShare}
          >
            Share
          </Button>
          <Button variant="light" onClick={()=>{setIsOpen(true)}} startIcon={<PlusIcon />}>
            Add Content
          </Button>
        </div>


        <ContentModal open={isOpen} onClose={()=>{
            setIsOpen(false)
        }} />


        


        </nav>

    </div>


    </>
  )
}

export default Navbar