import { StackNavigator } from 'react-navigation'
import CategoryPage from '../Containers/CategoryPage'
import DetailPage from '../Containers/DetailPage'
import LaunchScreen from '../Containers/LaunchScreen'
import HomePage from '../Containers/HomePage'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
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
