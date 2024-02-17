import waitinRoom from "../images/slider_1.jpg";
const Adding = () => {
  return (
    <div className="adding">
      <div className="">
        <img
          src={waitinRoom}
          alt="firstImage"
          className="w-full h-80 object-cover"
          style={{ marginTop: "8.8vw" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-4xl mb-20 mr-10">TENANT WANT ADS</p>
        </div>
      </div>
    </div>
  );
};

export default Adding;
