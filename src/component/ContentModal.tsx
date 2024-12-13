
import { Cross, CrossIcon, X } from "lucide-react"
import PlusIcon from "../assets/icons/PlusIcon"
import Button from "./Button"
import Input from "./Input"
import Select from "./Select"
import { RefObject, useEffect, useRef, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

interface ModalProps { 
    open: boolean
    onClose : () => void
}

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}


function ContentModal({ open, onClose }: ModalProps) {
  const modalRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [onClose]);

  const handleSubmit = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
  }, {
      headers: {
          "Authorization" : localStorage.getItem("token")
      }
  })

  onClose();


  };

  return (
    <>
      {open && (
        <div>
          <div className="group/modal absolute top-0 right-0 w-full h-full bg-black/80 rounded-2xl flex items-center justify-center">
            <div
              ref={modalRef}
              className="w-4/5 md:w-2/5 h-2/3 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-xl flex flex-col justify-center items-center gap-4 relative border-[0.5px] border-white/5"
            >
              <div className="absolute flex w-full h-fit justify-center mb-8 text-3xl top-10 items-center">
                <h1>Add Content</h1>
              </div>
              <div
                role="button"
                className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/modal:opacity-100 transition"
                onClick={onClose}
              >
                <X />
              </div>
              <Input
                label="Title"
                reference={titleRef}
                placeholder="Enter Content Title"
              />
              <Input
                label="Link"
                reference={linkRef}
                placeholder="Enter Content Link"
              />
              <Select value={type} onChange={setType} /> {/* Pass state and handler */}
              <Button variant="light" onClick={handleSubmit} startIcon={<PlusIcon />}>
                Add Content
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentModal;


