import React from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'

// Components
import DummyList from '../Components/DummyList'

class DummyListPage extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title
  })

  constructor (props) {
    super(props)
    const { state } = props.navigation
    this.state = {
      data: state.params.data
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

  openCategory (category) {
    this.props.navigation.navigate('CategoryPage', {category: category})
  }

  render () {
    return (
      <DummyList data={this.state.data} onSelectCategory={category => this.openCategory(category)} onSelectPost={post => this.openDetail({post})} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DummyListPage)
