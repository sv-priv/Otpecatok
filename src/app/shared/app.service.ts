import { Injectable } from '@angular/core'
import { Diet, Energy, Habits, Transportation } from '../shared/model'

@Injectable()
export class AppService {
	EnergyPart: Energy
	DietPart: Diet
	TransportationPart: Transportation
  HabitsPart: Habits
  finalResult

	getEnergy(){
		return this.EnergyPart
	}

	getDiet(){
		return this.DietPart
	}

	getTransportation(){
		return this.TransportationPart
	}

	getHabits(){
		return this.HabitsPart
	}

	setEnergy(data){
		this.EnergyPart = data

	}

	setDiet(data){
		this.DietPart = data
	}

	setTransportation(data){
		this.TransportationPart = data
	}

	setHabits(data){
		this.HabitsPart = data
  }

  calculate(){

  }

	getResult(){
    //kalkulacija
    this.finalResult = {
      "energija" : this.getEnergy(),
      "hrana": this.getDiet(),
      "transport" : this.getTransportation(),
      "naviki": this.getHabits()
    }
    return this.finalResult
	}

}