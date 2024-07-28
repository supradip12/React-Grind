import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1> OOPS Erros</h1>
      <h2>Bhag jA Yaha Sa Bhosdika</h2>
      {/* <h3>{err.error.message}</h3> */}
    </div>
  );
};

export default Error;
