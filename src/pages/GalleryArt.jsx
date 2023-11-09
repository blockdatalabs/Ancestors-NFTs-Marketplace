import T1 from "../assets/images/gallery/0";

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
                <img src={T1} />
            </div>
            <div className="col-md-4">
                <img src={T1} />
            </div>
            <div className="col-md-4">
                <img src={T1} />
            </div>
            
         </div>
        </>
    )
}

export default GalleryArt;