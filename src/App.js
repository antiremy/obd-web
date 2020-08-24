import React from 'react';
import axios from 'axios';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Speed from './components/Speed';
import RPM from './components/RPM';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {
        speed: '0',
        rpm: '0'
      }
    }
  }

  getInfo = () => {
    axios.get('http://127.0.0.1:5000/stats')
      .then((response) => {
        var info = response.data
        console.log(info.rpm, info.speed)
        if (info.status !== 'Car Connected') {
          this.setState({
            info: {
              speed: '0',
              rpm: '0'
            }
          })
        }
        else {
          this.setState({ info })
        }
        setTimeout(this.getInfo, 250)
      })
      .catch((error) => {
        console.log(error)
        setTimeout(this.getInfo, 500)
      })

  }

  componentDidMount() {
    this.getInfo()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/speed">
            <Speed speed={this.state.info.speed.split(' ')[0]} />
          </Route>
          <Route path="/rpm">
            <RPM rpm={this.state.info.rpm.split(' ')[0]} />
          </Route>
        </Switch>
      </Router>

    );
  }

}

export default App;
