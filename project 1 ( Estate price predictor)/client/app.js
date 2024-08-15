function changeImage() {
    const bhkValue = document.getElementById('bhk-dropdown').value;
    const imageElement = document.getElementById('bhk-image');

    // Define the image sources based on BHK value
    const images = {
        '1': './images/1bhk.png', // Image for 1 BHK
        '2': './images/2-3 bhk.png', // Image for 2 BHK
        '3': './images/2-3 bhk.png', // Image for 3 BHK (default)
        '4': './images/4-5 bhk.png', // Image for 4 BHK
        '5': './images/4-5 bhk.png', // Image for 5 BHK
        '6': './images/5_plus bhk.png'  // Image for 6 BHK
    };

    // Change the image source based on the selected BHK value
    imageElement.src = images[bhkValue];
}

function getBathValue() {
    var uiBathrooms = document.getElementsByName("bathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getBHKValue() {
    var uiBHK = document.getElementsByName("bhk");
    for(var i in uiBHK) {
      if(uiBHK[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("area");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("locations");
    var estPrice = document.getElementById("estimated_price");
  
    var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    },function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h3>" + "Estimated price: " + data.estimated_price.toString() + " Lakh</h3>";
        console.log(status);
    });
}


const onPageLoad = () => {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
    $.get(url,function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("locations");
            $('#locations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#locations').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;