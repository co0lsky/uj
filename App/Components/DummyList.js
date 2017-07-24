import React from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DummyListStyle'
import categoryListStyles from './Styles/CategoryListStyle'

// Components
import AddChannelButton from '../Components/AddChannelButton'

export default class DummyList extends React.Component {
  _keyExtractor = (item, index) => item.id + '_' + item.name

  _onPress (item) {
    this.props.onSelectCategory(item)
  }

  _renderItem (item) {
    return (
      <TouchableOpacity
        onPress={() => this._onPress(item)}
        style={categoryListStyles.row}>
        <View style={styles.item}>
          <Text style={styles.text} key={item.id}>{item.name}</Text>
          <AddChannelButton style={styles.button} category={{
            id: item.id,
            name: item.name
          }} />
        </View>
      </TouchableOpacity>
    )
  }

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#CED0CE'
        }}
      />
    )
  }

  render () {
    return (
      <View style={categoryListStyles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.props.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => this._renderItem(item)}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    )
  }
}

// // Prop type warnings
// DummyList.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DummyList.defaultProps = {
//   someSetting: false
// }
