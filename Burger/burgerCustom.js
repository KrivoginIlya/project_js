class Param {
constructor(element){
    this.name = element.value;
    this.price = +element.dataset.price;
    this.calories = +element.dataset.calories;
    }
}

class Burger {
     constructor(size, add, topings){
         this.size = new Param(this._selet(size));
         this.add = new Param(this._selet(add));
         this.topings = this._getToppings(topings);
     }

     _selet(name) {
         return document.querySelector(`input[name="${name}"]:checked`)
     }
     _getToppings(name) {
         let result = [];
         this._selectAll(name).forEach(el => result.push(new Param(el)));
         return result;
     }
     _selectAll(name) {
         return document.querySelectorAll(`input[name="${name}"]:checked`);
     }
     _sumPrice() {
         let result = this.size.price + this.add.price;
         this.topings.forEach(toping => result += toping.price);
         return result;
     }

     _sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.topings.forEach(toping => result += toping.calories);
        return result;
     }

     showSum(price, calories) {
         document.querySelector(price).textContent = this._sumPrice();
         document.querySelector(calories).textContent = this._sumCalories();        
     }
 } 