function dateSubmitted() {

    var fromDate = new Date(document.getElementById("from").value);
    var toDate = new Date(document.getElementById("to").value);
    
    if (fromDate != "" && toDate != "") {
        d3.text("data sample.csv", function (data) {
            var parsedCSV = d3.csv.parseRows(data);
            var temp = [];
            for (i = 1; i < parsedCSV.length; i++) {
                var csvDate = formatDate(parsedCSV[i][0]);
                if (csvDate >= (fromDate) && csvDate <= (toDate)) {
                    temp.push(parsedCSV[i]);
                }
            }
            var container = d3.select("body")
                .append("table")
                .selectAll("tr")
                .data(temp).enter()
                .append("tr")

                .selectAll("td")
                .data(function (d) { return d; }).enter()
                .append("td")
                .text(function (d) { return d; });

        });
    
    }  
           
}

function formatDate(val){
    var dategiven = new Date();
    dategiven.setDate(val.split("/")[0]);
    dategiven.setMonth(val.split("/")[1] - 1);
    dategiven.setFullYear(val.split("/")[2]);
    return dategiven;
}


