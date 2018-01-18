(function(app) {

  app.AppComponent = ng.core.Component({
      selector: 'my-app',
      templateUrl: 'bootstrap/app.component.html'
  })
  .Class({

    constructor: function() 
    {
      this.ex = 'what';
      this.hey = 'hey';
    },

    ngOnInit: function() 
    {
      // todo: fetch from server async
      console.log(this.ex)
    },

    clickEvent: function() 
    {
      var hello = 'this is hey';
      console.log(hello, this.ex, this.hey);
    }

  });

})(window.app || (window.app = {}));


