(function(app) {

  app.ExampleComponent = ng.core.Component({
      selector: 'my-example',
      templateUrl: 'app/example/example.component.html',
      inputs: [
        'myInput',
      ]
  })
  .Class({

    constructor: function() 
    {
        this.example = "hey this is an example";
    }

  });

})(window.app || (window.app = {}));
