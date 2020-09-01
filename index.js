// Your code here
function createEmployeeRecord(arr) {
  let obj = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return obj
}

function createEmployees(arrayOfArrays) {
  let theArray = []
  arrayOfArrays.forEach(element => {
    theArray.push(createEmployeeRecord(element))
  });
  return theArray
}

function createTimeInEvent(obj, timeStamp) {
  let hour = parseInt(timeStamp.split(' ')[1])
  let date = timeStamp.split(' ')[0]
  obj.timeInEvents.push({type: "TimeIn", hour: hour, date: date})
  return obj
}

function createTimeOutEvent(obj, timeStamp) {
  let hour = parseInt(timeStamp.split(' ')[1])
  let date = timeStamp.split(' ')[0]
  obj.timeOutEvents.push(timeOut.hour - timeIn.hour) / 100
  return result
}

function hoursWorkedOnDate(obj, timeStamp) {
  let timeIn = obj.timeInEvents.find(x => x.date === timeStamp)
  let timeOut = obj.timeOutEvents.find(x => x.date === timeStamp)
  let result = (timeOut.hour - timeIn.hour) / 100
  return result
}