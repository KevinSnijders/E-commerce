import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shopSelector";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state: any) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionPageContainer;
