import { TiShoppingCart } from "react-icons/ti";
import Price from './Price/Price'
import Color from './Colors/Colors'
import Category from './Category/Category'
function Sidebar({handleChange}) {
  return (
    <>
    <section className="fixed w-[13%] min-h-screen border-r-2 border-gray-200 z-30 flex flex-col items-center">
        <div className="mb-16">
            <h1 className="text-4xl mt-5"><TiShoppingCart /></h1>
        </div>
        <div className="flex-1 w-full flex flex-col items-center px-3">
    <Category handleChange = {handleChange}/>
    <Price handleChange = {handleChange}/>
    <Color handleChange = {handleChange}/>
  </div>
    </section>
    </>
  )
}

export default Sidebar
