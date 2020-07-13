import { LinkedList } from './LinkedListCollection';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const linkedList = new LinkedList();
linkedList.add(42);
linkedList.add(-3);
linkedList.add(7);
linkedList.add(75);
linkedList.add(0);

const numberscollection = new NumbersCollection([-1, 6, 10, 3, -5, 0]);

const charactersCollection = new CharactersCollection('faSdnvZXcVgeTYsdf');

const sorter = new Sorter(linkedList);

sorter.sort();

// console.log(numberscollection.data);
// console.log(charactersCollection.data);
console.log(linkedList.print());
