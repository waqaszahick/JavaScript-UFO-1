// from data.js
var tableData = data;

// YOUR CODE HERE!

//Create table
var table = document.createElement('table');
table.setAttribute('id','ufo-table');
table.setAttribute('class','table table-striped');

//Create table head
var thead = document.createElement('thead');

//Create table head row
var tr = document.createElement('tr');

//Create table body
var tbody = document.createElement('tbody');

//Create table head list
var heads = ['Date/Time','City','State','Country','Shape','Duration','Comments'];

//Append table heads
heads.forEach(element => {
    var th = document.createElement('th');
    th.appendChild(document.createTextNode(element));
    tr.appendChild(th);
});

//Append table rows
function appendData(list){
    list.forEach(elements =>{
        var row = document.createElement('tr');
        for (var key in elements) { 
            var cell = document.createElement('td');
            var a = elements[key];
            cell.appendChild(document.createTextNode(a));
            row.appendChild(cell);
        } 
        tbody.appendChild(row);  
    });
}
thead.appendChild(tr);
table.appendChild(thead);
table.appendChild(tbody);
var tablearea = document.getElementById('table-area');
tablearea.appendChild(table);

appendData(tableData);


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    if(inputValue.trim() !== ''){
        tbody.innerHTML = "";
        
        table.removeChild(tbody);

        var filteredData = tableData.filter(element => element.datetime === inputValue);
        
        appendData(filteredData);

        table.appendChild(tbody);
    }

}