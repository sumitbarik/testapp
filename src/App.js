import React from 'react';
import './App.css';
import axios from 'axios';
// import rp from 'request-promise';
// rp = require("request-promise");

class App extends React.Component{
  state = {
    msisdn:"",
    data: []
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    // const resp = await axios.get(`http://localhost:9080/topics`);
    // const resp = this.callBootToGetTopics();
    // this.props.onSubmit();
    // console.log(JSON.stringify(resp));
    this.setState({ data: 'Sumit' });
  };

  handleChange = async (event) => {    
    this.setState({msisdn: event.target.value});  
  }

//   options = {
//     uri: "http://localhost:8080/topics",
//     headers: {
//       "User-Agent": "Request-Promise",
//       Accepts: "application/json"
//     },
//     json: true // Automatically parses the JSON string in the response
//   };

//  callBootToGetTopics = async () => {
//     var topics = null;
//     return rp(options)
//       .then(function(err, data) {
//         if(err){return err;}
//         if (data) {
//           topics = JSON.stringify(data);
//         }
//         return topics;
//       })
//       .catch(function(err) {
//         console.log("API call failed!!" +err);
//       });
//   }

  // componentDidMount() {
  //   fetch(axios.get('http://localhost:9080/topics'))
  //   .then( res =>
  //     {
  //       this.setState({data: JSON.stringify(res)})
  //     });
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>MSISDN: </label>
          <input type="text" placeholder="Enter MSISDN Number" value={this.state.msisdn} onChange={this.handleChange} required />
          <input type="submit" value="Submit!"></input>
        </div>
          <div id="msisdnData">{this.state.data}</div>
      </form>
      );
    }
}

export default App;
