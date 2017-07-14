import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const MainTabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  componentDidMount () {
    // this._listener = this.props.scrollValue.addListener(this.setAnimationValue)
  },

  setAnimationValue ({ value }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i))
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress)
        }
      })
    })
  },

  // color between rgb(59,89,152) and rgb(204,204,204)
  iconColor (progress) {
    const red = 59 + (204 - 59) * progress
    const green = 89 + (204 - 89) * progress
    const blue = 152 + (204 - 152) * progress
    return `rgb(${red}, ${green}, ${blue})`
  },

  render () {
    return <View style={[ styles.tabs, this.props.style ]}>
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity key={i} onPress={() => this.props.goToPage(i)} style={styles.tab}>
          <Icon
            name={this.props.tabLabels[i].icon}
            size={20}
            color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { this.tabIcons[i] = icon }}
          />
          <Text style={[styles.text, (this.props.activeTab === i ? styles.selected : styles.de)]}>{this.props.tabLabels[i].text}</Text>
        </TouchableOpacity>
      })}
    </View>
  }
})

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  text: {
    fontSize: 12
  },
  selected: {
    color: 'rgb(59,89,152)'
  },
  deselected: {
    color: 'rgb(204,204,204)'
  },
  tabs: {
    height: 55,
    flexDirection: 'row',
    paddingTop: 10,
    borderWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0
  }
})

export default MainTabBar
