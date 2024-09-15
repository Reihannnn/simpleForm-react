

const Authlayout = (props) => {
  const { children, title} = props;
  return (
    <div className="w-full max-w-xs p-8 border">
      <h1 className="text-blue-500 text-3xl font-bold mb-2">{title}</h1>
      <p className="font-medium text-slate-500 mb-4">
        welcome, Please enter your details
      </p>

      { children } {/* ambil dari ./Fragments/FormRegister atau Formlogin */}
    </div>
  );
};

export default Authlayout;
