
const Input = (props) =>{
  const {type, placeholder,name } = props
  return (  
    <input
                type={type}
                className="text-sm rounded w-full py-2 px-3 mb-2 text-slate-700 placeholder:opacity-80 border"
                placeholder= {placeholder}
                name={name}
              />
  )
}

export default Input