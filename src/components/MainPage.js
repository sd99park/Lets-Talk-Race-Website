import logo from "../img/ltrLogo.png";

const MainPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${logo})`,
          height: "33vh",
          width: "33%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>This is the main page file</h1>
        </div>
      </div>
    </>
  );
};

export default MainPage;
