import { useEffect } from "react";
import { Card } from "../component/Card";
import Navbar from "../component/Navbar";
import { useContent } from "../hooks/useContent";
import { atom, useRecoilState } from "recoil";

export const filterState = atom({
  key: 'filterType', 
  default: "", 
});

function Dashboard() {

  const {contents, refresh} = useContent();

  

  const [filterType, setFilterType] = useRecoilState(filterState);


  const filteredContents = contents.filter(({ type }) =>
    filterType ? type === filterType : true
  );

  useEffect(() => {
    refresh();
  })




  return (
    <div className="flex bg-black h-screen w-full overflow-hidden items-center justify-center text-white">
      <div className="md:w-4/5 md:h-4/5 w-full h-screen rounded-2xl bg-gradient-to-br to-white/[0.09] from-transparent relative z-10 flex ">

        

        <Navbar />
        

        <div className="w-full h-full overflow-y-auto flex justify-center pt-14">
        <div className="p-4 h-fit columns-1 md:columns-3 gap-4 w-full">
        

        {filteredContents.map(({ type, link, title, id }) => (
        <Card
          key={id}
          type={type}
          link={link}
          title={title}
          id={id}
        />
      ))}
      
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
