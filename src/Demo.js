import React, { Component } from 'react';
import PropTypes from 'prop-types';

export function Loading () {
    return (
        <div>Loading...</div>
    )
}

export class Demo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            loading: true,
            result: '',
            trigger: false
        };
    }

    componentDidMount = async () => {
        const { steps } = this.props;
        // const search = steps.search.value;
        console.log(steps);
        // const res = await this.callIntentAPI(search);
        // this.setState({
        //     loading: false,
        //     result: res
        // });
    }

    triggerNext = () => {
        this.setState({ trigger: true }, () => {
            this.props.triggerNextStep();
        })
    }

    callIntentAPI = async (text) => {
        const response = await fetch(`http://localhost:8080/api/messages?message=${text}`, {
            'Content-Type': 'application/json'
        });
        return response.json();
    }

    render() {
        const { trigger, loading, result } = this.state;
    
        return (
          <div>
            { loading ? <Loading /> : result }
            {
              !loading &&
              <div
                style={{
                  textAlign: 'center',
                  marginTop: 20,
                }}
              >
                {
                  !trigger &&
                  <button
                    onClick={() => this.triggetNext()}
                  >
                    Search Again
                  </button>
                }
              </div>
            }
          </div>
        );
    }
}

Demo.propTypes = {
    step: PropTypes.object,
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
};
  
Demo.defaultProps = {
    step: undefined,
    steps: undefined,
    triggerNextStep: undefined,
};
  