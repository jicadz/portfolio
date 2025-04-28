import Main from "../main/Main";
import Nav from "../nav/Nav";

const Desktop = () => {
  return (
    <div className="desktop h-[100vh] w-[100%] overflow-hidden">
      <Nav />
      <Main />
    </div>
  )
};

export default Desktop;
