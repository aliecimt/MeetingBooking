import React from 'react';  
import axios from 'axios'; 
import '../Component/Common.css' 
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class ScheduleMeeting extends React.Component{  
    constructor(props){  
    super(props)  
    this.state = {  
    FirstName:'',  
    LastName:'',  
    Purpose:'',  
    Description:''  ,
    Datetime:'' ,
    Country:'' 
    }  
    }
    ScheduleMeeting=()=>{  

        axios.post('http://localhost:53794/Hooks/CreateMeeting', {FirstName:this.state.FirstName,LastName:this.state.LastName,  
        Purpose:this.state.Purpose, Description:this.state.Description, Datetime:this.state.Datetime, Country:this.state.Country})  
      .then(json => {  
      if(json.data.Status==='Success'){  
        console.log(json.data.Status);  
        alert("Data Save Successfully");  
      this.props.history.push('/Details')  
      }  
      else{  
      alert('Data not Saved');  
      debugger;  
      this.props.history.push('/Details')  
      }  
      }) 
      } 
      firstMethod(e) {
        const re =/^[a-zA-Z0-9]*$/;
        if (!re.test(e.key)) {
          e.preventDefault();
        }
      }
      handleChange= (e)=> {  
        this.setState({[e.target.name]:e.target.value});         
        }
        
        render() {  
            return (  
               <Container className="App">  
                <h4 className="PageHeading">Schedule Meeting Informations</h4>  
                <Form className="form">  
                  <Col>  
                    <FormGroup row>  
                      <Label for="fname" sm={2}>First Name</Label>  
                      <Col sm={10}>  
                        <Input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} placeholder="First Name" onKeyPress={(e) => this.firstMethod(e)}/>  
                      </Col>  
                    </FormGroup>  
                    <FormGroup row>  
                      <Label for="lname" sm={2}>Last Name</Label>  
                      <Col sm={10}>  
                        <Input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} placeholder="Last Name" onKeyPress={(e) => this.firstMethod(e)}/>  
                      </Col>  
                    </FormGroup>  
                    <FormGroup row>  
                      <Label for="purpose" sm={2}>Purpose</Label>  
                      <Col sm={10}>  
                        <Input type="text" name="Purpose" onChange={this.handleChange} value={this.state.Purpose} placeholder="Purpose" />  
                      </Col>  
                    </FormGroup>  
                    <FormGroup row>  
                      <Label for="description" sm={2}>Description</Label>  
                      <Col sm={10}>  
                        <Input type="textarea" name="Description" onChange={this.handleChange} value={this.state.Description} placeholder="Enter Description" />  
                      </Col>  
                    </FormGroup>  
                    <FormGroup row>  
                      <Label for="datetime" sm={2}>Date and time</Label>  
                      <Col sm={10}>  
                        <Input type="text" name="DateTime" onChange={this.handleChange} value={this.state.Datetime} placeholder="mm/dd/yyyy hh:mm" /> 
                        {/* <DatePicker selected={startdate} onChange={date => setStartDate(date)} />  */}
                      </Col>  
                    </FormGroup>  
                    <FormGroup row>  
                      <Label for="country" sm={2}>Country</Label>  
                      <Col sm={10}>  
                        <Input type="text" name="Country" onChange={this.handleChange} value={this.state.Country} placeholder="Country" />  
                      </Col>  
                    </FormGroup>  
                  </Col>  
                  <Col>  
                    <FormGroup row>  
                      <Col sm={5}>  
                      </Col>  
                      <Col sm={1}>  
                      <button type="button"  onClick={this.ScheduleMeeting} className="btn btn-success" disabled={!this.state.FirstName || !this.state.LastName}>Submit</button>  
                      </Col>  
                      <Col sm={1}>  
                        <Button color="danger">Cancel</Button>{' '}  
                      </Col>  
                      <Col sm={5}>  
                      </Col>  
                    </FormGroup>  
                  </Col>  
                </Form>  
              </Container>  
            );  
            }  
               
            }  
               
        export default ScheduleMeeting; 