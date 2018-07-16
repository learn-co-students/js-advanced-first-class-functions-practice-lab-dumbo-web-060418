function logDriverNames(drivers){
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location){
  const selectedDrivers = drivers.filter(driver => driver.hometown === location)
  selectedDrivers.forEach(driver => console.log(driver.name))
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a, b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers){
  const reducer = (accum, currentValue) => accum + currentValue
  const revenues = drivers.map(driver => driver.revenue)
  return revenues.reduce(reducer)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
