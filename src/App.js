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
import Home from './views/Home';
import Spinner from './img/Spinner.gif'
import Icon from './components/Icon';


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
      return <div style={{
        display: 'flex',
        flex: '1',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#030304'
      }}>
        <img height="30px" width="30px" src={Spinner} alt="Loading..." />
      </div>
    }
    if (this.state.error) {
      return <div
        style={{
          display: 'flex',
          flex: '1',
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#030304'
        }}
      >
        <div style={{ color: 'white' }}>{this.state.error}</div>
      </div>
    }



    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" />
          <Route path="/">
            <div className="d-flex flex-row"
              style={{ overflowX: 'auto', minWidth: '100%', height: '54px' }}>
              <Link className="action-btn mb-2 d-flex align-items-center"
                to={`${process.env.PUBLIC_URL}/`}><Icon icon='arrow' direction='left' /> Back</Link>
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
                New Songs
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
                className="action-btn">Sort by male key</button>
              <button
                onClick={() => {
                  this.runSort('femaleKey')
                }}
                className="action-btn">Sort by female key</button>
            </div>
          </Route>
        </Switch>
        <Route path="/" render={({ location }) =>
          <div style={{
            zIndex: 0
          }}>
            <TransitionGroup appear={true}>
              <CSSTransition
                key={location.pathname.split('/')[1]}
                classNames="fadeRouter"
                timeout={150}
              >
                <Switch location={location}>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                  <Route exact path={`${process.env.PUBLIC_URL}/pre-preach`}>
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
        } />
      </HashRouter>

    )
  }
}
export default App;