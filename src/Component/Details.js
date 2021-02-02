import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class Details extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('http://localhost:53794/Api/Hooks/GetUserDetails')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Meeting Details</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr border="1">  
                <th>First Name</th>  
                <th>Last Name</th>  
                <th>Purpose</th>  
                <th>Description</th> 
                <th>Date and time</th> 
                <th>Country</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
            <tr >  
                <td>Rolert</td>  
                <td>Sam</td>  
                <td>Metting</td>  
                <td>meet on wednesdy</td> 
                <td>05/23/2019 10:12</td> 
                <td>Austria</td>  
                <td colSpan="4">Edit</td>  
              </tr>   
            </tbody> 
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  