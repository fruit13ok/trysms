import React, { Component } from 'react';

class App extends Component {
  // use state to store web form's input phone number and message,
  // also keep an array of messaging objects contain two way phone number and message.
  state = {
    text: {
      recipient: '',
      textmessage: ''
    },
    texts: []
  }
  // when the page start, every 10 second,
  // call getList() to request current array of text messages, update state, 
  // which reload the list of text messages.
  componentDidMount() {
    setInterval(this.getList, 10000)
  }
  // send GET request to root route to get all two way text messages,
  // call genList() update the state
  getList = () => {
    fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(resjson => {
      this.genList(resjson);
    })
    .catch(err => console.error(err))
  }
  // update state of array of text messages
  genList = (res) => {
    this.setState((prevState) => ({
      texts: res
    }));
  }
  // hangle react form inputs
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      text: {
        ...prevState.text,
        [name]: value
      }
    }))
  }
  // on send button clicked, send a GET request to send-text route,
  // attach phone nnumnber and message to url,
  // the backend will use twilio to message the recipient and store to an array.
  sendText = () => {
    //pass text message GET variables via query string
    fetch(`http://localhost:5000/send-text?recipient=${this.state.text.recipient}&textmessage=${this.state.text.textmessage}`)
    .then(res => res.json())
    .then(resjson => {
      console.log(resjson)
    })
    .catch(err => console.error(err))
  }
  // use jsx to create a web form and a list
  render() {
    return (
      <div>
        <div>
          <h2> SMS </h2>
          <label> Target Phone Number </label>
          <br />
          <input 
            value={this.state.text.recipient}
            onChange={this.handleChange} 
            name="recipient"
          />
          <br />
          <label> Your Message </label>
          <br />
          <textarea 
            rows={3} 
            value={this.state.text.textmessage} 
            onChange={this.handleChange} 
            name="textmessage"
          />
          <br />
          <button onClick={this.sendText}> Send </button>
        </div>
        <ul>
          {this.state.texts.map((text, index) => {
            return <li key={index}>from #: {text.senderNum}, message: {text.message}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
