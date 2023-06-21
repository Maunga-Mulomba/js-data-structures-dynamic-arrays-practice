class DynamicArray {
  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length > 0) {
      const poppedValue = this.data[this.length - 1];
      this.data[this.length - 1] = undefined;;
      this.length--;
      return poppedValue;
    }
    return undefined;
  }

  shift() {
    if (this.length > 0) {
      const shiftedValue = this.data[0];

      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      this.length--;
      this.data[this.length] = undefined;
      return shiftedValue;
    }

    return undefined;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }

    for (let i = this.data.length - 1; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
    return this.length;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }

    return -1;
  }

  resize() {
    if (this.length === this.capacity) {
      this.capacity *= 2;
      this.data.length *= 2;
    }
  }
}

module.exports = DynamicArray;
