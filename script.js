var app = angular.module("App", ["ngRout"]);

app.config(function($routingProvider) {
  $routingProvider
    .when("/", {
      templateUrl: "index.html"
    })
    .when("efetivo.html", {
      templateUrl: "efetivo.html"
    })
    .when("temporario.html", {
      templateUrl: "temporario.html"
    })
    .when("vaga1.html", {
      templateUrl: "vaga1.html"
    })
    .when("vaga2.html", {
      templateUrl: "vaga2.html"
    })
    .otherwise({
      redirectTo: "/"
    })
});