import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import Collection from './Collection';
import WithSpinner from '../../components/with-spinner/WithSpinner';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoaded
})

const collectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)

export default collectionContainer;