type cardProps={
    icon:string,
    title:string,
    content:string
}
export const Card = ({ icon, title, content }:cardProps) :JSX.Element=> (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md shadow-md">
      <img src={icon} className="w-8 h-8 " alt='icon'/>
      <h2 className="mt-2 text-lg font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  )