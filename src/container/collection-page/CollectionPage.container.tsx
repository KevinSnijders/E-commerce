import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shopSelector";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import CollectionPage from "../../pages/collection/Collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state: any) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
