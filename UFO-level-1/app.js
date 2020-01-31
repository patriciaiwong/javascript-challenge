// from data.js
var tableData = data;

//select the tbody to insert your data
var tbody = d3.select('tbody');

var button = d3.select("#filter-btn");

//Create a function to set up the table
function buildTable(data){

  data.forEach(element => {

    var row = tbody.append("tr");
    Object.values(element).forEach(value => {
      var cell = row.append("td");
      cell.text(value);
    });


  })

}

//Create button function
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  //filter the data using the date
  var filteredData = tableData.filter(tD => tD.datetime === inputValue);

  console.log(filteredData);

  // Then, select the table element by class name
  var tablefiltered = d3.select("tbody");
  
  // remove any children from the list to
  tablefiltered.html("");

  // append stats to the table if there is an input if there is no input print the complete data set
if(inputValue)
  buildTable(filteredData);
else
  buildTable(tableData);

  
})

buildTable(tableData);
