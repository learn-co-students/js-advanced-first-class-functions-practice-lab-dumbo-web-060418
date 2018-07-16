// Code your solution in this file!

/*
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(`${driver.name}`)
  })
}
*/

const logDriverNames = function (drivers) {
  drivers.forEach((driver) => console.log(`${driver.name}`))
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(`${driver.name}`)
    }
  })
}

function driversByRevenue(drivers) {
  let sorted = [...drivers]
  sorted.sort(function(a,b) {
    return a.revenue - b.revenue;
  })
  return sorted;
}

function driversByName(drivers) {
  let sorted = [...drivers]
  sorted.sort(function(a,b) {
    return a["name"].localeCompare(b["name"])
  })
  return sorted
}

function totalRevenue(drivers) {
  x = drivers.map((driver) => driver.revenue)
  return x.reduce((accumulator, currentValue) => accumulator + currentValue)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
