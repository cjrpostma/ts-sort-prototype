class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const tempLeftSide = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = tempLeftSide;

          // [this.collection[j], this.collection[j + 1]] = [
          //   this.collection[j + 1],
          //   this.collection[j],
          // ];
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
