const Button = (props) => {
  const {children = '...', classname = 'bg-black'} = props  /* ini adalah nilai tetap dan langsung masuk ke object tersebut*/

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}  {/* ini adalah parameter yang digunaakan untuk mengisi nilai yang kita input di button */}
    </button>
  )
}

export default Button;