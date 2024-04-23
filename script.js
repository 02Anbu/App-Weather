// //header
// document.addEventListener('DOMContentLoaded', function() {

//   const dropdownCity = document.getElementById('dropdown-city');
//   const cityIcon = document.querySelector('.city-icon');
//   const currentTime = document.querySelector('.hour-minute');
//   const currentDate = document.querySelector('.date');
//   const tempC = document.querySelector('.condition b');
//   const humidity = document.querySelector('.pressure b');
//   const tempF = document.querySelectorAll('.temp')[1].querySelector('b');
//   const precipitation = document.querySelectorAll('.pressure')[1].querySelector('b');
//   const weatherTimeline = document.querySelector('.weather-timeline');
//   const layoutContainer = document.querySelector('.layout-container');
//   const nestedFlexboxes = document.querySelectorAll('.nested-flexbox');

//   // Event listener for dropdown change event
//   dropdownCity.addEventListener("change", function() {
//     const selectedCity = this.value;
//     updateBoxContainers(selectedCity);
//   });

//   // Fetching data from data.json
//   fetch('data.json')
//     .then(response => response.json())
//     .then(data => {

//       // Function to update city details
//       function updateCity(city) {
//         cityIcon.src = `Icons for cities/${city.toLowerCase()}.svg`;
//       }

//   // Function to update date and time
// function updateDateTime(dateTime) {
//   const date = new Date(dateTime);
//   const hours = date.getHours().toString().padStart(2, '0');
//   const minutes = date.getMinutes().toString().padStart(2, '0');
//   const seconds = date.getSeconds().toString().padStart(2, '0');
//   const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
//   const ampm = hours >= 12 ? 'PM' : 'AM';
//   currentTime.textContent = `${formattedHours}:${minutes}`;
//   currentDate.textContent = `${date.getDate()}-${date.toLocaleString('en-US', { month: 'short' })}-${date.getFullYear()}`;
//   // Update seconds dynamically
//   document.querySelector('.seconds').textContent = `: ${seconds}`;
// }

// // Function to start updating time every second
// function startUpdateTime() {
//   setInterval(() => {
//     const currentTime = new Date(); // Get current time
//     updateDateTime(currentTime);
//   }, 1000);
// }

// // Call the function to start updating time
// startUpdateTime();

//       // Function to update temperature
//       function updateTemperature(celsius, fahrenheit) {
//         tempC.textContent = `${celsius} `;
//         tempF.textContent = `${fahrenheit} F`;
//       }

//       // Function to update humidity
//       function updateHumidity(humidityValue) {
//         humidity.textContent = humidityValue;
//       }

//       // Function to update precipitation
//       function updatePrecipitation(precipitationValue) {
//         precipitation.textContent = precipitationValue;
//       }

//       // Function to update weather timeline
//       function updateWeatherTimeline(nextFiveHrs) {
//         const timelineCells = document.querySelectorAll('.timeline-cell');
//         const imageWrappers = document.querySelectorAll('.image-wrapper');
//         const numberElements = document.querySelectorAll('.Number');
//         const hours = ['Now', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];
//         const icons = ['cloudyIcon.svg', 'rainyIcon.svg', 'windyIcon.svg', 'rainyIcon.svg', 'windyIcon.svg', 'rainyIcon.svg', 'rainyIcon.svg'];

//         imageWrappers.forEach((wrapper, index) => {
//           wrapper.innerHTML = `<img src="Weather Icons/${icons[index]}" alt="${icons[index]}" class="weather-icon">`;
//         });

//         numberElements.forEach((element, index) => {
//           const temperature = nextFiveHrs[index];
//           element.textContent = temperature;
//         });
//       }

//       // Function to update layout based on city
//       function updateLayout(cityLayout) {
//         layoutContainer.className = `layout-container ${cityLayout}`;
//       }

//       // Function to populate nested flex boxes with city data
// function populateFlexBoxes(cityData) {
//   nestedFlexboxes.forEach((flexbox, index) => {
//     const cityName = cityData.cityName;
//     const dateAndTime = cityData.dateAndTime;
//     const temperature = cityData.temperature;
//     const humidityValue = cityData.humidity;
//     const precipitationValue = cityData.precipitation;
//     const imageSrc = `Icons for cities/${cityName.toLowerCase()}.svg`;

