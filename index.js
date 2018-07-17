const logDriverNames = (drivers) => {
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = (drivers, hometown) => {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = (drivers) => {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue
  })
}

const driversByName = (drivers) => {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = (drivers) => {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total
  }, 0)
}

const averageRevenue = (drivers) => totalRevenue(drivers) / drivers.length
