import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Index";


const Formlogin = () => {
  return (
    <form action="">
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

      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default Formlogin;
