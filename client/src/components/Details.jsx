import React from "react";
import Map from "./Map.jsx";
import SymbolDining from "./symbols/Dining.jsx";
import SymbolCuisine from "./symbols/Cuisine.jsx";
import SymbolHours from "./symbols/Hours.jsx";
import SymbolPhone from "./symbols/Phone.jsx";
import SymbolWebsite from "./symbols/Website.jsx";
import SymbolPayment from "./symbols/Payment.jsx";
import SymbolDressCode from "./symbols/DressCode.jsx";
import SymbolChef from "./symbols/Chef.jsx";
import SymbolCatering from "./symbols/Catering.jsx";
import SymbolPrivateParty from "./symbols/PrivateParty.jsx";
import SymbolContact from "./symbols/Contact.jsx";
import SymbolLocation from "./symbols/Location.jsx";
import SymbolNeighborhood from "./symbols/Neighborhood.jsx";
import SymbolCrossStreet from "./symbols/CrossStreet.jsx";
import SymbolParking from "./symbols/Parking.jsx";
import SymbolPublicTransit from "./symbols/PublicTransit.jsx";
import SymbolEntertainment from "./symbols/Entertainment.jsx";
import SymbolSpecialEvents from "./symbols/SpecialEvents.jsx";
import SymbolAdditional from "./symbols/Additional.jsx";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readDetails: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      readDetails: true
    });
  }

  render() {
    if (!this.state.readDetails) {
      return (
        <div>
          <div id="table">
            <div id="section">
              <div className="row">
                <div className="column1">
                  <div className="row">
                    <div className="column2">
                      <SymbolDining />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Dining style</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.dining_style}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolCuisine />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Cuisines</span>
                      <br />
                      {this.props.restaurant.cuisine.map((food, index) => {
                        if (
                          index ===
                          this.props.restaurant.cuisine.length - 1
                        ) {
                          return (
                            <span className="sectionDescription" key={index}>
                              {food}
                            </span>
                          );
                        }
                        return (
                          <span className="sectionDescription" key={index}>
                            {food},{" "}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolHours />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Hours of operation</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.hours.map((hour, index) => {
                          return (
                            <li style={{ listStyleType: "none" }} key={index}>
                              {hour}
                            </li>
                          );
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolPhone />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Phone number</span>
                      <br />
                      <span className="sectionDescription">
                        {
                          this.props.restaurant.OverviewChildSchema
                            .display_phone
                        }
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolWebsite />
                    </div>
                    <div className="column3">
                      <div>Website</div>
                      <a className="hyperlink" href="www.amelie.com">
                        <span>
                          {this.props.restaurant.OverviewChildSchema.website}
                        </span>
                      </a>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolPayment />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Payment options</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.payment_options}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolDressCode />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Dress code</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.dress_code}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolChef />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Executive chef</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.executive_chef}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolCatering />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Catering</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.catering}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolPrivateParty />
                    </div>
                    <div className="column3">
                      <span className="sectionName">
                        Private party facilities
                      </span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.private_party_facilities}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolContact />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Private party contact</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.private_party_contact_name}
                      </span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.private_party_contact_number}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="column1">
                  <Map
                    latitude={
                      this.props.restaurant.OverviewChildSchema.coordinates
                        .latitude
                    }
                    longitude={
                      this.props.restaurant.OverviewChildSchema.coordinates
                        .longitude
                    }
                  />
                  <div className="row">
                    <div className="column2">
                      <SymbolLocation />
                    </div>
                    <div className="column3">
                      <div className="hyperlink">
                        {this.props.restaurant.OverviewChildSchema.display_address.map(
                          (address, index) => {
                            return <span key={index}>{address} </span>;
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolNeighborhood />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Neighborhood</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.neighborhood}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolCrossStreet />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Cross street</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.cross_street}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolParking />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Parking details</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.parking_details}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolPublicTransit />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Public transit</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.public_transit}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolEntertainment />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Entertainment</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.entertainment}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolSpecialEvents />
                    </div>
                    <div className="column3">
                      <span className="sectionName">
                        Special events and promotions
                      </span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.special_events_promotions}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <SymbolAdditional />
                    </div>
                    <div className="column3">
                      <span className="sectionName">Additional</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.additional}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="transparentDetails" />
          </div>
          <div id="details">
            <button onClick={this.handleClick} id="detailsBtn">
              <span id="detailsBtnWords">View all details</span>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div id="section">
          <div className="row">
            <div className="column1">
              <div className="row">
                <div className="column2">
                  <SymbolDining />
                </div>
                <div className="column3">
                  <span className="sectionName">Dining style</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.dining_style}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolCuisine />
                </div>
                <div className="column3">
                  <span className="sectionName">Cuisines</span>
                  <br />
                  {this.props.restaurant.cuisine.map((food, index) => {
                    if (index === this.props.restaurant.cuisine.length - 1) {
                      return (
                        <span className="sectionDescription" key={index}>
                          {food}
                        </span>
                      );
                    }
                    return (
                      <span className="sectionDescription" key={index}>
                        {food},{" "}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolHours />
                </div>
                <div className="column3">
                  <span className="sectionName">Hours of operation</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.hours.map((hour, index) => {
                      return (
                        <li style={{ listStyleType: "none" }} key={index}>
                          {hour}
                        </li>
                      );
                    })}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolPhone />
                </div>
                <div className="column3">
                  <span className="sectionName">Phone number</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.OverviewChildSchema.display_phone}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolWebsite />
                </div>
                <div className="column3">
                  <div>Website</div>
                  <a className="hyperlink" href={this.props.restaurant.OverviewChildSchema.website}>
                    <span>
                      {this.props.restaurant.OverviewChildSchema.website.toLowerCase()}
                    </span>
                  </a>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolPayment />
                </div>
                <div className="column3">
                  <span className="sectionName">Payment options</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.payment_options}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolDressCode />
                </div>
                <div className="column3">
                  <span className="sectionName">Dress code</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.dress_code}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolChef />
                </div>
                <div className="column3">
                  <span className="sectionName">Executive chef</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.executive_chef}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolCatering />
                </div>
                <div className="column3">
                  <span className="sectionName">Catering</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.catering}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolPrivateParty />
                </div>
                <div className="column3">
                  <span className="sectionName">Private party facilities</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.private_party_facilities}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolContact />
                </div>
                <div className="column3">
                  <span className="sectionName">Private party contact</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.private_party_contact_name}
                  </span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.private_party_contact_number}
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div className="column1">
              <Map
                latitude={
                  this.props.restaurant.OverviewChildSchema.coordinates.latitude
                }
                longitude={
                  this.props.restaurant.OverviewChildSchema.coordinates
                    .longitude
                }
              />
              <div className="row">
                <div className="column2">
                  <SymbolLocation />
                </div>
                <div className="column3">
                  <div className="hyperlink">
                    {this.props.restaurant.OverviewChildSchema.display_address.map(
                      (address, index) => {
                        return <span key={index}>{address} </span>;
                      }
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolNeighborhood />
                </div>
                <div className="column3">
                  <span className="sectionName">Neighborhood</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.neighborhood}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolCrossStreet />
                </div>
                <div className="column3">
                  <span className="sectionName">Cross street</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.cross_street}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolParking />
                </div>
                <div className="column3">
                  <span className="sectionName">Parking details</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.parking_details}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolPublicTransit />
                </div>
                <div className="column3">
                  <span className="sectionName">Public transit</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.public_transit}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolEntertainment />
                </div>
                <div className="column3">
                  <span className="sectionName">Entertainment</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.entertainment}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolSpecialEvents />
                </div>
                <div className="column3">
                  <span className="sectionName">
                    Special events and promotions
                  </span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.special_events_promotions}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <SymbolAdditional />
                </div>
                <div className="column3">
                  <span className="sectionName">Additional</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.additional}
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Details;
