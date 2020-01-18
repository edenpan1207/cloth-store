import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import './collection-overview.scss';

const CollectionOverview = ({collections}) => (
  <div className="collections-overview">
    {
      collections.map(({id, ...others}) => (
        <CollectionPreview key={id} {...others}  />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);