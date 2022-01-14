import { Link } from "react-router-dom";

const OrderButton = () => {
  return (
    <div className="bookingBtnDiv">
      <Link to="/booking">
        <button className="bookButton">Asztalfoglalás</button>
      </Link>
    </div>
  );
};

export default OrderButton;
