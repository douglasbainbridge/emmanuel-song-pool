import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import contentful from './config/contentful'
import processContentful from './config/processContentful'
import PrePreach from './views/PrePreach'
import PostPreach from './views/PostPreach'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullList from './views/FullList';
import SingleCheckButton from './components/SingleCheckButton';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      songs: [],
      filteredSongs: [],
      error: '',
      filterFocus: false,
      filterNew: false,
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
            filteredSongs: validatedContent,
            loading: false
          })
        }

      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false, error: 'There was an error' })
      })
  }

  runFilters() {
    this.setState({
      filteredSongs: this.state.songs.filter(s =>
        (s.focusList || !this.state.filterFocus)
        && (s.newSong || !this.state.filterNew)
      )
    })
  }

  runSort(by) {
    this.setState({
      songs: this.state.songs.sort((a, b) => {
        if (a[by] < b[by]) {
          return -1;
        }
        if (a[by] > b[by]) {
          return 1;
        }
        return 0;
      })
    }, this.runFilters)
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
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" render={({ location }) =>
          <div style={{ backgroundColor: 'black', height: '100vh', overflow: 'hidden' }}>
            <div className="d-flex flex-row"
              style={{ overflowX: 'auto', minWidth: '100%' }}>
              <Link className="nav-link" to={`${process.env.PUBLIC_URL}/`}>Pre-preach</Link>
              <Link className="nav-link" to={`${process.env.PUBLIC_URL}/post-preach`}>Post-preach</Link>
              <Link className="nav-link" to={`${process.env.PUBLIC_URL}/list`}>List</Link>
            </div>
            <div className="d-flex flex-row"
              style={{ overflowX: 'auto', minWidth: '100%' }}>
              <SingleCheckButton
                value={this.state.filterFocus}
                onChange={() => {
                  this.setState({ filterFocus: !this.state.filterFocus }, this.runFilters)
                }}
              >
                Focus List
                  </SingleCheckButton>
              <SingleCheckButton
                value={this.state.filterNew}
                onChange={() => {
                  this.setState({ filterNew: !this.state.filterNew }, this.runFilters)
                }}
              >
                New
                  </SingleCheckButton>
              <button
                onClick={() => {
                  this.runSort('title')
                }}
                className="action-btn">Sort by title</button>
              <button
                onClick={() => {
                  this.runSort('maleKey')
                }}
                className="action-btn">Sort male key</button>
              <button
                onClick={() => {
                  this.runSort('femaleKey')
                }}
                className="action-btn">Sort female key</button>
            </div>
            <div className="container-fluid" style={{ zIndex: 0 }}>
              <TransitionGroup appear={true}>
                <CSSTransition
                  key={location.pathname.split('/')[1]}
                  classNames="fadeRouter"
                  timeout={150}
                >
                  <Switch location={location}>
                    <Route exact path={`${process.env.PUBLIC_URL}/`}>
                      <PrePreach
                        songs={this.state.filteredSongs}

                      />
                    </Route>
                    <Route exact path={`${process.env.PUBLIC_URL}/post-preach`}>
                      <PostPreach
                        songs={this.state.filteredSongs}

                      />
                    </Route>
                    <Route exact path={`${process.env.PUBLIC_URL}/list`}>
                      <FullList
                        songs={this.state.filteredSongs}

                      />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        } />
      </HashRouter>

    )
  }
}
export default App;