import React from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'

import PostGridView from '../Components/PostGridView'

// Styles
import styles from './Styles/CategoryPageStyle'

class CategoryPage extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.category.name
  })

  componentDidMount () {
    this.listener = BackHandler.addEventListener('hardwareBackPress', () => this.onBackPress())
  }

  onBackPress () {
    this.props.navigation.goBack()

    return true
  }

  componentWillUnmount () {
    this.listener.remove()
  }

  openDetail (post) {
    console.log('HomePage onChange')
    this.props.navigation.navigate('DetailPage', {post: post})
  }

  render () {
    const { state } = this.props.navigation
    var category = state.params.category
    return (
      <PostGridView style={styles.container} onSelectPost={post => this.openDetail({post})} categoryId={category.id} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
