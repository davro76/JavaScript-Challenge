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
  
}

init();
