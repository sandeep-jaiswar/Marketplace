import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="row">
        <div className="col s12">
          <nav>
            <div className="nav-wrapper white lighten-2 d-flex">
              <Link to="/" className="logo brand-logo ml-1">
                <img className="" alt="logo.png" width="58" src="logo.png" />
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/chat" className="color-black font-b">
                    Chat with Stranger
                  </Link>
                </li>
                <li>
                  <Link to="/chatroom" className="color-black font-b">
                    Chatroom
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="color-black font-b">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col s3">
          <div className="card-panel flex flex-col">
            <div className="input-field">
              <input id="input_text" placeholder="Search by Name" type="text" data-length="10" />
            </div>
            <div className="collection overflowY-scroll maxHeight-60vh">
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="new badge">4</span>Alan
              </a>
              <a href="#!" className="collection-item">
                Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="new badge">4</span>Alan
              </a>
              <a href="#!" className="collection-item">
                Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="new badge">4</span>Alan
              </a>
              <a href="#!" className="collection-item">
                Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="new badge">4</span>Alan
              </a>
              <a href="#!" className="collection-item">
                Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="new badge">4</span>Alan
              </a>
              <a href="#!" className="collection-item">
                Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="new badge">4</span>Alan
              </a>
              <a href="#!" className="collection-item">
                Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="new badge">4</span>Alan
              </a>
              <a href="#!" className="collection-item">
                Alan
              </a>
              <a href="#!" className="collection-item">
                <span className="badge"></span>Alan
              </a>
            </div>
          </div>
        </div>
        <div className="col s9">
          <div className="card-panel height-82vh"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
