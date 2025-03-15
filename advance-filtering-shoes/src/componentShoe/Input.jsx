export default function Input({handleChange,value,title,name,color}) {
  return (
   <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            className="absolute opacity-0 cursor-pointer"
            type="radio"
            value={value}
            name={name}
          />
          <span className="checkmark" style={{backgroundColor:color}}></span>{title}
        </label>
  )
}
