"use strict";
//union
let score = 33;
let folly = { name: 'folly', id: 222 };
folly = { username: 'folly', id: 222 };
const data = [1, 2, 3];
const data1 = ["1", "2", "3"];
const data3 = ["1", "2", "3", 4, 5]; //! can contain both string and number array
const data5 = ["1", "2", "3", 4, 5]; //! loose
const data4 = ["1", "2", "3"]; //! can only contain string array or number array
const pie = 314; //! strict
let seatAllotment; //!strict
