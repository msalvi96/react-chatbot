import React, { Component } from 'react';
import Chatbot from 'react-simple-chatbot';

class App extends Component {
  state = {
    opened: false
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened });
  }

  render() {
    const { opened } = this.state;
    return (
      <div className="App">
        <Chatbot
          floating={true}
          opened={opened}
          toggleFloating={this.toggleFloating}
          steps={[
            {
              id: "1",
              message: "Hello. I am a Virtual Assistant. I am still learning so try asking me a few questions",
              trigger: '2'
            },
            {
              id: "2",
              user: true,
              end: false
            }
          ]}
        />
      </div>
    )
  }
}

export default App;
