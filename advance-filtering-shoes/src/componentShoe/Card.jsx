import { FaStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <section className="m-5 border-2 border-gray-200 p-5 cursor-pointer">
    <img className="w-52 h-40 object-contain mb-4" src={img} alt={title} />
    <div className="card-deatails">
      <h3 className="mb-4">{title}</h3>
      <section className="mb-4 flex">
        {star} {star} {star} {star} 
                <span className="text-sm ml-2">{reviews}</span>
      </section>
      <section className="flex justify-around items-center">
        <div className="price">
          <del>{prevPrice}</del> {newPrice}
        </div>
        <div className="bag">
        <BsFillBagHeartFill/>
        </div>
      </section>
    </div>
    </section>
  )
}
