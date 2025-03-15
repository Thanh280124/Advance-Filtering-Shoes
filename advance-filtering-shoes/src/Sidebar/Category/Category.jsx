import './Category.css'
import Input from '../../componentShoe/Input';
function Category({handleChange}) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title text-2xl font-normal mb-5">Category</h2>
      <div className="sidebar-items mt-5">
       <label className='sidebar-label-container'>
        <input type="radio" onChange={handleChange} value='' name='test' />
        <span className='checkmark'></span>All
       </label>

       <Input handleChange={handleChange} 
       value='sneakers'
       title='Sneakers'
       name='test'
       />
       <Input handleChange={handleChange} 
       value='flats'
       title='Flats'
       name='test'
       />
       <Input handleChange={handleChange} 
       value='sandals'
       title='Sandals'
       name='test'
       />
       <Input handleChange={handleChange} 
       value='heels'
       title='Heels'
       name='test'
       />
      </div>

      <div className="line mt-12 border-t border-gray-200"></div>
    </div>
  );
}

export default Category;
