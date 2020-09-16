/* eslint-disable */
import React from "react";
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { ADD_CLASSNAME } from '../../../store/classActions';

const Page = ({ heading, classes, add_classname }) => {

  add_classname();
  return (
    <div>
      {heading &&
        <h1 className="main-title"> {heading} </h1>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  className:state.className
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  add_classname : () => dispatch({type: ADD_CLASSNAME, payload: ownProps.classes})
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
