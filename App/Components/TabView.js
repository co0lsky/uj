import React from 'react'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import styles from './Styles/TabViewStyle'

import PostGridView from './PostGridView'

export default class TabView extends React.Component {
  renderTab () {
    return this.props.categories.map((category) => {
      return (
        <PostGridView style={styles.container} onSelectPost={this.props.onSelectPost} categoryId={category.id} tabLabel={category.name} key={category.id + '_' + category.name} />
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
