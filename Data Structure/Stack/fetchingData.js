let response = {
    "context": {
        "domain": "nic2004:60221",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
        "core_version": "0.9.1",
        "bap_id": "https://mock_bap.com/",
        "bap_uri": "https://mock_bap.com/beckn/",
        "bpp_id": "https://mock_bpp.com/",
        "bpp_uri": "https://mock_bpp.com/beckn/",
        "transaction_id": "1209849124",
        "message_id": "12341242343",
        "timestamp": "2021-03-23T10:00:40.065Z"
    },
    "message": {
        "catalog": {
            "bpp/descriptor": {
                "name": "Big Mobility"
            },
            "bpp/providers": [
                {
                    "id": "yellow-mobility",
                    "descriptor" : {
                        "name": "Yellow Cabs"
                    },
                    "locations": [
                        {
                            "id": "closest-suv-spot",
                            "gps": "12.9349377,77.6055586"
                        },
                        {
                            "id": "closest-sedan-spot",
                            "gps": "12.9349377,77.6055586"
                        },
                        {
                            "id": "closest-sedan-outstation",
                            "gps": "12.9349377,77.6055586"
                        }
                    ],
                    "categories": [
                        {
                            "id": "spot_booking",
                            "descriptor": {
                                "name": "Spot booking"
                            }
                        },
                        {
                            "id": "outstation",
                            "descriptor": {
                                "name": "Outstation"
                            }
                        }
                    ],
                    "items": [
                        {
                            "id": "sedan_outstation",
                            "descriptor" : {
                                "name" : "Toyota Fortuner",
                                "images" : [
                                    "https://mock_bpp.com/images/sedan-out.jpg"
                                ]
                            },
                            "category_id": "outstation",
                            "location_id": "closest-sedan-outstation",
                            "price" : {
                                "currency": "INR",
                                "value": "570"
                            },
                            "time": {
                                "label": "ETA",
                                "duration": "P17M"
                            },
                            "matched": true
                        }
                    ]
                },
                {
                    "id": "red-mobility",
                    "descriptor": {
                        "name": "Cabs 4 All"
                    },
                    "locations": [
                        {
                            "id": "closest-sedan",
                            "gps": "12.9349377,77.6055586"
                        }
                    ],
                    "categories": [
                        {
                            "id": "rental",
                            "descriptor": {
                                "name": "Rental"
                            }
                        }
                    ],
                    "items": [
                        {
                            "id": "sedan_rental",
                            "descriptor" : {
                                "name" : "Scorpio",
                                "images" : [
                                    "https://mock_bpp.com/images/sedan_rental.jpg"
                                ]
                            },
                            "category_id": "rental",
                            "location_id": "closest-sedan",
                            "price" : {
                                "currency": "INR",
                                "value": "524"
                            },
                            "time": {
                                "label": "ETA",
                                "duration": "P12M"
                            },
                            "matched": true
                        }
                    ]
                }
            ]
        }
    }
}
console.log(response)

function fetchVehicles(data) {
    const res = [];
    const stack = [];
    stack.push(data);
  
    while (stack.length > 0) {
      const currentItem = stack.pop();

      for (let key in currentItem) {
        if (key === "items") {
          for (let i = 0; i < currentItem[key].length; i++) {
            stack.push(currentItem[key][i]);
          }
        } else if (typeof currentItem[key] === "object" && currentItem[key] !== null) {
          stack.push(currentItem[key]);
        }
      }
      if (!currentItem.hasOwnProperty("items")) {
        res.push(currentItem);
      }
    }
    // console.log(res);
    // setVehicles(res);
  }
  
  fetchVehicles(response);
  
  