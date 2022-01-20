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
    return crr;
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
  flatten: function (arr) {
    let res = [];
    for (i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        res.push(...arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
    return res;
  },
  flattenDeep: function (arr) {
    let res = [];
    for (var i = 0; i < arr.length; i++) {
      item = arr[i];
      if (Array.isArray(item)) {
        item = flattenDeep(item);
        res.push(...item);
      } else {
        res.push(item);
      }
    }
    return res;
  },
  flattenDepth: function (arr, depth = 1) {
    for (let i = 0; i < depth; i++) {
      arr = this.flatten(arr);
    }
    return arr;
  },
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
      result += arr[i] + "" + separator;
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
  uniq: function () {},
  uniqBy: function () {},
  // 从数组中剔除输入元素
  without: function (arr, ...val) {
    let res = [];
    for (i = 0; i < arr.length; i++) {
      if (!val.includes(arr[i])) {
        res.push(arr[i]);
      }
    }
    return res;
  },
  zip: function (...arr) {
    let a = [...arr];
    let res = [];
    for (i = 0; i < a[0].length; i++) {
      let b = [];
      for (k = 0; k < a.length; k++) {
        b.push(a[k][i]);
      }
      res.push(b);
    }
    return res;
  },
  countBy: function () {},
  every: function () {},
  filter: function () {},
  find: function () {},
  forEach: function () {},
  groupBy: function () {},
  keyBy: function () {},
  map: function () {},
  partition: function () {},
  reduce: function () {},
  reduceRight: function () {},
  reject: function () {},
  sample: function () {},
  shuffle: function () {},
  size: function () {},
  some: function () {},
  isBoolean: function () {},
  isEmpty: function () {},
  isEqual: function () {},
  isNaN: function () {},
  isNil: function () {},
  isNull: function () {},
  isNumber: function () {},
  toArray: function (value) {
    let res = [];
    for (k in value) {
      res.push(value[k]);
    }
    return res;
  },
  ceil: function () {},
  max: function (arr) {
    if (arr.length == 0) return undefined;
    let max = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  },
  maxBy: function () {},
  sumBy: function () {},
  sum: function (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },
  repeat: function (string, n = 1) {
    let res = "";
    for (i = 0; i < n; i++) {
      res += string;
    }
    return res;
  },
  range: function (start = 0, end, step = 1) {
    if (arguments.length == 1) {
      start = 0;
      end = arguments[0];
    }
    let res = [];
    if (step == 0) return new Array(Math.abs(end - start)).fill(start);
    if (end < start && step > 0) step *= -1;
    for (i = start; start > end ? i > end : i < end; i += step) {
      res.push(i);
    }
    return res;
  },
  cloneDeep: function () {},
  difference: function (arr, ...val) {
    let res = [];
    let value = [...val];
    let flage = true;
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < value.length; j++) {
        for (k = 0; k < value[j].length; k++) {
          if (arr[i] == value[j][k]) flage = false;
        }
      }
      if (flage) res.push(arr[i]);
      flage = true;
    }
    return res;
  },
  concat: function (arr, ...val) {
    let value = [...val];
    for (i = 0; i < value.length; i++) {
      if (Array.isArray(value[i])) {
        arr.push(...value[i]);
      } else {
        arr.push(value[i]);
      }
    }
    return arr;
  },
};
