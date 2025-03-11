

export default function Input() {
  return (
   <label className="sidebar-label-container">
          <input
            className="absolute opacity-0 cursor-pointer"
            type="radio"
            value="all"
            name="test"
          />
          <span className="checkmark"></span>All
        </label>
  )
}
