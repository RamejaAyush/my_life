import "../styles/Ind.css";

const Ind = ({ name, img_url, desc, preview_url, github_url }) => {
 return (
  <div className="pro-box">
   <div className="pro-img">
    <img src={img_url} alt={name} />
   </div>
   <div className="pro-details">
    <div className="pro-name">
     <h1>{name}</h1>
    </div>
    <div className="pro-desc">
     <p>{desc}</p>
    </div>
    <div className="pro-btns">
     <a href={preview_url}>See Preview</a>
     <a href={github_url}>Source Code</a>
    </div>
   </div>
  </div>
 );
};

export default Ind;