//     const dateTime = new Date(dateAndTime);
//     const hours = dateTime.getHours().toString().padStart(2, '0');
//     const minutes = dateTime.getMinutes().toString().padStart(2, '0');
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
//     const formattedDateTime = `${formattedHours}:${minutes} ${ampm}`;

//     flexbox.querySelector('.text').textContent = cityName;
//     flexbox.querySelector('.text1').textContent = formattedDateTime;
//     flexbox.querySelector('.text2').textContent = dateTime.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
//     flexbox.querySelector('.text3').textContent = humidityValue;
//     flexbox.querySelector('.text4').textContent = precipitationValue;
//     flexbox.querySelector('.text5').textContent = temperature;
//     flexbox.querySelector('.image').src = imageSrc;

//     // Update time dynamically in each flex box
//     const timeSpan = flexbox.querySelector('.text1');
//     setInterval(() => {
//       const currentTime = new Date();
//       const hours = currentTime.getHours().toString().padStart(2, '0');
//       const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//       const ampm = hours >= 12 ? 'PM' : 'AM';
//       const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
//       timeSpan.textContent = `${formattedHours}:${minutes} ${ampm}`;
//     }, 1000); // Update every second
//   });
// }


//       // Function to update the display of nested flex boxes based on dropdown selection
//       function updateFlexboxDisplay() {
//         const selectedValue = dropdownNumber.value;
//         if (selectedValue === 'Display Top') {
//           const topNumber = parseInt(topCitiesSelect.textContent);
//           nestedFlexboxes.forEach((flexbox, index) => {
//             if (index < topNumber) {
//               flexbox.style.display = 'block';
//             } else {
//               flexbox.style.display = 'none';
//             }
//           });
//         } else {
//           const selectedNumber = parseInt(selectedValue);
//           nestedFlexboxes.forEach((flexbox, index) => {
//             if (index < selectedNumber) {
//               flexbox.style.display = 'block';
//             } else {
//               flexbox.style.display = 'none';
//             }
//           });
//         }
//       }

//       // Event listener for dropdown change event
//       dropdownCity.addEventListener('change', function() {
//         const selectedCity = this.value.toLowerCase();
//         const cityData = data[selectedCity];
//         updateCity(cityData.cityName);
//         updateDateTime(cityData.dateAndTime);
//         updateTemperature(cityData.temperature, convertCtoF(cityData.temperature));
//         updateHumidity(cityData.humidity);
//         updatePrecipitation(cityData.precipitation);
//         updateWeatherTimeline(cityData.nextFiveHrs);
//         updateLayout(cityData.layout);
//         populateFlexBoxes(cityData);
//         updateBoxContainers(cityData.cityName); // Added this line to update box containers
//       });

//       // Initial update
//       const initialCity = dropdownCity.value.toLowerCase();
//       const initialCityData = data[initialCity];
//       updateCity(initialCityData.cityName);
//       updateDateTime(initialCityData.dateAndTime);
//       updateTemperature(initialCityData.temperature, convertCtoF(initialCityData.temperature));
//       updateHumidity(initialCityData.humidity);
//       updatePrecipitation(initialCityData.precipitation);
//       updateWeatherTimeline(initialCityData.nextFiveHrs);
//       updateLayout(initialCityData.layout);
//       populateFlexBoxes(initialCityData);
//       updateBoxContainers(initialCityData.cityName); // Added this line to update box containers
//     })
//     .catch(error => console.error('Error fetching data:', error));

//   // Helper function to convert Celsius to Fahrenheit
//   function convertCtoF(celsius) {
//     const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
//     return fahrenheit.toFixed(2);
//   }

//   // City button functionality
//   // Function to handle click events for each imghover span
//   function handleImghoverClick(cityName, iconSrc, temperature) {
//       var nestedFlexboxes = document.querySelectorAll('.nested-flexbox');
//       nestedFlexboxes.forEach(function(flexbox) {
//           // Check if the flexbox corresponds to the clicked city
//           if (flexbox.querySelector('.text').textContent.trim() === cityName) {
//               // Change icon and temperature for the matched city
//               flexbox.querySelector('.icons2').setAttribute('src', iconSrc);
//               flexbox.querySelector('.text5').textContent = temperature;
//           }
//       });
//   }

