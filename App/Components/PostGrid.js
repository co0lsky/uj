import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import ConvertHtmlUnicodeToText from '../Transforms/ConvertHtmlUnicodeToText'
import styles from './Styles/PostGridStyle'

export default class PostGrid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      author: null,
      image: null,
      selectedStyle: props.selectedStyle
    }
  }

  componentDidMount () {
    fetch(this.props.post._links['wp:featuredmedia'][0].href)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        this.setState({image: responseJson.guid.rendered})
      })
      .catch((error) => {
        console.error(error)
      })

    fetch(this.props.post._links['author'][0].href)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        this.setState({author: responseJson.name})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  renderImage () {
    return this.state.image && (
    <Image
      style={styles[this.state.selectedStyle + '_image']}
      resizeMode={'center'}
      source={{uri: this.state.image}}
        />)
  }

  renderAuthor () {
    return this.state.author && (
    <Text style={styles[this.state.selectedStyle + '_author']}>{this.state.author.toUpperCase()}</Text>)
  }

  _onPressButton () {
    console.log('_onPressButton')
    this.props.onSelectPost(this.props.post)
  }

  render () {
    return (
      <TouchableOpacity
        onPress={() => this._onPressButton()}
        style={{flex: 1, height: 150}}>
        <View style={styles[this.state.selectedStyle + '_container']}>
          {this.renderImage()}
          <View style={styles[this.state.selectedStyle + '_text']}>
            <Text ellipsizeMode='tail' style={styles[this.state.selectedStyle + '_title']}>{ConvertHtmlUnicodeToText(this.props.post.title.rendered)}</Text>
            {this.renderAuthor()}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
// PostGrid.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PostGrid.defaultProps = {
//   someSetting: false
// }
