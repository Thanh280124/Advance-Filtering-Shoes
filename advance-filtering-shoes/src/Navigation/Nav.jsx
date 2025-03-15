import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

export default function Nav({ handleInputChange, query }) {
  return (
    <nav className="flex p-5 border-b-2 border-gray-100 justify-around items-center z-[999] ml-8">
      <div className="nav-container">
        <input 
          type="text" 
          onChange={handleInputChange}
          value={query}
          className="p-3 px-5 border-none bg-gray-100 outline-none mr-5 rounded-md relative w-56" 
          placeholder="Enter your search shoes"
        />
      </div>

      {/* Add flex and items-center here */}
      <div className="flex items-center">
        <a href="#">
          <FiHeart className = "w-6 h-6 ml-8"/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className = "w-6 h-6 ml-8"/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className = "w-6 h-6 ml-8"/>
        </a>
      </div>
    </nav>
  );
}