//   // Event listeners for each imghover span
//   var imghover1 = document.querySelectorAll('.imghover1 img');
//   imghover1.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('London', 'Weather Icons/sunnyIcon.svg', '25°C');
//       });
//   });

//   var imghover2 = document.querySelectorAll('.imghover2 img');
//   imghover2.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('London', 'Weather Icons/snowflakeIcon.svg', '55°C');
//       });
//   });

//   var imghover3 = document.querySelectorAll('.imghover3 img');
//   imghover3.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('London', 'Weather Icons/rainyIconBlack.svg', '65°C');
//       });
//   });

//   // Event listeners for each imghover span for Kolkata
//   var imghover1Kolkata = document.querySelectorAll('.imghover1 img');
//   imghover1Kolkata.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('Kolkata', 'Weather Icons/sunnyIcon.svg', '35°C');
//       });
//   });

//   var imghover2Kolkata = document.querySelectorAll('.imghover2 img');
//   imghover2Kolkata.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('Kolkata', 'Weather Icons/snowflakeIcon.svg', '56°C');
//       });
//   });

//   var imghover3Kolkata = document.querySelectorAll('.imghover3 img');
//   imghover3Kolkata.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('Kolkata', 'Weather Icons/rainyIconBlack.svg', '15°C');
//       });
//   });

//   // Event listeners for each imghover span for Juba
//   var imghover1Juba = document.querySelectorAll('.imghover1 img');
//   imghover1Juba.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('Juba', 'Weather Icons/sunnyIcon.svg', '45°C');
//       });
//   });

//   var imghover2Juba = document.querySelectorAll('.imghover2 img');
//   imghover2Juba.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('Juba', 'Weather Icons/snowflakeIcon.svg', '55°C');
//       });
//   });

//   var imghover3Juba = document.querySelectorAll('.imghover3 img');
//   imghover3Juba.forEach(function(image) {
//       image.addEventListener('click', function() {
//           handleImghoverClick('Juba', 'Weather Icons/rainyIconBlack.svg', '85°C');
//       });
//   });

// });


