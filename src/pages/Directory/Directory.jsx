import paintings from "../../assets/paintings/lightning.jpg";
import poems from "../../assets/poems/blueprint.jpg";
import "./Directory.css";

const Directory = () => {
  return (
    <div className="directory-container">
      <div className="directory-image-container">
        <img className="directory-image" src={paintings} />
        <div className="directory-image-overlay">
          <h2>Paintings</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="directory-image-container">
        <img className="directory-image" src={poems} />
        <div className="directory-image-overlay">
          <h2>Poems</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Directory;
