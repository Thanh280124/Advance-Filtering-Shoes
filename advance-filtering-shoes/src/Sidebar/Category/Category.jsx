import './Category.css'
import Input from '../../componentShoe/Input';
function Category() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title text-2xl font-normal mb-5">Category</h2>
      <div className="sidebar-items mt-5">
       <Input/>
       <Input/>
       <Input/>
       <Input/>
       <Input/>
      </div>

      <div className="line mt-12 border-t border-gray-200"></div>
    </div>
  );
}

export default Category;
