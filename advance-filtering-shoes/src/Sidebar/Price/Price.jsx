import Input from "../../componentShoe/Input"
function Price({handleChange}) {
  return (
    <div className="ml-5">
      <h2 className="text-2xl font-normal mb-5">Price</h2>

      <label className='sidebar-label-container'>
        <input type="radio" onChange={handleChange} value='' name='test2' />
        <span className='checkmark'></span>All
       </label>

    <Input 
    handleChange={handleChange}
    value={50}
    title='$0 - $50'
    name='test2'/>

    <Input 
        handleChange={handleChange}
        value={100}
        title='$50 - $100'
        name='test2'/>

    <Input 
        handleChange={handleChange}
        value={150}
        title='$100 - $150'
        name='test2'/>

    <Input 
        handleChange={handleChange}
        value={200}
        title='Over $150'
        name='test2'/>
    </div>
  )
}

export default Price
