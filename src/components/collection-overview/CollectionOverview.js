import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';
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
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);