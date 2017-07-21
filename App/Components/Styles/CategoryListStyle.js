import { StyleSheet, Platform } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding,
    backgroundColor: 'white'
  },
  row: {
    paddingLeft: Metrics.baseMargin,
    height: Metrics.listItemHeight,
    borderBottomColor: '#bbb',
    borderBottomWidth: 0
  },
  item: {
    height: Metrics.listItemHeight,
    paddingTop: (Platform.OS === 'ios') ? 15 : 0,
    textAlign: 'justify',
    textAlignVertical: 'center'
  }
})
