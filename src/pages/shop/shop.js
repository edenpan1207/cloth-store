import React, {Component} from 'react';
import {Route} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.action';
import CollectionOverviewContainer from '../../components/collection-overview/CollectionOverviewContainer';
import CollectionCoontainer from '../collection/CollectionContainer';

class ShopPage extends Component {
  componentDidMount() {
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
  }

  render() {
    const {match} = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionCoontainer} /> 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);