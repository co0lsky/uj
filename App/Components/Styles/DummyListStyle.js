import { StyleSheet, Platform } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  item: {
    height: Metrics.listItemHeight,
    paddingTop: 7,
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    flex: 4,
    textAlign: 'justify',
    textAlignVertical: 'center',
    marginTop: (Platform.OS === 'ios') ? 8 : 0
  },
  button: {
    flex: 1
  }
})
