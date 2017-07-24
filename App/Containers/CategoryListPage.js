import React from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'

// Components
import CategoryList from '../Components/CategoryList'

class CategoryListPage extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: `Category`
  })

  componentDidMount () {
    this.listener = BackHandler.addEventListener('hardwareBackPress', () => this.onBackPress())
  }

  onBackPress () {
    this.props.navigation.goBack()

    return true
  }

  componentWillUnmount () {
    this.listener.remove()
  }

  openDetail (post) {
    this.props.navigation.navigate('DetailPage', {post: post})
  }

  openCategory (category) {
    this.props.navigation.navigate('CategoryPage', {category: category})
  }

  render () {
    return (
      <CategoryList onSelectCategory={category => this.openCategory(category)} onSelectPost={post => this.openDetail({post})} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListPage)
