/**
 * Return true if it's even, and false if it isn't.
 *
 * @param {Number} i
 */
export const isNumberEven = i => {
   if(i%2==0){
     return true;
   }else{
     return false;
   }
};

/**
 * `str` is a string, but it may not have a file extension.
 * Return the file extension (with no period) if it has one, otherwise false
 * @param {String} str
 */
export const getFileExtension = str => {
    const filenameSplitted = str.split('.');
    const lastExtension = filenameSplitted[filenameSplitted.length - 1];
    return filenameSplitted.length > 1 ? lastExtension : false;
};

/**
 * `arr`is a string.
 * Return the longest string in the array
 *
 * @param {String} arr
 */
export const longestString = arr => {
  let longestString = '';
    for (const str of arr) {
        if (typeof str === 'string' && str.length > longestString.length) {
            longestString = str;
        }
    }
    return longestString;
};

/**
 * `str` is an string.
 * Return a new string who's characters are in the opposite order to str's.
 * @param {String} str
 */
export const reverseString = str => {
  return str.split('').reverse().join('');
};

/**
 * `str` is a string.
 * Return true if it is a palindrome and false otherwise.
 * It should be case insensitive and not consider space or punctuation.
 *
 * @param {String} str
 */
export const isPalindrome = str => {
  return str.toLowerCase() === reverseString(str).toLowerCase();
};

/**
 * `arr` will be an array containing integers, strings and/or arrays like itself.
 * Return the sum all the numbers you find, anywhere in the nest of arrays.
 */
export const nestedSum = arr => {
  let somme =0;
  for(const el of arr){
    if(Array.isArray(el)){
      somme += nestedSum(el);
    }else if (typeof el ==="number"){
      somme +=el;
    }
  }
  return somme;
};

/**
 * Retire du tableau `tab` passé en paramètre les éléments passés en
 * paramètres dans `elms`.
 *
 * On utilise la destructuration pour pouvoir utiliser tous les arguments
 * après `tab` comme un tableau.
 *
 * Après l'exécution le tableau d'origine est réellement modifié, ce
 * on ne retourne pas une copie.
 *
 * Exemple :
 * let tab = ['a', 'b', 'c', 'b', 'c'];
 * pull(tab, 'a', 'b');
 * tab; // ['c']
 *
 * @param {Array} tab
 * @param  {objects} elms
 */
export const retireDe = (tab, ...elms) => {
  const t = [];
  for (const element of tab) {
      if (!elms.includes(element)) {
          t.push(element);
      }
  }
  tab.splice(0, tab.length);
  for (const element of t) {
      tab.push(element);
  }
};

/**
 * Aplatit en profondeur un tableau passé en paramètre.
 *
 * Indications :
 * - Utiliser la récursion.
 * - Utiliser `Array.prototype.concat()` avec un tableau vide ([]) et l'opérateur de déstructuration (...) pour aplatir  un tableau.
 *
 * Exemple :
 * aplatirRecursif([5, [4], [[3], 2], [1], 0]);
 * // [5, 4, 3, 2, 1, 0]
 */
export const aplatirRecursif = tab => {
  let  nt = [];
  for (let i = 0; i < tab.length; i++) {
     if(typeof tab[i] === "object"){
       nt=nt.concat(aplatirRecursif(tab[i]))
     }else{
      nt=nt.concat(tab[i]);
     }
  }
  return nt;
};

/**
 * Retourne la liste de toutes les permutations des objets du tableau passé en paramètre.
 *
 * Exemple :
 * permutations([0,1,2]);
 * // [ [ 0, 1, 2 ],
 * //   [ 0, 2, 1 ],
 * //   [ 1, 0, 2 ],
 * //   [ 1, 2, 0 ],
 * //   [ 2, 0, 1 ],
 * //   [ 2, 1, 0 ] ]
 *
 * @param {Array} tab
 */
export const permutations = tab => {
  if (tab.length <= 2) {
    return tab.length === 2 ? [tab, [tab[1], tab[0]]] : tab;
  }
  return tab.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...tab.slice(0, i), ...tab.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

/**
 * Retourne un élément au hazard parmi les éléments du tableau `tab` passé en
 * paramètre.
 *
 * @param {Array} tab
 */
export const echantillon = tab => tab[Math.floor(Math.random() * tab.length)];

/**
 * Prend un tableau 'tab' et le transforme en string avec chaque élément séparé par le `separateur`.
 * Les deux derniers éléments sont séparé pas le séparateur `fin`.
 *
 * Exemple:
 * enumerer(['Riri', 'Fifi', 'Loulou'], ', ', ' et ');
 * // 'Riri, Fifi et Loulou'
 *
 *
 * @param {Array} tab
 * @param {string} separateur
 * @param {string} fin
 */
export const enumerer = (tab, separateur = ', ', fin = separateur) => {
  if(tab.length === 0) {
    return '';
  }
  let nvTab = [...tab];
  const derElement = nvTab.pop();
  if(nvTab.length<1) {
    return derElement;
  }
  return nvTab.join(separateur) + fin + derElement;
};

/**
 * Retourne, sous forme d'un tableau, les `n` plus grand nombres du tableau `tab` passé en paramètre.
 *
 * Attention, on ne doit pas modifier le tableau d'origine.
 *
 * Utiliser `Array.prototype.sort()`, l'opérateur de destructuration (...) et `Array.prototype.slice()`
 */
export const nMax = (tab, n = 1) => {
  let tabSorted = tab.filter(e => typeof e !== "string");
  tabSorted.reverse().splice(n, tabSorted.length-n);
  tabSorted.sort();
  return tabSorted;
};
