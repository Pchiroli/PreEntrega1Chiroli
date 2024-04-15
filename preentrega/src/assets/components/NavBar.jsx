import logo from "../image/logopng.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row color-header">
        <div className="col-2 d-flex align-items-center justify-content-start">
          <a href="#">
            <img src={logo} alt="LogoPB" width={80} />
          </a>
        </div>
        <div className="col-8 dancing-script-tittle text-center py-3 p-5">
          <h1>Pienso Bonito</h1>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-end">
            <CartWidget />
        </div>
      </div>
      <div className="row bg-dark">
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pantalones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Buzos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Camperas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Remeras
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
