import { LinkedList } from './LinkedListCollection';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

// Linked List
const linkedList = new LinkedList();
linkedList.add(42);
linkedList.add(-3);
linkedList.add(7);
linkedList.add(75);
linkedList.add(0);
linkedList.sort();
console.log(linkedList.print());

// Number
const numberscollection = new NumbersCollection([-1, 6, 10, 3, -5, 0]);
numberscollection.sort();
console.log(numberscollection.data);

// String
const charactersCollection = new CharactersCollection('faSdnvZXcVgeTYsdf');
charactersCollection.sort();
console.log(charactersCollection.data);
