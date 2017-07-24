import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes/'

// Components
import DiscoverButton from '../Components/DiscoverButton'

// Styles
import styles from './Styles/DiscoverPageStyle'

class DiscoverPage extends React.Component {
  gotoCategoryPage () {
    this.props.navigation.navigate('CategoryListPage')
  }

  gotoCountryPage () {
    this.props.navigation.navigate('DummyListPage', {title: 'Country', data: this.props.countries})
  }
  gotoMagazinePage () {
    this.props.navigation.navigate('DummyListPage', {title: 'Magazine', data: this.props.magazines})
  }

  render () {
    return (
      <View style={styles.container}>
        <DiscoverButton style={styles.button} title={'Category'} icon={'map-signs'} styles={{backgroundColor: Colors.sunny}} onPress={() => this.gotoCategoryPage()} />
        <DiscoverButton style={styles.button} title={'Country'} icon={'globe'} styles={{backgroundColor: Colors.electricBlue}} onPress={() => this.gotoCountryPage()} />
        <DiscoverButton style={styles.button} title={'Magazine'} icon={'book'} styles={{backgroundColor: Colors.princessPerfume}} onPress={() => this.gotoMagazinePage()} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.dummy.countries,
    magazines: state.dummy.magazines
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage)
