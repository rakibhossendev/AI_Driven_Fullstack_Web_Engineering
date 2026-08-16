"use strict";
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
const offDay = Day.Friday;
// if(offDay == Day.Friday){
// }
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Moderator"] = "Moderator";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
const user1 = Roles.Guest;
console.log(user1);
