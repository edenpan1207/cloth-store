import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import CollectionOverview from './CollectionOverview';
import WithSpinner from '../with-spinner/WithSpinner';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const collectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default collectionOverviewContainer;