import React from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import styles from './Styles/PostGridViewStyle'

import PostGrid from './PostGrid'

const API_URL = 'http://unlockjapan.jp/wp-json/wp/v2'

export default class PostGridView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      refreshing: false
    }
  }

  componentDidMount () {
    this.getPosts()
  }

  getPosts () {
    this.setState({refreshing: true})
    fetch(`${API_URL}/posts?categories=${this.props.categoryId}&orderby=date`)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        this.setState({data: responseJson, refreshing: false})
      })
      .catch((error) => {
        console.error(error)
        this.setState({refreshing: false})
      })
  }

  render () {
    if (!this.state.data) {
      return null
    }

    var rows = []
    var i = 0
    var odd = true
    var column
    while (i < this.state.data.length) {
      column = []
      if (!odd || !this.state.data[i + 1]) {
        if (this.state.data[i]) { column.push(<PostGrid key={i} post={this.state.data[i++]} selectedStyle='full' onSelectPost={this.props.onSelectPost} />) }
      } else {
        if (this.state.data[i]) { column.push(<PostGrid key={i} post={this.state.data[i++]} selectedStyle='half' onSelectPost={this.props.onSelectPost} />) }
        if (this.state.data[i]) { column.push(<PostGrid key={i} post={this.state.data[i++]} selectedStyle='half' onSelectPost={this.props.onSelectPost} />) }
      }

      var rowHeight = column.length === 2 ? 150 : 90
      rows.push(<View key={i} style={{maxHeight: rowHeight, flexDirection: 'row'}}>
        {column}
      </View>)
      odd = !odd
    }

    return (
      <ScrollView style={styles.container} refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={() => this.getPosts()}
        />
      }>
        <View style={styles.content}>
          {rows}
        </View>
      </ScrollView>
    )
  }
}

// // Prop type warnings
// PostGridView.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PostGridView.defaultProps = {
//   someSetting: false
// }
