import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding,
    backgroundColor: 'white'
  },
  content: {
    flex: 1,
    flexDirection: 'column'
  }
})
