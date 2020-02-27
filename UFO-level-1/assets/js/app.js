// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

/// FORM ////

// Select the button
var button = d3.select("#filter-btn");

    button.on("click", function(event) {
        tbody.html("");
        d3.event.preventDefault() 
// Select the input element and get the raw HTML node
   var inputElement = d3.select("#datetime");

// Get the value property of the input element
   var inputValue = inputElement.property("value");

   //console.log(inputValue);
   
   var filteredData = data.filter(UFOsighting => UFOsighting.datetime === inputValue);

   //console.log(filteredData);
   
   
   ///// PUSH THE NEW VALUES BACK TO THE FORM ////

   var filtertbody = d3.select("tbody");

    filteredData.forEach((UFOsighting) => {
    var row = filtertbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

    });
