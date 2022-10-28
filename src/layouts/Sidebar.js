import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="index3.html" className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style="opacity: .8" /> */}
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>

            <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                <div className="os-resize-observer-host observed">
                    <div className="os-resize-observer"></div>
                </div>
                <div className="os-size-auto-observer observed">
                    <div className="os-resize-observer"></div>
                </div>
                <div className="os-content-glue"></div>
                <div className="os-padding">
                    <div className="os-viewport os-viewport-native-scrollbars-invisible">
                        <div className="os-content">
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
                                </div>
                                <div className="info">
                                    <Link to="#" className="d-block">
                                        Alexander Pierce
                                    </Link>
                                </div>
                            </div>

                            <div className="form-inline">
                                <div className="input-group" data-widget="sidebar-search">
                                    <input
                                        className="form-control form-control-sidebar"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-sidebar">
                                            <i className="fas fa-search fa-fw"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="sidebar-search-results">
                                    <div className="list-group">
                                        <Link to="#" className="list-group-item">
                                            <div className="search-title">
                                                <strong className="text-light"></strong>N
                                                <strong className="text-light"></strong>o
                                                <strong className="text-light"></strong>{" "}
                                                <strong className="text-light"></strong>e
                                                <strong className="text-light"></strong>l
                                                <strong className="text-light"></strong>e
                                                <strong className="text-light"></strong>m
                                                <strong className="text-light"></strong>e
                                                <strong className="text-light"></strong>n
                                                <strong className="text-light"></strong>t
                                                <strong className="text-light"></strong>{" "}
                                                <strong className="text-light"></strong>f
                                                <strong className="text-light"></strong>o
                                                <strong className="text-light"></strong>u
                                                <strong className="text-light"></strong>n
                                                <strong className="text-light"></strong>d
                                                <strong className="text-light"></strong>!
                                                <strong className="text-light"></strong>
                                            </div>
                                            <div className="search-path"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <nav className="mt-2">
                                <ul
                                    className="nav nav-pills nav-sidebar flex-column"
                                    data-widget="treeview"
                                    role="menu"
                                    data-accordion="false"
                                >
                                    <li className="nav-item menu-open">
                                        <ul className="nav nav-treeview">
                                            <li class="nav-item">
                                                <Link to="#" class="nav-link">
                                                    <i class="nav-icon fas fa-copy"></i>
                                                    <p>
                                                        Layout Options
                                                        <i class="fas fa-angle-left right"></i>
                                                        <span class="badge badge-info right">6</span>
                                                    </p>
                                                </Link>
                                                <ul class="nav nav-treeview">
                                                    <li class="nav-item">
                                                        <Link to="pages/layout/top-nav.html" class="nav-link">
                                                            <i class="far fa-circle nav-icon"></i>
                                                            <p>Top Navigation</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="#" class="nav-link">
                                            <i class="nav-icon fas fa-th"></i>
                                            <p>
                                                Simple Link
                                                <span class="right badge badge-danger">New</span>
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
export default Sidebar;
