import { TiShoppingCart } from "react-icons/ti";
import Price from './Price/Price';
import Color from './Colors/Colors';
import Category from './Category/Category';

function Sidebar({ handleChange }) {
  return (
    <section className="flex flex-col items-center h-full max-h-[500px] sm:max-h-full">
      <div className="mb-4 sm:mb-16">
        <h1 className="text-2xl sm:text-4xl mt-3 sm:mt-5">
          <TiShoppingCart />
        </h1>
      </div>
      <div className="flex-1 w-full flex flex-col items-center px-2 sm:px-3">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </div>
    </section>
  );
}

export default Sidebar;