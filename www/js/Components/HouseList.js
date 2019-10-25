angular.module('starter').component('houseList', {
    templateUrl:'templates/list.html',
    // controller: function listController() {
    //     ctrl = this
    //     ctrl.houses = []
    //     console.log(houses)
    // }
    controller: ["DBService", function listController(DBService) {
        ctrl = this
        ctrl.houses = DBService.getHouses();
        console.log(ctrl.houses)
    }]
})

angular.module('starter').component('banner', {
    templateUrl:'templates/banner.html',
    bindings: {
        house: '<'
    },
    controller: function listController() {
        console.log(this.house)
    }
})