/**
 * 
 */

class Building {

    constructor(public floors: number=0, protected residents: number=0){
        this.floors = floors;
        this.residents = residents;
    }

    moveEscalator(){
        console.log("The escalators is moving...")
    }

    viewBuilding(){
        console.log(`My building has ${this.floors} floors and ${this.residents} residents`)
    }
}

class BuildingWithWindows extends Building{
    private windows = 12;

    aerate(){
        console.log(`The ${this.windows} windows of the building are open`)
    }
}

const building = new Building(10,10);
building.moveEscalator();
building.viewBuilding()

const modernBuilding = new BuildingWithWindows(5,6)
modernBuilding.aerate()
