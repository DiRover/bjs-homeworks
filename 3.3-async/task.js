'use strickt'
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, fn, id) {
    if (id === undefined) {
      throw new Error("Id doesn't exist")      
    }
    let idExist = this.alarmCollection.some(item => item.id === id);
    if (idExist) {
      console.error("This id already exists");
      return this.alarmCollection
    }
    this.alarmCollection.push({time: time, callback: fn, id: id});
  }
  removeClock(id) {
    const arrNew = this.alarmCollection.filter(item => item.id !== id);
    if (arrNew.length !== this.alarmCollection.length) {
      this.alarmCollection = arrNew;
      return true
    } else {            
      return false
    }
  }
  getCurrentFormattedTime() {
    let date = new Date();
    let now = date.toLocaleTimeString().slice(0, 5);
    return now
  }
  start() {
    let checkClock = (call) => {
      if (call.time === this.getCurrentFormattedTime) {
        call.callback();
      }
    }    
    if (!this.timerId) {
      this.timerId = setInterval(() => {this.alarmCollection.forEach(call => checkClock(call))}, 1000);
    }
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);      
      this.timerId = null;      
    }
  }
  printAlarms() {
    this.alarmCollection.forEach(call =>  {return {time: time, callback: fn, id: id}})
  }
  clearAlarms() {
    this.stop();    
    this.alarmCollection = [];
  }
}