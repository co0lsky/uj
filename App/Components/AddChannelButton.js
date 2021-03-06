import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'
import styles from './Styles/AddChannelButtonStyle'

class AddChannelButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      buttonTitle: 'Add'
    }
  }

  componentDidMount () {
    this.setState({
      buttonTitle: this.isAdded() ? 'Added' : 'Add'
    })
  }

  isAdded () {
    return this.props.channels.filter((channel) =>
        channel.name === this.props.category.name
      ).length > 0
  }

  _onPress () {
    if (!this.isAdded()) {
      this.props.addChannel(this.props.category)
      this.setState({
        buttonTitle: 'Added'
      })
    } else {
      this.props.removeChannel(this.props.category)
      this.setState({
        buttonTitle: 'Add'
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Button title={this.state.buttonTitle} onPress={() => this._onPress()} />
      </View>
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
    addChannel: channel => dispatch(UserActions.addChannel(channel)),
    removeChannel: channel => dispatch(UserActions.removeChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChannelButton)

// // Prop type warnings
// AddChannelButton.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// AddChannelButton.defaultProps = {
//   someSetting: false
// }
