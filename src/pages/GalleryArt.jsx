import T0 from "../assets/images/gallery/0.jpg";
import T1 from "../assets/images/gallery/1.jpg";
import T2 from "../assets/images/gallery/2.jpg";
import T3 from "../assets/images/gallery/3.jpg";
import T7 from "../assets/images/gallery/7.jpg";
import T8 from "../assets/images/gallery/7_1.jpg";
import T9 from "../assets/images/gallery/7_2.jpg";
function GalleryArt() {
    return(
        <>
         <div className="row">
            <div className="col-md-12">
                <h4>
                    A look into new art styles <br/>
                    Sneak peek of next 40 Image generators <br/>
                    A place for the community to showcase <br/>
                </h4>
            </div>
            <div className="col-md-4">
                <img src={T1} style={{width: "90%"}}/>
            </div>
            <div className="col-md-4">
                <img src={T2} style={{width: "90%"}}/>
            </div>
            <div className="col-md-4">
                <img src={T3} style={{width: "90%"}}/>
            </div>
            <div className="col-md-4">
                <img src={T7} style={{width: "90%"}}/>
            </div>
            <div className="col-md-4">
                <img src={T8} style={{width: "90%"}}/>
            </div>
            <div className="col-md-4">
                <img src={T9} style={{width: "90%"}}/>
            </div>
         </div>
        </>
    )
}

export default GalleryArt;