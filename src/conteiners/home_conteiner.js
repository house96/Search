import React, { Component } from 'react'
import { connect } from 'react-redux'

import { artistListAll, artistList } from '../actions'
import { bindActionCreators } from 'redux'
import Artistlist from '../components/artistlist'

import Search from '../components/search'

class HomeContainer extends Component {
  componentWillMount() {
    this.props.artistListAll()
  }

  getKeywords = event => {
    let key = event.target.value
    this.props.artistList(key)
    console.log(key)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Search keywords={this.getKeywords} />
        <Artistlist artists={this.props.artists.artistList} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  artists: state.artists
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ artistListAll, artistList }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
