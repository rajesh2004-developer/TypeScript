"use strict";
var days;
(function (days) {
    days[days["Mon"] = 0] = "Mon";
    days[days["Tue"] = 1] = "Tue";
    days[days["Wed"] = 2] = "Wed";
    days[days["Thu"] = 3] = "Thu";
    days[days["Fri"] = 4] = "Fri";
    days[days["Sat"] = 5] = "Sat";
    days[days["Sun"] = 6] = "Sun";
})(days || (days = {}));
console.log(days.Sat);
