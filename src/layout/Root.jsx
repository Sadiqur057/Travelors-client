import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <h1>Nav</h1>
      <Outlet></Outlet>
      <h1>footer</h1>
    </>
  );
};

export default Root;
