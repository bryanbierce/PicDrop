import React from 'react';
import CollectionInfo from './CollectionInfo/CollectionInfo';
import { connect } from 'react-redux';
import CollectionView from './CollectionView/CollectionView';

class Collection extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3 col-md-3 col-lg-2">
          <CollectionInfo folders={this.props.folders} tags={this.props.tags}/>
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10">
          <CollectionView userPics={this.props.userPics}/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    'folders': state.folders,
    'tags': state.tags,
    'userPics': state.userPics
  }
}

export default connect(mapStateToProps)(Collection);
