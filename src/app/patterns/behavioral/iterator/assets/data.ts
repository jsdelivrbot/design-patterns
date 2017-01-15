export const data = {
  name: "Iterator",
  definition: `
    Provides a consistent mechanism for sorting items in the collection
    without exposing its internal representation
  `,
  diagram: "",
  codePrint: `
    var Iterator = function(items) {
      this.index = 0;
      this.items = items;
    }

    Iterator.prototype = {
      first: function() {
        this.reset();
        return this.next();
      },
      next: function() {
        return this.items[this.index++];
      },
      hasNext: function() {
        return this.index <= this.items.length;
      },
      reset: function() {
        this.index = 0;
      },
      each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
          callback(item);
        }
      }
    }

    var items = ["one", 2, "circle", true, "Applepie"];
    var iter = new Iterator(items);

    iter.each(function(item) {
      log(item);
    });
  `,
}
