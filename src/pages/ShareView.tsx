
import { useSharedCotent } from '../hooks/useShareContent';
import { Card } from '../component/Card';

function ShareView() {

    const sharedContent = useSharedCotent()

    return (
        <div className="flex bg-black h-screen w-full overflow-hidden items-center justify-center text-white">
          <div className="md:w-4/5 md:h-4/5 w-full h-screen rounded-2xl bg-gradient-to-br to-white/[0.09] from-transparent relative z-10 flex ">
    
            


            
    
            <div className="w-full h-full overflow-y-auto flex justify-center pt-14">
            <div className="p-4 h-fit columns-1 md:columns-3 gap-4 w-full">
        {sharedContent.map(({type, link, title, id}) => <Card 
        type={type}
        link={link}
        title={title}
        id={id}
        />)}
    
            
            </div>
            </div>
          </div>
        </div>
      );
}

export default ShareView