import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const cardStyle = {
  maxWidth: "540px",
};
class AddMount extends Component {
  render() {
    return (
      <>
        <div className="card  bg-secondary mb-3" style={cardStyle}>
          <img
            className="card-img-top"
            src={`http://localhost:3000/images/uploads/${this.props.data.foto}`}
            alt={this.props.data.nombre}
          />
          <div className="card-body">
            <h2 className="card-title">{this.props.data.nombre}</h2>
            <p className="card-text">Precio: {this.props.data.precio}</p>
            <Link to={`/ads/${this.props.data._id}`}>
              <p className="btn btn-dark">Detalle</p>
            </Link>
          </div>
        </div>

      </>
    );
  }
}

class AddMount3 extends Component {
  render() {
    return null;
  }
}

function RenderOrNot(props) {
  const callDo = props.callDo;
  let toShow = [];
  if (callDo) {
    console.log("desde add-utils joselito: ", props.data.length);
    console.log(props.data);
    for (let i = 0; i < props.data.length; i++) {
      toShow.push(<AddMount key={i} data={props.data[i]} />);
    }
    return (
      <div className="mx-auto anuncios d-flex flex-wrap justify-content-around mt-0 bg-dark">
        {toShow}
      </div>
    );
  }
  return <AddMount3 />;
}

function createQueryString(name, sellOrBuy, tags, priceMin, priceMax) {
  console.log("entra por querystring");
  let queryString = "";
  if (name !== "") {
    queryString = "?nombre=" + name;
  }
  if (sellOrBuy !== "") {
    if (sellOrBuy === "sell") {
      if (queryString === "") {
        queryString = "?venta=true";
      } else {
        queryString = queryString + "&venta=true";
      }
    } else if (sellOrBuy === "buy") {
      if (queryString === "") {
        queryString = "?venta=false";
      } else {
        queryString = queryString + "&venta=false";
      }
    }
  }
  if (tags !== "") {
    if (queryString === "") {
      queryString = "?tags=" + tags;
    } else {
      queryString = queryString + "&tags=" + tags;
    }
  }
  if (priceMin !== "" || priceMax !== "") {
    if (queryString === "") {
      if (priceMin < priceMax) {
        queryString = "?precio=" + priceMin + "-" + priceMax;
      } else {
        queryString = "?precio=" + priceMax + "-" + priceMin;
      }
    } else {
      if (priceMin < priceMax) {
        queryString = queryString + "&precio=" + priceMin + "-" + priceMax;
      } else {
        queryString = queryString + "&precio=" + priceMax + "-" + priceMin;
      }
    }
  }
  console.log("desde listaADS-comp --> ", queryString);
  return queryString;
}
export { RenderOrNot, createQueryString };
