import Button from "../componentShoe/Button"
export default function Recommended({handleClick}) {
  return (
    <div>
      <h2 className="ml-80 mb-5 mt-5 text-2xl font-serif">Recommended</h2>
      <div className="flex ml-80">
      <Button onClickHandler={handleClick} value='' title='All Products'/>
        <Button onClickHandler={handleClick} value='Nike' title='Nike'/>
        <Button onClickHandler={handleClick} value='Adidas' title='Adidas'/>
        <Button onClickHandler={handleClick} value='Puma' title='Puma'/>
        <Button onClickHandler={handleClick} value='Vans' title='Vans'/>
      </div>
    </div>
  )
}
