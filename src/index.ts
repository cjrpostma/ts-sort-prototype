import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numberscollection = new NumbersCollection([-1, 6, 10, 3, -5, 0]);

const charactersCollection = new CharactersCollection('faSdnvZXcVgeTYsdf');

const sorter = new Sorter(charactersCollection);

sorter.sort();

console.log(numberscollection.data);
console.log(charactersCollection.data);
