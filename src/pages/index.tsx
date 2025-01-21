import Main from "./main/Main";
import Nav from "./nav/Nav";

export default function Home() {
  return (
    <div className="bg h-[100vh] w-[100%] overflow-hidden">
      <Nav />
      <Main />
    </div>
  );
}
