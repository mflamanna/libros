import { Link } from "react-router-dom";
import iconoEditar from "./img/editar.png"
import iconoEliminar from "./img/eliminar.png";

function BookItem ({ titol, isbn, autoria, image, descriptors }) {
    return (
      <>
        <div>
        <div className="cardBookItem card h-100 mt-3">
          <Link to = "/detailBook">
            <img className="cardImgBook card-img-top" src={image} alt ="imagen de libro"/>
          </Link>
            <ul className="cardBodyBook card-body">
              <li className="card-title"><h5>{titol}</h5></li>
              <li className="card-textauthor"><p>By {autoria}</p></li>
              <li className="card-textyear">{isbn}</li>
              <li className="card-textgenre">{descriptors}</li>
            </ul>
            <div className="contenedorIconos">
            <Link to="/modifiedBook">
              <img src={iconoEditar} className="icono"/>
            </Link>
            <img src={iconoEliminar} className="icono"/>
            </div>
          
          </div>
          </div>
        
          </>
    );
}

export default BookItem;