import React, {Component} from 'react';
import {Route} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.action';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Collection from '../collection/Collection';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false})
    })
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={props => <CollectionWithSpinner isLoading={loading} {...props} />} /> 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);