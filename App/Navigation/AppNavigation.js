import { StackNavigator } from 'react-navigation'
import DummyListPage from '../Containers/DummyListPage'
import CategoryListPage from '../Containers/CategoryListPage'
import DiscoverPage from '../Containers/DiscoverPage'
import CategoryPage from '../Containers/CategoryPage'
import DetailPage from '../Containers/DetailPage'
import LaunchScreen from '../Containers/LaunchScreen'
import HomePage from '../Containers/HomePage'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  DummyListPage: { screen: DummyListPage },
  CategoryListPage: { screen: CategoryListPage },
  DiscoverPage: { screen: DiscoverPage },
  CategoryPage: { screen: CategoryPage },
  DetailPage: { screen: DetailPage },
  LaunchScreen: { screen: LaunchScreen },
  HomePage: { screen: HomePage }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'HomePage',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
