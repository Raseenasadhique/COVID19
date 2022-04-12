import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Statedata from "./Statedata";
import axios from "axios";

class India extends Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }

  componentDidMount(){
    axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
      this.setState({data:response.data});
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12" style={{display:"flex",margin:"20px"}}>
          <img
            width="60px"
            src="https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png"
          />
          <h2 style={{marginRight:"50px",marginLeft: "15px"}}>INDIA</h2>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3" style={{marginBottom:"10px"}}>
              <Card className="bg-primary" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>{this.state.data.active}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-success" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>RECOVERED</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="bg-danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>DEATHS</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        
        
        </div>
        <div className="col-md-12">
            <Statedata/>

        </div>
      </div>
    );
  }
}
export default India;
