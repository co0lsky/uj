import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    height: Metrics.screenHeight / 5,
    width: 300,
    borderRadius: 3,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
