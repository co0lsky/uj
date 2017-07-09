import React from 'react'
import { WebView, BackHandler } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/DetailPageStyle'

class DetailPage extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: `Web`
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

  render () {
    const { state } = this.props.navigation
    var post = state.params.post.post
    return (
      <WebView
        style={styles.container}
        startInLoadingState
        source={{uri: post.link}}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
