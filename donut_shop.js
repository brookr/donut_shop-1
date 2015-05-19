( function () {
  var Shop = function(location, minCustomers, maxCustomers, avgPurchase, hoursOpen) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgPurchase = avgPurchase;
    this.hoursOpen = hoursOpen;
    this.total = 0;

    this.hourlyTotal = function() {
      var custPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      return Math.floor(custPerHour * this.avgPurchase);

    }
  }

    var hoursOpen = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

    var makeHeaders = function() {
    var table, headings, titleRow, titleText;
    table = document.getElementById('donut-table');
    headings = ["Locations", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "Totals"];

    for (var i = 0; i < headings.length; i++) {
       titleRow = document.createElement('th');
       titleText = document.createTextNode(headings[i]);
       titleRow.appendChild(titleText);
       table.appendChild(titleRow);
      }
    }



   Shop.prototype.makeTable = function() {
    var total, newRow, newData, newText, table;

    total = 0;
    table = document.getElementById('donut-table');
    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode(this.location);
    newData.appendChild(newText);
    newRow.appendChild(newData);

    for (var i = 0; i < hoursOpen.length; i++) {
      var donutsPerHour = this.hourlyTotal();
      newData = document.createElement('td');
      newText = document.createTextNode(donutsPerHour);
      newData.appendChild(newText);
      newRow.appendChild(newData);
      total += donutsPerHour;
    }

    newData = document.createElement('td');
    newText = document.createTextNode(total);
    newData.appendChild(newText);
    table.appendChild(newRow);
   }

   var locations = [];
    locations.push(downtown = new Shop("Downtown", 8, 43, 4.5));
    locations.push(capHill = new Shop("Capitol Hill", 4, 37, 2.0));
    locations.push(slu = new Shop("South Lake Union", 9, 23, 6.33));
    locations.push(wedgewood = new Shop("Wedgewood", 2, 28, 1.25));
    locations.push(ballard = new Shop("Ballard", 8, 58, 3.75));

console.log(downtown.hourlytotal);

  makeHeaders();
  downtown.makeTable();
  capHill.makeTable();
  slu.makeTable();
  wedgewood.makeTable();
  ballard.makeTable();

  } ());
