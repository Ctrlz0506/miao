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
      crr = crr.splice(0, i);
    }
    return result;
  },
};
