import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      restaurant: {}
    }
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  componentDidMount() {
    // this.state.item = window.location.pathname.slice()
    this.getRestaurant(1);
  }
  
  getRestaurant(id) {
    axios.get(`/restaurants/${id}`)
      .then(({data}) => {
        // console.log('restaurant data', data[0])
        // console.log(data[0].OverviewChildSchema)
        this.setState({
          restaurant: data[0]
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() { 
    if (this.state.restaurant.OverviewChildSchema) {
      if (this.state.restaurant.private_dining) {
        return (
          <div>
            <div>
              <h1>{this.state.restaurant.OverviewChildSchema.name}</h1>
            </div>
            <div>
              {this.state.restaurant.aggregate_score} {this.state.restaurant.OverviewChildSchema.review_count} {this.state.restaurant.price_quantile} {this.state.restaurant.cuisine[0]}
            </div>
            <div>
              Top Tags:
              {this.state.restaurant.tags.map((tag) => {
                return (
                  <li>{tag}</li>
                )
              })}
            </div>
            <div>
              {this.state.restaurant.description}
            </div>
            <div className="row">
              <div className="column">
                <span>Private dining</span><br></br>
                <a>View details</a>
                <span>Dining style</span><br></br>
                <span>{this.state.restaurant.dining_style}</span><br></br>
                <span>Hours of operations</span><br></br>
                <span>{this.state.restaurant.hours}</span><br></br>
                <span>Phone number</span><br></br>
                <span>{this.state.restaurant.OverviewChildSchema.display_phone}</span><br></br>
                <span>Website</span><br></br>
                <span>{this.state.restaurant.OverviewChildSchema.website}</span><br></br>
                <span>Payment options</span><br></br>
                <span>{this.state.restaurant.payment_options}</span><br></br>
                <span>Dress code</span><br></br>
                <span>{this.state.restaurant.dress_code}</span><br></br>
                <span>Executive chef</span><br></br>
                <span>{this.state.restaurant.executive_chef}</span><br></br>
                <span>Catering</span><br></br>
                <span>{this.state.restaurant.catering}</span><br></br>
                <span>Private party facilities</span><br></br>
                <span>{this.state.restaurant.private_party_facilities}</span><br></br>
                <span>Private party contact</span><br></br>
                <span>{this.state.restaurant.private_party_contact_name}</span><br></br>
                <span>{this.state.restaurant.private_party_contact_number}</span><br></br>
              </div>
              <div className="column">
                <span>Neighborhood</span><br></br>
                <span>{this.state.restaurant.neighborhood}</span><br></br>
                <span>Cross street</span><br></br>
                <span>{this.state.restaurant.cross_street}</span><br></br>
                <span>Parking details</span><br></br>
                <span>{this.state.restaurant.parking_details}</span><br></br>
                <span>Public transit</span><br></br>
                <span>{this.state.restaurant.public_transit}</span><br></br>
                <span>Entertainment</span><br></br>
                <span>{this.state.restaurant.entertainment}</span><br></br>
                <span>Special events and promotions</span><br></br>
                <span>{this.state.restaurant.special_events_promotions}</span><br></br>
                <span>Additional</span><br></br>
                <span>{this.state.restaurant.additional}</span><br></br>
                <span>Private dining details</span><br></br>
                <span>{this.state.restaurant.private_dining_details}</span><br></br>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div>
              <h1 id="name">{this.state.restaurant.OverviewChildSchema.name}</h1>
              <hr/>
            </div>
            <div>{this.state.restaurant.aggregate_score} {this.state.restaurant.OverviewChildSchema.review_count} {this.state.restaurant.price_quantile} {this.state.restaurant.cuisine[0]}</div>
            <div>
              Top Tags:
              {this.state.restaurant.tags.map((tag) => {
                return (
                  <li>{tag}</li>
                )
              })}
            </div>
            <div>
              {this.state.restaurant.description}
            </div>
            <div className="row">
              <div className="column">
                <span>Dining style</span><br></br>
                <span>{this.state.restaurant.dining_style}</span><br></br>
                <span>Hours of operations</span><br></br>
                <span>{this.state.restaurant.hours}</span><br></br>
                <span>Phone number</span><br></br>
                <span>{this.state.restaurant.OverviewChildSchema.display_phone}</span><br></br>
                <span>Website</span><br></br>
                <span>{this.state.restaurant.OverviewChildSchema.website}</span><br></br>
                <span>Payment options</span><br></br>
                <span>{this.state.restaurant.payment_options}</span><br></br>
                <span>Dress code</span><br></br>
                <span>{this.state.restaurant.dress_code}</span><br></br>
                <span>Executive chef</span><br></br>
                <span>{this.state.restaurant.executive_chef}</span><br></br>
                <span>Catering</span><br></br>
                <span>{this.state.restaurant.catering}</span><br></br>
                <span>Private party facilities</span><br></br>
                <span>{this.state.restaurant.private_party_facilities}</span><br></br>
                <span>Private party contact</span><br></br>
                <span>{this.state.restaurant.private_party_contact_name}</span><br></br>
                <span>{this.state.restaurant.private_party_contact_number}</span><br></br>
              </div>
              <div className="column">
                <span>Neighborhood</span><br></br>
                <span>{this.state.restaurant.neighborhood}</span><br></br>
                <span>Cross street</span><br></br>
                <span>{this.state.restaurant.cross_street}</span><br></br>
                <span>Parking details</span><br></br>
                <span>{this.state.restaurant.parking_details}</span><br></br>
                <span>Public transit</span><br></br>
                <span>{this.state.restaurant.public_transit}</span><br></br>
                <span>Entertainment</span><br></br>
                <span>{this.state.restaurant.entertainment}</span><br></br>
                <span>Special events and promotions</span><br></br>
                <span>{this.state.restaurant.special_events_promotions}</span><br></br>
                <span>Additional</span><br></br>
                <span>{this.state.restaurant.additional}</span><br></br>
                <span>Private dining details</span><br></br>
                <span>{this.state.restaurant.private_dining_details}</span><br></br>
              </div>
            </div>
          </div>
        )
      }
    } else {
        return(
          <div></div>
        )
    }
}
} 

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
