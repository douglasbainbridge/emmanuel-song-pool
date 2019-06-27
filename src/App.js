import React, { Component } from 'react';
import './App.css';
import contentful from './config/contentful'
import processContentful from './config/processContentful'
import List from './List'

import 'bootstrap/dist/css/bootstrap.min.css';

const filterSubCat = (songs, cat, subcat) => {
  return songs.filter(s => s.flowCategories && s.flowCategories.includes(cat) && s.flowSubcategories && s.flowSubcategories.includes(subcat))
}

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
    if (this.state.loading) {
      return <div>Loading</div>
    }
    if (this.state.error) {
      return <div>{this.state.error}</div>
    }


    const callToWorshipDeclaration = filterSubCat(this.state.songs, 'Call To Worship', 'Declaration & Praise')
    const callToWorshipDraw = filterSubCat(this.state.songs, 'Call To Worship', 'Drawing Near')
    const revelationAssurance = filterSubCat(this.state.songs, 'Revelation', 'Assurance in Christ')
    return (
      <div className="container-fluid pt-5">
        <div className="d-flex flex-row">
          <div className="mx-3">
            <h2>Call to Worship</h2>
            <List title="Declaration and Praise" list={callToWorshipDeclaration} />
            <List title="Drawing Near" list={callToWorshipDraw} />
          </div>
          <div>
            <h2>Revelation</h2>
            <List title="Assurance in Christ" list={revelationAssurance} />
          </div>
        </div>

      </div>


    )
  }
}
export default App;