import React from 'react'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import styles from './Styles/TabViewStyle'

import PostGridView from './PostGridView'

export default class TabView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [
        {id: 46, name: 'Top'},
        {id: 40, name: 'Event'},
        {id: 42, name: 'Food'},
        {id: 31, name: 'Signtseeing'},
        {id: 12, name: 'Lifestyle'},
        {id: 35, name: 'Shopping'},
        {id: 43, name: 'Carrer'}
      ]
    }
  }

  renderTab () {
    return this.state.categories.map((category) => {
      return (
        <PostGridView style={styles.container} onSelectPost={this.props.onSelectPost} categoryId={category.id} tabLabel={category.name} key={category.id} />
      )
    })
  }

  render () {
    return (
      <ScrollableTabView style={styles.container} renderTabBar={() => <ScrollableTabBar style={styles.tabBar} />}>
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
