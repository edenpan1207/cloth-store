import React, {Component} from 'react';
import {Route} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Collection from '../collection/Collection';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {match, isCollectionFetching, isCollectionsLoaded} = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={props => <CollectionWithSpinner isLoading={isCollectionsLoaded} {...props} />} /> 
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);