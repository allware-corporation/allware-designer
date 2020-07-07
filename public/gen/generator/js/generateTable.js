
/** generateTable.js **/

function getColumns(data){

    var columns = [];
          
    for (var i = 0; i < data.length; i++) {
      for (var key in data[i]) {
        if (columns.indexOf(key) === -1) {
            columns.push(key);
        }
      }
    }

    return columns;
}

function filterColumns(columns, desiredColumns){
  var columnsToReturn = []

  for (var i=0; i < columns.length; i++){
    for (var j=0; j < desiredColumns.length; j++){
      if (columns[i] == desiredColumns[j]){
        columnsToReturn.push(columns[i])
        desiredColumns.splice(j, 1)
        break
      }
    }
  }

  return columnsToReturn;
}