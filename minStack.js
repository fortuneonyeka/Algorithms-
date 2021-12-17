class Stack {
  constructor(){
    this.list = [];
    this.minList = []
  }
  push(number) {
  this.list.push(number);
  if (!this.minList[0] || this.minList[0] >= number) this.minList.unshift(number);
  }
  
  pop() {
    const res = this.list.pop();
    if (res === this.minList[0]) this.minList.shift()
  }
  
  min() {
    return this.minList[0];
  }
}
