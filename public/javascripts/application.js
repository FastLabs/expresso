angular.module("application", ["rules"])
    .config(function () {
        console.log("application module loaded");
    })
    .value("appmenu"
            , [ {title: "Interest Rates", tag: "ir"}
                , {title: "Equities", tag: "eq"}
                , {title: "FX", "tag": "fx"}
                , {title: "Commodities", tag: "com"}
        ]);



function appMenuController($scope, appmenu, ruleService) {

    $scope.selectAssetClass = function (assetClass) {
        $scope.area = assetClass;
        var app = ruleService.getRuleSets($scope.area);
        $scope.rulesets = app.ruleSets;
        $scope.appName = app.name;
    }

    $scope.appActive = function(appTag) {
        if($scope.area && $scope.area === appTag) {
            return ["active"];
        }
        return [];
    }

    $scope.appMenu = appmenu;


}