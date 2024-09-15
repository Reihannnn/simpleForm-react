import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Index";


const Formregister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        placeholder="Insert ur Fullname here..."
        htmlFor="fullname"
        type="text"
        name="fullname"
      />
      <InputForm
        label="Email"
        placeholder="example@gmail.com"
        htmlFor="email"
        type="email"
        name="email"
      />
      <InputForm
        label="Password"
        placeholder="****"
        htmlFor="password"
        type="password"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        placeholder="****"
        htmlFor="password"
        type="password"
        name="confirmPassword"
      />

      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default Formregister;
