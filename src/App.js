import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'
import './App.css';
import contentful from './config/contentful'
import processContentful from './config/processContentful'
import PrePreach from './views/PrePreach'
import PostPreach from './views/PostPreach'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createHistory()

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      songs: [],
      error: '',
      focusSongs: false
    }
  }

  componentDidMount() {
    contentful.getEntries({
      content_type: 'song',
      limit: 1000
    })
      .then(content => {
        const validatedContent = processContentful(content)
        if (validatedContent.length === 0) {
          this.setState({
            error: 'There was a problem loading, please try refreshing the page',
            loading: false
          })
        } else {
          this.setState({
            songs: validatedContent,
            loading: false
          })
        }

      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false, error: 'There was an error' })
      })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>
    }
    if (this.state.error) {
      return <div>{this.state.error}</div>
    }



    return (
      <Router history={history}>
        <Route path="/" render={({ location }) =>
          <div className="container-fluid pt-3">
            <button onClick={() => { this.setState({ focusSongs: !this.state.focusSongs }) }}>
              {this.state.focusSongs ? 'Show All' : 'Show Focus List'}
            </button>
            <Link to='/'>Pre-preach</Link>
            <Link to='/post-preach'>Post-preach</Link>

            <TransitionGroup appear={true}>
              <CSSTransition
                key={location.pathname.split('/')[1]}
                classNames="fadeRouter"
                timeout={150}
              >
                <Switch location={location}>
                  <Route exact path="/">
                    <PrePreach
                      songs={this.state.songs}
                      focusSongs={this.state.focusSongs}
                    />
                  </Route>
                  <Route exact path="/post-preach">
                    <PostPreach
                      songs={this.state.songs}
                      focusSongs={this.state.focusSongs}
                    />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>

          </div>
        } />
      </Router>

    )
  }
}
export default App;