import React, { Component } from "react";
import { connect } from "react-redux";
class ListNoteItem extends Component {
  handleTowWork = () => {
    this.props.statusFormDisplay();

    this.props.upElementList(this.props.elementList);
  };
  render() {
    return (
      <div className="card">
        <div className="card-header" role="tab" id={"node" + this.props.index}>
          <h5 className="mb-0 text-left">
            <a
              data-toggle="collapse"
              data-parent="#accordianId"
              href={"#number" + this.props.index}
              aria-expanded="true"
              aria-controls="nodecontent1"
            >
              {this.props.title}
            </a>
            <div className="btn-group float-right">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={this.handleTowWork}
              >
                Sửa
              </button>
              <button type="button" className="btn btn-outline-danger">
                Xóa
              </button>
            </div>
          </h5>
        </div>
        <div
          id={"number" + this.props.index}
          className="collapse in"
          role="tabpanel"
          aria-labelledby={"node" + this.props.index}
        >
          <div className="card-body">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    statusFormDisplay: () => {
      dispatch({
        type: "CHECK_FORM"
      });
    },
    upElementList: element => {
      dispatch({
        type: "RECIVE_ELEMENT_LIST",
        elementRecive: element
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListNoteItem);
