import { whyChoseUsConst } from "../../constants"
import { Card } from "../ui-components/cards"

export const WhyChoseUs=()=>{
    return(
        <div className="flex flex-col items-center justify-center w-full md:space-y-6">
        <h1 className="text-3xl font-bold text-greenMain">Why Chose Us</h1>

        <div className="flex flex-wrap justify-center w-full md:mb-32 px-2">
      {whyChoseUsConst.map(({icon,title,content},i:number) => (
             <Card key={i} icon={icon} title={title} content={content} />
      ))}
    </div>

        </div>
    )
}
//<div
// key={i}
// className="w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 mb-4 md:mb-0 "
// >
// <div className="bg-white p-6 rounded-lg shadow-md">
//   <div className="text-2xl mb-4 text-center">
//     {/* Add your icon here */}
//     <i className="fas fa-icon"></i>
//   </div>
//   <div className="text-xl mb-4 text-center font-bold">
//     {/* Add your title here */}
//     Title
//   </div>
//   <div className="text-center">
//     {/* Add your content here */}
//     Content
//   </div>
// </div>
// </div>