import React from 'react';


function Banner(props) {
    return (
        <section className="banner">
                <div className="shape right"></div>
                <div className="container big">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="banner__left">
                                <div className="block-text">
                                    <h2 className="heading">Create and Collect <br />
                                        Trees of Life <span>NFTs</span> <br />
                                        Infinity possibilities</h2>
                                    <h1 className="heading">Ancestor Marketplace Timeline of Evolutions</h1>

                                    <a href="https://discord.com/invite/4mXg6QSyY8" className="action-btn"><span>Get Connected</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <iframe src='https://tree-component-v1.pages.dev' style={{width: 650, height: 650}} title='Tree possibilities'></iframe>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner;