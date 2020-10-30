import {Injectable} from "@angular/core"


@Injectable()
export class AppService{

    EnergyPart = {}
    DietPart = {}
    Transportation = {}
    Habits = {}

    getEnergyPart(){
        return this.EnergyPart
    }
    getDietPart(){
        return this.DietPart
    }
    getTransportation(){
        return this.Transportation
    }
    getHabits(){
        return this.Habits
    }
}