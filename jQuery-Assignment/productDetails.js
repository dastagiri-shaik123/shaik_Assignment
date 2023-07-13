
var products = [
    { ProductId: 1001, ProductName: 'Samsung A5', CategoryName: 'Mobiles', Description: 'This is a Samsung brand', Manufacturer: 'Samsung', Price: 30000 },
    { ProductId: 1002, ProductName: 'Lenovo Thinkpad', CategoryName: 'Laptops', Description: 'This is a Lenovo brand', Manufacturer: 'Lenovo', Price: 60000 },
    { ProductId: 1003, ProductName: 'Bottle', CategoryName: 'Water Bottles', Description: 'This is a Bottle brand', Manufacturer: 'Cello', Price: 300 },
    { ProductId: 1004, ProductName: 'Redmi note 10', CategoryName: 'Clothes', Description: 'This is a Redmi brand', Manufacturer: 'Uniqlo', Price: 2000 },
    { ProductId: 1005, ProductName: 'Realme 5 pro', CategoryName: 'Mobiles', Description: 'This is a Realme brand', Manufacturer: 'RealMe', Price: 25000 },
    { ProductId: 1006, ProductName: 'Dell Laptop', CategoryName: 'Laptops', Description: 'This is a Dell brand', Manufacturer: 'Dell', Price: 65000 },
    { ProductId: 1007, ProductName: 'Samsung S23', CategoryName: 'Mobiles', Description: 'This is a Samsung brand', Manufacturer: 'Samsung', Price: 120000 }
];

var obj = products[0];

console.log(obj);

var properties = Object.keys(obj);
console.log(properties);


function genarateTable() {
    var table = `<table class="table table-bordered table-striped" id="myTable">`;
    table += `<thead><tr>`;
    properties.forEach((header, index) => {
        table += `<th>${header}</th>`;
    });
    table += `</tr></thead>`;

    table += `<tbody>`;

    products.forEach((prod, idx) => {
        table += `<tr>`;

        properties.forEach((header, index) => {
            table += `<td>${prod[header]}</td>`;
        });

        table += `<td> <button class="button-select bg-dark text-light in-row-btn"> Select </button> </td>`;

        table += `</tr>`;
    });

    table += `</tbody>`;

    table += `</table>`;

    return table;

}



function seachTable(searchValue) {
    $('#myTable tbody tr').each(function () {
        var row = $(this);
        var match = false;

        row.find('td').each(function () {
            if($(this).text().toLowerCase().indexOf(searchValue) !== -1) {
                match = true;
                return false;
            }
        });

        if(match) {
            row.show();
        } else {
            row.hide();
        }
    });
}

function genarateRadioButtons() {
    
    var radioButtons = $('#radioButtons');
    for (var i = 0; i < properties.length; i++) {
        var radioId = 'radio' + properties[i];
        var radioButton = $('<input type="radio" name="filterRadio" id="' + radioId + '" value="'+ properties[i] +'">');
        
        var label = $('<label>').attr('for', radioId).text(properties[i]);

        radioButtons.append(radioButton).append(label);
    }
   
}

function radioButtonSearch(filter, value) {
    $('#myTable tbody tr').each(function () {
        var row = $(this);
        var cellValue = row.find('td:eq(' + getColumnIndex(filter) + ')').text().toLowerCase();

        if (cellValue.indexOf(value) !== -1) {
            row.show();
        } else {
            row.hide();
        }
    });
}


function getColumnIndex(filter) {
    var headers = $('#myTable th');
    var columnIndex = -1;

    headers.each(function (index) {
        if ($(this).text().toLowerCase() === filter.toLowerCase()) {
            columnIndex = index;
            return false;
        }
    });

    return columnIndex;
}
