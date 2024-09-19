import logo from "../../assets/logo2.png";
import "../../../styles/tailwind.css";

const Brand: React.FC = () => {
  return (
    <div>
      <img className="w-52" src={logo} alt="logo" />
    </div>
  );
};

export default Brand;
