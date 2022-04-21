/* Wendsday April 20 */
/* Video 103 - 104 */

const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavati 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startermenu: ['Forcaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this. mainMenu[mainIndex]];
    }
};

const arr = (2, 3, 4);
const a = arr(0);
const b = arr(1);
const c = arr(2);

const [x, y, z] = arr;
console.log(x, y, z);

const [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

/* const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/

[main, secondary] = [secondary, main]
console.log(main, secondary);

const [starter, mainCource] = resturant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j,k]] = nested;
console.log(i, j, k);

const [p=1, q, r] = [8, 9];
console.log(p, q, r);

/*                                                         */

openingHours: {
    thu: {
        open: 12
        close: 22
     }
     fri: {
        open: 11
        close: 23
     }
     sat: {
         open: 0
         close: 24
     }
    
}

order: function (starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const {name, openHours, categories} = resturant;






