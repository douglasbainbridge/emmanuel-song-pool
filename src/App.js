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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      return <div
        style={{
          backgroundColor: 'black',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0'
        }}
      >Loading</div>
    }
    if (this.state.error) {
      return <div
        style={{
          backgroundColor: 'black',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0'
        }}
      >{this.state.error}</div>
    }



    return (

      <Router history={history}>
        <Route path="/" render={({ location }) =>
          <div style={{ backgroundColor: 'black' }}>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to={`${process.env.PUBLIC_URL}/`}>Pre-preach</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${process.env.PUBLIC_URL}/post-preach`}>Post-preach</Link>
              </li>
            </ul>
            <button onClick={() => { this.setState({ focusSongs: !this.state.focusSongs }) }}>
              {this.state.focusSongs ? 'Show All' : 'Show Focus List'}
            </button>


            <div className="container-fluid pt-3">
              <TransitionGroup appear={true}>
                <CSSTransition
                  key={location.pathname.split('/')[1]}
                  classNames="fadeRouter"
                  timeout={150}
                >
                  <Switch location={location}>
                    <Route exact path={`${process.env.PUBLIC_URL}/`}>
                      <PrePreach
                        songs={this.state.songs}
                        focusSongs={this.state.focusSongs}
                      />
                    </Route>
                    <Route exact path={`${process.env.PUBLIC_URL}/post-preach`}>
                      <PostPreach
                        songs={this.state.songs}
                        focusSongs={this.state.focusSongs}
                      />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        } />
      </Router>

    )
  }
}
export default App;