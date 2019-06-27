import React, { Component } from 'react';
import './App.css';
import contentful from './config/contentful'
import processContentful from './config/processContentful'
import Song from './Song'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      songs: [],
      error: ''
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
    return (
      <div style={{
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: this.state.contentLoading ? 'black' : 'white',
        transition: 'background-color 0.5s ease-in'
      }}>
        {this.state.loading ? <div>Loading</div> : this.state.error ? <div>{this.state.error}</div> : (
          <div>
            {this.state.songs.map(s => <Song key={s.title + s.artist} song={s} />)}
          </div>
        )}
      </div>
    )
  }
}
export default App;