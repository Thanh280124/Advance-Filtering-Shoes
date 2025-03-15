
export default function Button({onClickHandler,value ,title}) {
  return (
    <button onClick={onClickHandler} value ={value} className ='px-5 py-2.5 mr-1.5 border border-gray-300 rounded-md text-gray-800 cursor-pointer'>{title}</button>
  )
}