document.addEventListener('DOMContentLoaded', function() {

  const dropdownCity = document.getElementById('dropdown-city');
  const cityIcon = document.querySelector('.city-icon');
  const currentTime = document.querySelector('.hour-minute');
  const currentDate = document.querySelector('.date');
  const tempC = document.querySelector('.condition b');
  const humidity = document.querySelector('.pressure b');
  const tempF = document.querySelectorAll('.temp')[1].querySelector('b');
  const precipitation = document.querySelectorAll('.pressure')[1].querySelector('b');
  const weatherTimeline = document.querySelector('.weather-timeline');
  const layoutContainer = document.querySelector('.layout-container');
  const nestedFlexboxes = document.querySelectorAll('.nested-flexbox');

 
// Function to update box containers based on the selected city
function updateBoxContainers(cityName) {
  const boxes = document.querySelectorAll(".boxes");
  boxes.forEach(box => {
    const country = box.querySelector(".country");
    const box1 = box.querySelector(".box1");
    const degree = box.querySelector(".degree");
    const degree1 = box.querySelector(".degree1");
    
    // Change box1 value to match the selected city and time
    let time;
    if (cityName.toLowerCase() === "juba") {
      box1.textContent = `${cityName}, 9:10 AM`;
      degree.textContent = "30°C";
      degree1.textContent = "89%";
    } else if (cityName.toLowerCase() === "kolkata") {
      box1.textContent = `${cityName}, 8:05 AM`;
      degree.textContent = "38°C";
      degree1.textContent = "53%";
    } else {
      // Default values if city is neither Juba nor Kolkata
      box1.textContent = `${cityName}, 10:10 AM`;
      degree.textContent = "55°C";
      degree1.textContent = "96%";
    }
  });
}


  // Event listener for dropdown change event
  dropdownCity.addEventListener("change", function() {
    const selectedCity = this.value;
    updateBoxContainers(selectedCity);
  });

  // Fetching data from data.json
  fetch('data.json')
    .then(response => response.json())
    .then(data => {

      // Function to update city details
      function updateCity(city) {
        cityIcon.src = `Icons for cities/${city.toLowerCase()}.svg`;
      }

      // // Function to update date and time
      function updateDateTime(dateTime) {
        const date = new Date(dateTime);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        currentTime.textContent = `${formattedHours}:${minutes}`;
        currentDate.textContent = `${date.getDate()}-${date.toLocaleString('en-US', { month: 'short' })}-${date.getFullYear()}`;
        // Update seconds dynamically
        document.querySelector('.seconds').textContent = `: ${seconds}`;
      }

      // Function to start updating time every second
      function startUpdateTime() {
        setInterval(() => {
          const currentTime = new Date(); // Get current time
          updateDateTime(currentTime);
        }, 1000);
      }

      // Call the function to start updating time
      startUpdateTime();

      // Function to update temperature
      function updateTemperature(celsius, fahrenheit) {
        tempC.textContent = `${celsius} `;
        tempF.textContent = `${fahrenheit} F`;
      }

      // Function to update humidity
      function updateHumidity(humidityValue) {
        humidity.textContent = humidityValue;
      }

      // Function to update precipitation
      function updatePrecipitation(precipitationValue) {
        precipitation.textContent = precipitationValue;
      }

      // Function to update weather timeline
      function updateWeatherTimeline(nextFiveHrs) {
        const timelineCells = document.querySelectorAll('.timeline-cell');
        const imageWrappers = document.querySelectorAll('.image-wrapper');
        const numberElements = document.querySelectorAll('.Number');
        const hours = ['Now', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];
        const icons = ['cloudyIcon.svg', 'rainyIcon.svg', 'windyIcon.svg', 'rainyIcon.svg', 'windyIcon.svg', 'rainyIcon.svg', 'rainyIcon.svg'];

        imageWrappers.forEach((wrapper, index) => {
          wrapper.innerHTML = `<img src="Weather Icons/${icons[index]}" alt="${icons[index]}" class="weather-icon">`;
        });

        numberElements.forEach((element, index) => {
          const temperature = nextFiveHrs[index];
          element.textContent = temperature;
        });
      }

      // Function to update layout based on city
      function updateLayout(cityLayout) {
        layoutContainer.className = `layout-container ${cityLayout}`;
      }

      // Function to populate nested flex boxes with city data
      function populateFlexBoxes(cityData) {
        nestedFlexboxes.forEach((flexbox, index) => {
          const cityName = cityData.cityName;
          const dateAndTime = cityData.dateAndTime;
          const temperature = cityData.temperature;
          const humidityValue = cityData.humidity;
          const precipitationValue = cityData.precipitation;
          const imageSrc = `Icons for cities/${cityName.toLowerCase()}.svg`;

          const dateTime = new Date(dateAndTime);
          const hours = dateTime.getHours().toString().padStart(2, '0');
          const minutes = dateTime.getMinutes().toString().padStart(2, '0');
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
          const formattedDateTime = `${formattedHours}:${minutes} ${ampm}`;

          flexbox.querySelector('.text').textContent = cityName;
          flexbox.querySelector('.text1').textContent = formattedDateTime;
          flexbox.querySelector('.text2').textContent = dateTime.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
          flexbox.querySelector('.text3').textContent = humidityValue;
          flexbox.querySelector('.text4').textContent = precipitationValue;
          flexbox.querySelector('.text5').textContent = temperature;
          flexbox.querySelector('.image').src = imageSrc;

          // Update time dynamically in each flex box
          const timeSpan = flexbox.querySelector('.text1');
          setInterval(() => {
            const currentTime = new Date();
            const hours = currentTime.getHours().toString().padStart(2, '0');
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
            timeSpan.textContent = `${formattedHours}:${minutes} ${ampm}`;
          }, 1000); // Update every second
        });
      }

      // Function to update the display of nested flex boxes based on dropdown selection
      function updateFlexboxDisplay() {
        const selectedValue = dropdownNumber.value;
        if (selectedValue === 'Display Top') {
          const topNumber = parseInt(topCitiesSelect.textContent);
          nestedFlexboxes.forEach((flexbox, index) => {
            if (index < topNumber) {
              flexbox.style.display = 'block';
            } else {
              flexbox.style.display = 'none';
            }
          });
        } else {
          const selectedNumber = parseInt(selectedValue);
          nestedFlexboxes.forEach((flexbox, index) => {
            if (index < selectedNumber) {
              flexbox.style.display = 'block';
            } else {
              flexbox.style.display = 'none';
            }
          });
        }
      }

      // Event listener for dropdown change event
      dropdownCity.addEventListener('change', function() {
        const selectedCity = this.value.toLowerCase();
        const cityData = data[selectedCity];
        updateCity(cityData.cityName);
        updateDateTime(cityData.dateAndTime);
        updateTemperature(cityData.temperature, convertCtoF(cityData.temperature));
        updateHumidity(cityData.humidity);
        updatePrecipitation(cityData.precipitation);
        updateWeatherTimeline(cityData.nextFiveHrs);
        updateLayout(cityData.layout);
        populateFlexBoxes(cityData);
        updateBoxContainers(cityData.cityName); // Added this line to update box containers
      });

      // Initial update
      const initialCity = dropdownCity.value.toLowerCase();
      const initialCityData = data[initialCity];
      updateCity(initialCityData.cityName);
      updateDateTime(initialCityData.dateAndTime);
      updateTemperature(initialCityData.temperature, convertCtoF(initialCityData.temperature));
      updateHumidity(initialCityData.humidity);
      updatePrecipitation(initialCityData.precipitation);
      updateWeatherTimeline(initialCityData.nextFiveHrs);
      updateLayout(initialCityData.layout);
      populateFlexBoxes(initialCityData);
      updateBoxContainers(initialCityData.cityName); // Added this line to update box containers
    })
    .catch(error => console.error('Error fetching data:', error));

  // Helper function to convert Celsius to Fahrenheit
  function convertCtoF(celsius) {
    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    return fahrenheit.toFixed(2);
  }

  // City button functionality
  // Function to handle click events for each imghover span
  function handleImghoverClick(cityName, iconSrc, temperature) {
      var nestedFlexboxes = document.querySelectorAll('.nested-flexbox');
      nestedFlexboxes.forEach(function(flexbox) {
          // Check if the flexbox corresponds to the clicked city
          if (flexbox.querySelector('.text').textContent.trim() === cityName) {
              // Change icon and temperature for the matched city
              flexbox.querySelector('.icons2').setAttribute('src', iconSrc);
              flexbox.querySelector('.text5').textContent = temperature;
          }
      });
  }

  // Event listeners for each imghover span
  var imghover1 = document.querySelectorAll('.imghover1 img');
  imghover1.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('London', 'Weather Icons/sunnyIcon.svg', '25°C');
      });
  });

  var imghover2 = document.querySelectorAll('.imghover2 img');
  imghover2.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('London', 'Weather Icons/snowflakeIcon.svg', '55°C');
      });
  });

  var imghover3 = document.querySelectorAll('.imghover3 img');
  imghover3.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('London', 'Weather Icons/rainyIconBlack.svg', '65°C');
      });
  });

  // Event listeners for each imghover span for Kolkata
  var imghover1Kolkata = document.querySelectorAll('.imghover1 img');
  imghover1Kolkata.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('Kolkata', 'Weather Icons/sunnyIcon.svg', '35°C');
      });
  });

  var imghover2Kolkata = document.querySelectorAll('.imghover2 img');
  imghover2Kolkata.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('Kolkata', 'Weather Icons/snowflakeIcon.svg', '56°C');
      });
  });

  var imghover3Kolkata = document.querySelectorAll('.imghover3 img');
  imghover3Kolkata.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('Kolkata', 'Weather Icons/rainyIconBlack.svg', '15°C');
      });
  });

  // Event listeners for each imghover span for Juba
  var imghover1Juba = document.querySelectorAll('.imghover1 img');
  imghover1Juba.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('Juba', 'Weather Icons/sunnyIcon.svg', '45°C');
      });
  });

  var imghover2Juba = document.querySelectorAll('.imghover2 img');
  imghover2Juba.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('Juba', 'Weather Icons/snowflakeIcon.svg', '55°C');
      });
  });

  var imghover3Juba = document.querySelectorAll('.imghover3 img');
  imghover3Juba.forEach(function(image) {
      image.addEventListener('click', function() {
          handleImghoverClick('Juba', 'Weather Icons/rainyIconBlack.svg', '85°C');
      });
  });

});

