
import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className="content-wrapper">

            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Starter Page</h1>
                        </div>

                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                <li className="breadcrumb-item active">Starter Page</li>
                            </ol>
                        </div>

                    </div>

                </div>

            </div>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>

                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>

                                    <Link href="#" className="card-link">Card link</Link>
                                    <Link href="#" className="card-link">Another link</Link>
                                </div>
                            </div>

                            <div className="card card-primary card-outline">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>

                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <Link href="#" className="card-link">Card link</Link>
                                    <Link href="#" className="card-link">Another link</Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="m-0">Featured</h5>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Special title treatment</h6>

                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>

                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h5 className="m-0">Featured</h5>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">Special title treatment</h6>

                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Dashboard;