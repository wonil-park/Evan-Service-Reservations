/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

class Fees extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.exit = this.exit.bind(this);
  }

  toggle(event) {
    this.props.toggleNote(event.target.id);
  }

  exit(event) {
    this.props.closeModal(event.target.id);
  }

  render() {
    const p = this.props;
    const baseRent = p.startingRent - 35;
    const totalOccupants = p.adults + p.childrenSelected;
    const occupancyFee = totalOccupants * 35;
    return (
      <div id="fees">
        <div className="fee-box">
          <h4><a onClick={this.toggle} id="rent-click" className="note">Rent Due:</a></h4>
          <h4>${p.rent}</h4>
        </div>
        <div className="modal" id="rent-note">
          <div className="modal-content">
            <div id="rent-note-modal">
              <p>Rent Breakdown:</p>
              <p>Base Rent per Night: ${baseRent}</p>
              <p>(Fee per person: $35 x{totalOccupants}) Total Cost of Occupants: ${occupancyFee}</p>
            </div>
            <div className="modal-top">
              <p><a className="modal-exit-button bold" onClick={this.exit} id="rent-exit">X</a></p>
            </div>
          </div>
        </div>
        <div className="fee-box">
          <h4><a onClick={this.toggle} id="service-click" className="note">Service Fee:</a></h4>
          <h4>${p.service}</h4>
        </div>
        <div className="modal" id="service-note">
          <div className="modal-content">
            <h6>This helps us run our platform and offer services like 24/7 support on your trip.</h6>
            <div className="modal-top">
              <p><a className="modal-exit-button bold" onClick={this.exit} id="service-exit">X</a></p>
            </div>
          </div>
        </div>
        <div className="fee-box">
          <h4><a onClick={this.toggle} id="cleaning-click" className="note">Cleaning Fee:</a></h4>
          <h4>${p.cleaning}</h4>
        </div>
        <div className="modal" id="cleaning-note">
          <div className="modal-content">
            <h6>One-time fee charged by host to cover the cost of cleaning their space.</h6>
            <div className="modal-top">
              <p><a className="modal-exit-button bold" id="cleaning-exit" onClick={this.exit}>X</a></p>
            </div>
          </div>
        </div>
        <div className="fee-box">
          <h4><a onClick={this.toggle} id="occupancy-click" className="note">Occupancy Fee:</a></h4>
          <h4>${p.occupancy}</h4>
        </div>
        <div className="modal" id="occupancy-note">
          <div className="modal-content">
            <h6>Dependent on local taxes of the location you are renting in.</h6>
            <div className="modal-top">
              <p><a className="modal-exit-button bold" onClick={this.exit} id="occupancy-exit">X</a></p>
            </div>
          </div>
        </div>
        <div className="fee-box top-border">
          <h2>Total:</h2>
          <h2>${p.rent + p.service + p.cleaning + p.occupancy}</h2>
        </div>
      </div>
    );
  }
}

export default Fees;
