import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { comment } from "postcss";
import Loginpage from "./pages/login";
import Registerpage from "./pages/register";


// function ButtonBlack() {
//   // penulisan componen harus menggunakan aturan pascalCase dimana huruf depan harus CAPITAL
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//       type="submit"
//     >
//       Buy now
//     </button>
//   );
// }

// function ButtonRed() {
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-red-600 text-white"
//       type="submit"
//     >
//       Buy now
//     </button>
//   );
// }

// const ButtonGreen = (props) => {
//   return (
//     <button
//       className={`h-10 px-6 font-semibold rounded-md bg-${props.variant}-600 text-white`}
//       type="submit"
//     >
//      {props}
//     </button>
//   );
// };

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center gap-x-4 ">
        <Registerpage/>
        <Loginpage/>
      </div>
    </>
  );
}

export default App;
