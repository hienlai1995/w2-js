"use strick";
class Datevietnam {
  constructor() {
    this.dayvn = new Date().getDay();
    this.monthvn = new Date().getMonth();
    this.yearvn = new Date().getFullYear();
    this.houer = new Date().getHours();
    this.minutevn = new Date().getMinutes();
    this.secondvn = new Date().getSeconds();
  }
  getDayvn() {
    return this.dayvn;
  }
  getMonthvn() {
    return this.monthvn;
  }
  getFullYearvn() {
    return this.yearvn;
  }
  getMinutesvn() {
    return this.minutevn;
  }
  getSecondsvn() {
    return this.secondvn;
  }
  showdate() {
    const display = document.getElementById("datevn");
    display.textContent =
      this.dayvn +
      "/" +
      this.monthvn +
      "/" +
      this.yearvn +
      "/" +
      this.houer +
      ":" +
      this.minutevn +
      " second :" +
      this.secondvn;
  }
}
const datevn = new Datevietnam();
datevn.showdate();
class hihi {
  constructor() {
    this.name = "hien0";
  }
  static hello() {
    console.log("hihi");
  }
  hello2() {
    console.log("hehe");
  }
}
const hien = new hihi();
console.log(hien.hello2());
