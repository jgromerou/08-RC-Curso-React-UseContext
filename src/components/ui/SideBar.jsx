import { Link } from "react-router-dom"


export const SideBar = () => {

    
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="../../index3.html" className="brand-link">
      <img src="/src/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <div className="sidebar">
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
            <Link className="nav-link" to={'/product'}>
              <i className="nav-icon fas fa-th"></i>
              <p> Productos</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  )
}
