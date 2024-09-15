import Input from "./Input"
import Label from "./Label"

const InputForm = (props) =>{

  const {label , name , placeholder , type, htmlFor} = props
  return(
    <div className="mb-8">
      <Label htmlFor = {htmlFor}>{label}</Label>
      <Input type= {type} name = {name}  placeholder = {placeholder}/>
    </div>
  )
}

export default InputForm