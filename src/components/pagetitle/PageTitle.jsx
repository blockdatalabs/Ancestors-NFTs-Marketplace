import React from "react";

function PageTitle(props) {
  const { title } = props;
  return (
    <section className="page-title">
      <div className="shape"></div>
      <div className="shape right s3"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title__body">
              <div className="page-title__main">
                <h4 className="title">{title}</h4>

                <ul className="breacrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <p>Explore</p>
                  </li>
                  <li>
                    <p>{title}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageTitle;
