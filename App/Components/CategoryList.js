import React from 'react'
import { ActivityIndicator, View, FlatList, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/CategoryListStyle'

const API_URL = 'http://unlockjapan.jp/wp-json/wp/v2'

export default class CategoryList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      refreshing: false
    }
  }

  componentDidMount () {
    this.mounted = true
    this.getCategories()
  }

  getCategories () {
    this.setState({refreshing: true})
    fetch(`${API_URL}/categories?per_page=30&hide_empty=true`)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        if (!this.mounted) return
        this.setState({data: responseJson, refreshing: false})
      })
      .catch((error) => {
        console.error(error)
        if (!this.mounted) return
        this.setState({refreshing: false})
      })
  }

  componentWillUnmount () {
    this.mounted = false
  }

  _keyExtractor = (item, index) => item.id

  _onPress (item) {
    this.props.onSelectCategory(item)
  }

  _renderItem (item) {
    return (
      <TouchableOpacity
        onPress={() => this._onPress(item)}
        style={styles.row}>
        <Text key={item.id} style={styles.item}>{item.name}</Text>
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
    if (this.state.refreshing) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => this._renderItem(item)}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    )
  }
}

// // Prop type warnings
// CategoryList.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// CategoryList.defaultProps = {
//   someSetting: false
// }
