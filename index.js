// Code your solution in this file!
function logDriverNames(drivers){
  for (const driver of drivers){
    console.log(driver.name);
  }
}

function logDriversByHometown(drivers, town){
  for (const driver of drivers){
    if (driver.hometown === town){
    console.log(driver.name);
  }
  }
}

function driversByRevenue(drivers){
  let sortable = [];
  for (const driver in drivers) {
      sortable.push(drivers[driver]);
   }
  let sorted = sortable.sort(function(a, b) {
      return a.revenue - b.revenue;
  });
  return sorted;
}

function driversByName(drivers){
  let sortable = [];
  for (const driver in drivers) {
      sortable.push(drivers[driver]);
   }
  let sorted = sortable.sort(function(a, b){
    return a['name'].localeCompare(b.name);
  });
  return sorted;
}

const reduceRevenues = function (agg, el, i, arr) {
  return agg + el.revenue;
};

function totalRevenue(drivers){
  return drivers.reduce(reduceRevenues, 0);
}

function averageRevenue(drivers){
  return (totalRevenue(drivers))/(drivers.length);
}
