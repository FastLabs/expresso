angular.module("rules", [])
    .value("ruleApps", {
        "ir": {name: "Interest Rates Eligibility"
            , ruleSets: [
                {name: "IR Rule Set 1", tags: [], rules: [
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