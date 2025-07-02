import AsideNav from "./AsideNav";
import HeaderNav from "./HeaderNav";
import MainNav from "./MainNav";
import "./styles/ComputerView.css";
export default function ComputerView() {
  return (
    <>
      <HeaderNav></HeaderNav>
      <div className="computer-body-container">
        <AsideNav></AsideNav>
        <MainNav></MainNav>
      </div>
    </>
  );
}
