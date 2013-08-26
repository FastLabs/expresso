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

angular.module("rules", [])
    .value("ruleApps", {
       "ir": {name: "Interest Rates Eligibility"
           , ruleSets: [
               {name: "Rule Set 1", tags: [], rules: [
                   {name:"Event Type"}, {name: "Creational"}] }
               , {name : "Rule Set 2", tags: [], rules: []}
           ]
       },
        "eq": {name: "Equities Eligibility"
            , ruleSets: [
                {name: "Rule Set 1", tags: [], rules: [] }
                , {name : "Rule Set 2", tags: [], rules: []}
            ]
        },
        "fx": {name: "FX Eligibility"
            , ruleSets: [
                {name: "Rule Set 1", tags: [], rules: [] }
                , {name : "Rule Set 2", tags: [], rules: []}
            ]
        }
    })

    .factory("ruleService", function(ruleApps) {

        var ruleSets = function (ruleApp) {
            return ruleApps[ruleApp];
        }

        return {
            getRuleSets : ruleSets
        }
    });

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