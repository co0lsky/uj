import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/DiscoverButtonStyle'

export default class DiscoverButton extends React.Component {
  _onPress () {
    this.props.onPress()
  }

  render () {
    return (
      <TouchableOpacity style={[styles.container, this.props.styles]} onPress={() => this._onPress()}>
        <View>
          <Text>{this.props.title}</Text>
          <Icon
            name={this.props.icon}
            size={50} />
        </View>
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
// DiscoverButton.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DiscoverButton.defaultProps = {
//   someSetting: false
// }
