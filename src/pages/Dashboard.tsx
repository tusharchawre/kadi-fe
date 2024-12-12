import Navbar from "../component/Navbar";

function Dashboard() {
  return (
    <div className="flex bg-black h-screen w-full overflow-hidden items-center justify-center text-white">
      <div className="md:w-4/5 md:h-4/5 w-full h-screen rounded-2xl bg-gradient-to-br to-white/[0.09] from-transparent relative z-10 flex">

        

        <Navbar>
        </Navbar>

        <div className="w-full h-full p-4 flex items-center justify-center">
        
        <p>TusharCHawre</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
