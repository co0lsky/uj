import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'
import WordpressActions from '../Redux/WordpressRedux'

import TabView from '../Components/TabView'
import MainTabBar from '../Components/MainTabBar'
import CategoryList from '../Components/CategoryList'

// Styles
import styles from './Styles/HomePageStyle'

const tabs = [
  {text: 'News', icon: 'newspaper-o'},
  {text: 'Discover', icon: 'compass'}
]

class HomePage extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  openDetail (post) {
    this.props.navigation.navigate('DetailPage', {post: post})
  }

  openCategory (category) {
    this.props.navigation.navigate('CategoryPage', {category: category})
  }

  renderContent () {
    switch (this.state.index) {
      case 0:
        return (<TabView onSelectPost={post => this.openDetail({post})} categories={this.props.channels} />)
      case 1:
        return (<CategoryList onSelectCategory={category => this.openCategory(category)} onSelectPost={post => this.openDetail({post})} />)
      case 2:
        return (<View>
          <Text>Settings</Text>
        </View>)
      default:
        return null
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderContent()}
        <MainTabBar activeTab={this.state.index} tabLabels={tabs} tabs={tabs} goToPage={(index) => this.setState({index})} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.wordpress.payload,
    channels: state.user.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(WordpressActions.wordpressRequest()),
    addChannel: channel => dispatch(UserActions.addChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
