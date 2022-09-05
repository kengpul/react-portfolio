import './Project.css'

export default function Projects() {
    return (
        <div className="container project">
            <div className="mb-5 text-start">
                <h2 className="display-4">PORTFOLIO</h2>
                <p className="text-muted">\\ Projects</p>
                <p className="text-muted">\\ Bootstrap, Javascript, NodeJs, ExpressJs, MondgoDB</p>
            </div>

            <div className="row box-container g-4 text-center text-md-start">
                <div className="col-md-6">
                    <div className="box">
                        <img className="img-fluid img-preview"
                            src="https://camo.githubusercontent.com/7463ff87087ac7194933e6d1036b73c61f1730bdc84f0c9c31eb10f304a0851e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64736a7264726577642f696d6167652f75706c6f61642f76313635303936323730312f6564616d616d612f616c6c50726f64756374735f6f706a627a732e706e67"
                            alt="onlineshop" />

                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#onlineshop">
                            <i className="fas fa-eye"></i> VIEW PROJECT
                        </button>

                        <div className="modal fade" id="onlineshop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-7 img-modal">
                                                    <img
                                                        src="https://camo.githubusercontent.com/7463ff87087ac7194933e6d1036b73c61f1730bdc84f0c9c31eb10f304a0851e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64736a7264726577642f696d6167652f75706c6f61642f76313635303936323730312f6564616d616d612f616c6c50726f64756374735f6f706a627a732e706e67"
                                                        className="img-fluid" alt="tip-calculator" />
                                                </div>
                                                <div className="col-md-5">
                                                    <h3 className="mt-3">Simple Online Shop</h3>
                                                    <div className="modal-tags">
                                                        <span>Bootstrap</span>
                                                        <span>Javascript</span>
                                                        <span>NodeJs</span>
                                                        <span>MondgoDB</span>
                                                    </div>

                                                    <h5>About</h5>

                                                    <div className="modal-about">
                                                        <p>
                                                            This is a simple online shop. it has a CRUD for cart. Add item to cart, modify the quantity
                                                            of the
                                                            item in the cart, remove item from the cart. It also have search bar to search a
                                                            specific item.
                                                        </p>
                                                    </div>

                                                    <a href="https://github.com/Kengpul/edamama" className="modal-btn">
                                                        <i className="fas fa-eye"></i> DEMO SOON!
                                                    </a>

                                                    <a href="https://github.com/Kengpul" target=" _blank" className="modal-btn">
                                                        <i className="fas fa-code"></i> CODE
                                                    </a>

                                                    <button type="button" className="btn-close border border-4 border-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box">
                        <img className="img-fluid img-preview"
                            src="https://camo.githubusercontent.com/7463ff87087ac7194933e6d1036b73c61f1730bdc84f0c9c31eb10f304a0851e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64736a7264726577642f696d6167652f75706c6f61642f76313635303936323730312f6564616d616d612f616c6c50726f64756374735f6f706a627a732e706e67"
                            alt="onlineshop" />

                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#onlineshop">
                            <i className="fas fa-eye"></i> VIEW PROJECT
                        </button>

                        <div className="modal fade" id="onlineshop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-7 img-modal">
                                                    <img
                                                        src="https://camo.githubusercontent.com/7463ff87087ac7194933e6d1036b73c61f1730bdc84f0c9c31eb10f304a0851e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64736a7264726577642f696d6167652f75706c6f61642f76313635303936323730312f6564616d616d612f616c6c50726f64756374735f6f706a627a732e706e67"
                                                        className="img-fluid" alt="tip-calculator" />
                                                </div>
                                                <div className="col-md-5">
                                                    <h3 className="mt-3">Simple Online Shop</h3>
                                                    <div className="modal-tags">
                                                        <span>Bootstrap</span>
                                                        <span>Javascript</span>
                                                        <span>NodeJs</span>
                                                        <span>MondgoDB</span>
                                                    </div>

                                                    <h5>About</h5>

                                                    <div className="modal-about">
                                                        <p>
                                                            This is a simple online shop. it has a CRUD for cart. Add item to cart, modify the quantity
                                                            of the
                                                            item in the cart, remove item from the cart. It also have search bar to search a
                                                            specific item.
                                                        </p>
                                                    </div>

                                                    <a href="https://github.com/Kengpul/edamama" className="modal-btn">
                                                        <i className="fas fa-eye"></i> DEMO SOON!
                                                    </a>

                                                    <a href="https://github.com/Kengpul" target=" _blank" className="modal-btn">
                                                        <i className="fas fa-code"></i> CODE
                                                    </a>

                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
