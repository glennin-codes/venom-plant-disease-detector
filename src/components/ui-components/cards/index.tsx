type cardProps={
    icon:string,
    title:string,
    content:string
}
export const Card = ({ icon, title, content }:cardProps) :JSX.Element=> (
    <div className="  md:mx-10 md:my-10 my-4 bg-white rounded-md shadow-md w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/3 p-4 mb-4 md:mb-0">
      <div className="flex flex-col items-center text-center w-full">
      <img src={icon} className="w-8 h-8 " alt='icon'/>
      <h2 className="mt-2  text-lg font-bold">{title}</h2>
      <p className="mt-2 max-w-sm text-gray-600">{content}</p>
      </div>
    </div>
  )
