import React from 'react'
import { connect } from 'react-redux'
import TabView from '../Components/TabView'
import WordpressActions from '../Redux/WordpressRedux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomePageStyle'

class HomePage extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.getPosts()
  }

  openDetail (post) {
    console.log('HomePage onChange')
    this.props.navigation.navigate('DetailPage', {post: post})
    // this.props.getPosts()
  }

  render () {
    return (
      <TabView style={styles.container} onSelectPost={post => this.openDetail({post})} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.wordpress.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(WordpressActions.wordpressRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
