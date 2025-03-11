import { FaStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card() {
  return (
    <section className="m-5 border-2 border-gray-200 p-5 cursor-pointer">
    <img className="w-52 mb-4" src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe" />
    <div className="card-deatails">
      <h3 className="mb-4">Shoe</h3>
      <section className="mb-4 flex">
        <FaStar className="text-yellow-500"/> <FaStar className="text-yellow-500"/> <FaStar/> <FaStar/>
        <span className="text-sm ml-2">4</span>
      </section>
      <section className="flex justify-around items-center">
        <div className="price">
          <del>300</del> 200
        </div>
        <div className="bag">
        <BsFillBagHeartFill className="text-gray-600"/>
        </div>
      </section>
    </div>
    </section>
  )
}
