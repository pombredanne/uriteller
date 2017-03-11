import React from "react";
import { formatAbsolute, formatRelative } from "../timestamp";

export default class Timestamp extends React.Component {
  constructor() {
    super();

    this._interval = null;
  }

  _check(update) {
    if (update && this._interval === null) {
      this._interval = setInterval(() => {
        this._update(this.props.timestamp);
      }, 5000);
    } else if (!update && this._interval !== null) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  _update(timestamp) {
    this.setState({
      absolute: formatAbsolute(timestamp),
      relative: formatRelative(timestamp)
    });
  }

  componentWillMount() {
    this._update(this.props.timestamp);
  }

  componentDidMount() {
    this._check(this.props.update);
  }

  componentWillReceiveProps(nextProps) {
    this._check(nextProps.update);
    this._update(nextProps.timestamp);
  }

  componentWillUnmount() {
    this._check(false);
  }

  render() {
    return (
      <span>
        <span className="absolute">{this.state.absolute}</span>
        <span className="relative">{this.state.relative}</span>
      </span>
    );
  }
}

Timestamp.propTypes = {
  update: React.PropTypes.bool.isRequired,
  timestamp: React.PropTypes.number.isRequired
};
