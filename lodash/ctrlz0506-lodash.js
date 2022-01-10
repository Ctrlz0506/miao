var ctrlz0506 = {
  chunk: function (array, size) {
    let crr = array;
    let result = [];
    let num = Math.ceil(array.length / size);
    let transfer = [];

    for (k = 0; k < num; k++) {
      if (size > crr.length) size = crr.length;
      for (i = 0; i < size; i++) {
        transfer.push(crr[i]);
      }
      result.push(transfer);
      crr.splice(0, i);
      transfer = [];
    }
    return result;
  },
  compact: function (arr) {
    let brr = arr;
    let crr = [];
    for (i = 0; i < brr.length; i++) {
      if (!brr[i]) continue;
      crr.push(brr[i]);
    }
  },
  drop: function (arr, n = 1) {
    let brr = [];
    for (i = n; i < arr.length; i++) {
      brr.push(arr[i]);
    }
    return brr;
  },
  dropRight: function (arr, n = 1) {
    let len = arr.length - n;
    let result = [];
    for (i = 0; i < len; i++) {
      result.push(arr[i]);
    }
    return result;
  },
  dropRightWhile: function (arr, f) {
    for (i = arr.length - 1; i >= 0; i--) {
      if (f(arr[i], index, arr)) {
        arr.splice(i, arr.length - i);
        break;
      }
    }
    let result = [];
    for (i = 0; i < arr.length; i++) {
      result.push(arr[i].user);
    }
    return result;
  },
  dropWhile: function () {},
  fill: function (arr, value, start, end) {
    if (!start && !end) {
      start = 0;
      end = arr.length;
    }
    for (i = start; i < end; i++) {
      arr[i] = value;
    }
    return arr;
  },
  findIndex: function () {},
  findLastIndex: function () {},
  flatten: function () {},
  flattenDeep: function () {},
  flattenDepth: function () {},
  fromPairs: function (arr) {
    let obj = {};
    arr.forEach(function (item) {
      obj[item[0]] = item[1];
    });
    return obj;
  },
  head: function (arr) {
    return arr[0];
  },
  indexOf: function (arr, value, fromIndex) {
    if (!fromIndex) fromIndex = 0;
    for (i = fromIndex; i < arr.length; i++) {
      if (arr[i] == value) return i;
    }
  },
  initial: function (arr) {
    let result = arr;
    result.splice(result.length - 1, 1);
    return result;
  },
  join: function (arr, separator) {
    let result = "";
    for (i = 0; i < arr.length; i++) {
      result += arr[i] + separator;
    }
    result = result.slice(0, result.length - 1);
    return result;
  },
  last: function (arr) {
    return arr[arr.length - 1];
  },
  lastIndexOf: function (arr, value, fromIndex) {
    if (fromIndex < 0) return -1;
    if (!fromIndex) fromIndex = arr.length - 1;
    for (i = fromIndex; i >= 0; i--) {
      if (arr[i] == value) return i;
    }
  },
  reverse: function (arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
      result.unshift(arr[i]);
    }
    return result;
  },
};
