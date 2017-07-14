import React from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'

import PostGridView from '../Components/PostGridView'
import AddChannelButton from '../Components/AddChannelButton'

// Styles
import styles from './Styles/CategoryPageStyle'

class CategoryPage extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.category.name,
    headerRight: <AddChannelButton category={{
      id: navigation.state.params.category.id,
      name: navigation.state.params.category.name
    }} />
  })

  constructor (props) {
    super(props)

    const { state } = props.navigation
    this.state = {
      category: state.params.category
    }
  }

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
    this.props.navigation.navigate('DetailPage', {post: post})
  }

  render () {
    return (
      <PostGridView style={styles.container} onSelectPost={post => this.openDetail({post})} categoryId={this.state.category.id} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.user.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChannel: channel => dispatch(UserActions.addChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
