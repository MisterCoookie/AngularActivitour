function DBService(){
    this.Houses = [
        {
            name: "Gryffindor",
            color: "#9f2226"
        },
        {
            name: "HufflePuff",
            color: "#eca71e"
        },
        {
            name: "Slytherin",
            color: "#026f36"
        },
        {
            name: "RavenClaw",
            color: "#274384"
        }
    ]

    this.getHouses = function(){
        console.log
        return this.Houses
    }
    this.getHouse = function(name){
        return this.Houses.filter(house => house.name == name)[0]
    }
}