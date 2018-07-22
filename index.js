// Code your solution in this file!
const logDriverNames = function  (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

const logDriversByHometown = function (drivers, location) {
    drivers.forEach(function (driver) {
      if (driver.hometown === location) {
        console.log(driver.name)
      }
    })
  }

  const driversByRevenue = function (drivers) {
    const revUp = drivers.slice()
    revUp.sort(function (a, b) {
      return a.revenue - b.revenue
    })
    return revUp
  }

  const driversByName = function (drivers) {
    const names = drivers.slice()
     names.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    return names
  }

  const totalRevenue = function (drivers) {
      return drivers.reduce(function (total, driver) {
        return driver.revenue + total
      }, 0)
    }

    const averageRevenue = function (drivers) {
      return totalRevenue(drivers) / drivers.length
    }
