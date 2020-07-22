import React, { Component, Fragment } from "react";
import { detailCall} from "./../../api-calls/api-calls";
export default class DetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: null,
      responseState: null,
      whatWeRender: <DetailIsLoading />,
    };
  }
  evaluator = () => {
  
    if (this.state.responseState.result) {
      this.setState({
        whatWeRender: <DetailIsOk data={this.state.responseState.result} />,
      });
    } else {
      this.setState({ whatWeRender: <DetailIsNotOk /> });
    }
  };

  adCaller = async (id) => {
    this.setState({ responseState: await detailCall(id) });
    this.setState({ pageId: id });
    
    this.evaluator();
  };
  componentDidMount() {
    let isolatedId = "";
    for (let i = 5; i < window.location.pathname.length; i++) {
      isolatedId += window.location.pathname[i];
    }
    this.adCaller(isolatedId);
  }
  render() {
    return (
      <div className="detail d-flex flex-column">{this.state.whatWeRender}</div>
    );
  }
}
class DetailIsOk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseState: null,
      whatWeRender: null,
    };
  }
  
  render() {
 

    return (
      <Fragment>
        <div className="card mb-3">
          <img
            className="text-white m-auto"
            src={`http://localhost:3000/images/uploads/${this.props.data.foto}`}
            alt={this.props.data.foto}
          />
          <div class="card-body">
            <h5 className="card-title">{this.props.data.nombre}</h5>
            <p className="card-text">{this.props.data.descripcion}</p>
            <p className="card-text">Precio: {this.props.data.precio} €</p>
            <p className="card-text">
              Se {this.props.data.venta ? "Vende" : "Compra"}
            </p>
          </div>
        </div>

        {this.state.whatWeRender}
      </Fragment>
    );
  }
}
class DetailIsNotOk extends Component {
  render() {
    return (
      <>
        <h1>
          No hemos encontrado nada, vuelve a la lista y pincha en el anuncio
          deseado
        </h1>
      </>
    );
  }
}
class DetailIsLoading extends Component {
  render() {
    return (
      <>
        <h1>Cargando tu resultado....</h1>
      </>
    );
  }
}


