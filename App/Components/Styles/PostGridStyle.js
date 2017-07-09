import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  // Half length
  half_container: {
    flex: 1,
    padding: Metrics.baseMargin,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  half_image: {
    flex: 0.6,
    width: undefined
  },
  half_text: {
    flex: 0.4,
    flexDirection: 'column'
  },
  half_title: {
    flex: 5,
    fontWeight: 'bold'
  },
  half_author: {
    flex: 2,
    color: '#989898',
    fontSize: 12
  },
  // Full length
  full_container: {
    flex: 1,
    flexDirection: 'row',
    padding: Metrics.baseMargin,
    maxHeight: 90,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  full_image: {
    flex: 0.5,
    height: undefined,
    width: undefined,
    marginRight: Metrics.baseMargin
  },
  full_text: {
    flex: 0.5,
    flexDirection: 'column'
  },
  full_title: {
    fontWeight: 'bold'
  },
  full_author: {
    color: '#aeaeae',
    fontSize: 12
  }
})
