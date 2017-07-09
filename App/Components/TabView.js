import React from 'react'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import styles from './Styles/TabViewStyle'

import PostGridView from './PostGridView'

export default class TabView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [
        {id: 16, name: 'Travel'},
        {id: 36, name: 'Restaurant'},
        {id: 34, name: 'Activities'},
        {id: 41, name: 'Japanese cuisine'},
        {id: 31, name: 'Signtseeing'},
        {id: 26, name: 'Cafe'},
        {id: 12, name: 'Lifestyle'},
        {id: 20, name: 'EHIME'},
        {id: 33, name: 'Hotel'},
        {id: 35, name: 'Shopping'}
      ]
    }
  }

  renderTab () {
    return this.state.categories.map((category) => {
      return (
        <PostGridView onSelectPost={this.props.onSelectPost} categoryId={category.id} tabLabel={category.name} key={category.id} />
      )
    })
  }

  render () {
    return (
      <ScrollableTabView style={styles.container} renderTabBar={() => <ScrollableTabBar />}>
        {this.renderTab()}
      </ScrollableTabView>
    )
  }
}

// // Prop type warnings
// TabView.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// TabView.defaultProps = {
//   someSetting: false
// }
