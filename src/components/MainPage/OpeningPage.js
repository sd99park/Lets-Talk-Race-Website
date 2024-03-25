import peacePicture from "../../img/peacePicture.png";

const OpeningPage = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={peacePicture} alt="peacePicture" className="w-2/3 lg:w-5/6" />
    </div>
  );
};

export default OpeningPage;
