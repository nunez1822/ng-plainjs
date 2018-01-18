(function(app) {
  
  app.AppModule = ng.core.NgModule({
      imports: [ 
        ng.platformBrowser.BrowserModule 
      ],
      declarations: [ 
        app.AppComponent, 
        app.ExampleComponent 
      ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {}
    });

})(window.app || (window.app = {}));
