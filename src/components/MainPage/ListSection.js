import list1 from "../../img/list1.png";
import list2 from "../../img/list2.png";
import list3 from "../../img/list3.png";
import list4 from "../../img/list4.png";
import "./ListSection.css";

const ListSection = () => {
  return (
    <div className="main-page-list">
      <h1 className="list-title">What We Do</h1>
      <div className="list-imgs">
        <img src={list1} className="list-img" />
        <img src={list2} className="list-img" />
        <img src={list3} className="list-img" />
        <img src={list4} className="list-img" />
      </div>
    </div>
  );
};

export default ListSection;
