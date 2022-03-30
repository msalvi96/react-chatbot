import React, { Component } from 'react';
import Chatbot from 'react-simple-chatbot';
import { Demo } from './Demo';

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
              id: '2',
              options: [
                { value: 1, label: 'Demographics', trigger: '3' },
                { value: 2, label: 'Number 2', trigger: '1' },
                { value: 3, label: 'Number 3', trigger: '1' },
              ],
            },
            {
              id: "3",
              component: <Demo />,
              waitAction: true,
              trigger: '1'
            },
          ]}
        />
      </div>
    )
  }
}

export default App;
