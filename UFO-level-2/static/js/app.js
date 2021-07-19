// from data.js
var tableData = data;

// YOUR CODE HERE!

//fill the webpage with the table
//get a reference to the table body
var tbody = d3.select("tbody");


//use arrow function to updated each cell
function init() {
  tableData.forEach((alienSighting) => {
      var row = tbody.append("tr");
      Object.values(alienSighting).forEach(value => {
          var cell = row.append("td");
          cell.text(value);
      });
  });
}
// select the button that renders the data
var button = d3.selectAll("#filter-btn");

// select the form for user input
var form = d3.selectAll("form");

// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // prevent the page from reloading
  d3.event.preventDefault();

  //select the input element and get the raw HTML node
  inputElement = d3.select("#datetime");

  //get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  //filter the table with the user input value
  var filteredData = tableData.filter(table => table.datetime === inputValue);
  console.log(filteredData);

  // select the tbody element
  var tbody = d3.select("tbody");

  tbody.html("");

  filteredData.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.values(alienSighting).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
    });
  });

  //Multi criteria search 
  //filter by city

  inputElementOne = d3.select("#city");

  var inputValueOne = inputElementOne.property("value");

  console.log(inputValueOne);
  console.log(tableData);

  var filteredDataOne = tableData.filter(table => table.city === inputValueOne);
  console.log(filteredDataOne);

  filteredDataOne.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.values(alienSighting).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
    });
  });

  // filter by state
  inputElementTwo = d3.select("#state");

  var inputValueTwo = inputElementTwo.property("value");

  console.log(inputValueTwo);
  console.log(tableData);

  var filteredDataTwo = tableData.filter(table => table.state === inputValueTwo);
  console.log(filteredDataTwo);

  filteredDataTwo.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.values(alienSighting).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
    });
  });

  // filter by country
  inputElementThree = d3.select("#country");

  var inputValueThree = inputElementThree.property("value");

  console.log(inputValueThree);
  console.log(tableData);

  var filteredDataThree = tableData.filter(table => table.country === inputValueThree);
  console.log(filteredDataThree);

  filteredDataThree.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.values(alienSighting).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
    });
  });

  // filter by shape
  inputElementFour = d3.select("#shape");

  var inputValueFour = inputElementFour.property("value");

  console.log(inputValueFour);
  console.log(tableData);

  var filteredDataFour = tableData.filter(table => table.shape === inputValueFour);
  console.log(filteredDataFour);

  filteredDataFour.forEach((alienSighting) => {
    var row = tbody.append("tr");
    Object.values(alienSighting).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
  
}

init();
