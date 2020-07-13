import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numberscollection = new NumbersCollection([-1, 6, 10, 3, -5, 0]);

const sorter = new Sorter(numberscollection);

sorter.sort();

console.log(numberscollection.data);
