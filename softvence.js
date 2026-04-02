

// This is Inheritance


class Team {
    #teamName
    constructor(teamName, leaderName, age, ){
        this.#teamName = teamName;
        this.leaderName = leaderName;
        this.age = age;
    }

    getTeamName(){
        return this.#teamName;
    }

    detailsData(){
        return `Team name is ${this.#teamName}, leader name is ${this.leaderName} and He is ${this.age} years old`
    }
}


class DevSquadTeam extends Team {
    constructor(teamName, leaderName, age, support){
        super(teamName, leaderName, age);
        this.support = support;
    }
    detailsData(){
        return `Team name is ${this.getTeamName()}, leader name is ${this.leaderName} and He is ${this.age} years old. ${this.support}`
    }
}


const devSquad = new Team("devSquad", "Omor Bhai", 35)
const devSquads = new DevSquadTeam("DS", "Omor", 35, "shopify support")


console.log(devSquad.detailsData())
console.log(devSquads.detailsData())
