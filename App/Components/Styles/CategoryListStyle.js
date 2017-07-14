import { StyleSheet } from 'react-native'
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
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  item: {
    height: Metrics.listItemHeight,
    textAlign: 'justify',
    textAlignVertical: 'center'
  }
})
