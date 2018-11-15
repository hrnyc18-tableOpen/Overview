DROP DATABASE IF EXISTS restaurants; 
CREATE DATABASE restaurants;

\c restaurants;
CREATE TABLE overview (
  rid SERIAL PRIMARY KEY,
    name VARCHAR(50), 
    review_count INTEGER, 
    display_address VARCHAR(100), 
    display_phone VARCHAR(50), 
    website VARCHAR(50), 
    aggregate_score INTEGER, 
    price_quantile VARCHAR(100), 
    cuisine VARCHAR(100), 
    tags VARCHAR(100),  
    description VARCHAR(50),  
    private_dining  Boolean,  
    dining_style VARCHAR(100), 
    hours VARCHAR(100), 
    payment_options VARCHAR(100),  
    dress_code VARCHAR(100), 
    executive_chef VARCHAR(50), 
    catering VARCHAR(50), 
    private_party_facilities VARCHAR(50), 
    private_party_contact_name VARCHAR(50), 
    private_party_contact_number VARCHAR(50),   
    neighborhood VARCHAR(50), 
    cross_street VARCHAR(50), 
    parking_details VARCHAR(50), 
    public_transit VARCHAR(50), 
    entertainment VARCHAR(50), 
    special_events_promotions VARCHAR(50), 
    additional VARCHAR(50), 
    private_dining_details VARCHAR(50) 
)



COPY overview
FROM 'db/rest.txt'
CSV HEADER;