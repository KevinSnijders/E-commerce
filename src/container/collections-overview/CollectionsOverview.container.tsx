import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelector";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";

const mapStateToProps = (state: any) => ({
  isLoading: selectIsCollectionFetching(state)
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
