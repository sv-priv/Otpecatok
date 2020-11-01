import { Injectable } from '@angular/core'
import { Diet, Energy, Habits, Transportation, EnergyResult, DietResult, TransportResult, HabitsResult, Statistika  } from '../shared/model'

@Injectable()
export class AppService {
	EnergyPart: Energy
	DietPart: Diet
	TransportationPart: Transportation
  	HabitsPart: Habits
  	finalResult
	energijaRez: EnergyResult
	hranaRez: DietResult
	transportRez: TransportResult
	navikiRez: HabitsResult
	statistika: Statistika

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

	calculate(data){
		let podatoci = {
			energija: {
				struja: 0,
				parno: 0,
				nafta: 0,
				paleti: 0,
				drva: 0,
				vkupno: 0,
			},
			hrana: {
				dieta: 0,
				frlanjeHrana: 0,
				vkupno: 0,
			},
			transport: {
				avtomobil: 0,
				avtobus: 0,
				motor: 0,
				velosiped: 0,
				vkupno: 0,
			},
			naviki: {
				avion: 0,
				obleka: 0,
				gjubre: 0,
				vkupno: 0,
			},
			statistika: {
			  brandNewCar2018: 0,
			  reduceDoubleFoodWaste: 0,
			  removeWoodPalets: 0,
			  switchFromBusToBike: 0,
			  switchHalfCarForBus: 0,
			  switchHalfFlightTime: 0,
			  switchToVegetarian: 0,
			  tenPercentLessWaste: 0,
			  vkupno: 0
			},
		};

		const energijaParametri = {
			struja: { emisionenFaktor: 0.915 },
			parno: { emisionenFaktor: 0.26676 },
			nafta: { emisionenFaktor: 0.2639988, efikasnost: 0.78, konverzija: 9.1 },
			paleti: { emisionenFaktor: 0.4032, efikasnost: 0.78, konverzija: 4.9 },
			drva: { emisionenFaktor: 0.4032, efikasnost: 0.78, konverzija: 750 },
		};

		const hranaParametri = {
			foodDiet: {
				vegan: 2.89,
				vegetarian: 3.81,
				"low-meat": 4.67,
				"medium-meat": 5.63,
				"high-meat": 7.19,
			},
			hranaNaDenKg: 2,
			foodWastePerKg: 2.53846,
		};

		const transportParametri = {
			kola: {
				2000: {
					benzin: 177.4,
					dizel: 160.3,
				},
				2001: {
					benzin: 175.3,
					dizel: 159.7,
				},
				2002: {
					benzin: 173.5,
					dizel: 158.1,
				},
				2003: {
					benzin: 171.7,
					dizel: 157.7,
				},
				2004: {
					benzin: 170,
					dizel: 156.2,
				},
				2005: {
					benzin: 168.1,
					dizel: 156.5,
				},
				2006: {
					benzin: 164.9,
					dizel: 157.9,
				},
				2007: {
					benzin: 161.6,
					dizel: 156.3,
				},
				2008: {
					benzin: 156.6,
					dizel: 151.2,
				},
				2009: {
					benzin: 147.6,
					dizel: 145.3,
				},
				2010: {
					benzin: 142.5,
					dizel: 139.3,
				},
				2011: {
					benzin: 137.6,
					dizel: 134.5,
				},
				2012: {
					benzin: 133.7,
					dizel: 131.5,
				},
				2013: {
					benzin: 128.5,
					dizel: 126.9,
				},
				2014: {
					benzin: 125.6,
					dizel: 123.2,
				},
				2015: {
					benzin: 122.5,
					dizel: 119.2,
				},
				2016: {
					benzin: 121.7,
					dizel: 116.8,
				},
				2017: {
					benzin: 121.6,
					dizel: 117.9,
				},
				2018: {
					benzin: 123.4,
					dizel: 121.5,
				},
			},
			avtobus: 0.07, //kg/km
			motor: 0.11, //kg/km
		};

		const navikiParamteri = {
			avionNaCas: 250,
			obleka: {
				patiki: 14,
				pantaloni: 33,
				maica: 9,
				jakna: 18,
			},
			otpadKg: 18,
		};

		const struja = (potrosuvacka) =>
			potrosuvacka * energijaParametri.struja.emisionenFaktor;
		const parno = (potrosuvacka) =>
			potrosuvacka * energijaParametri.parno.emisionenFaktor;
		const nafta = (potrosuvacka) =>
			(potrosuvacka *
				energijaParametri.nafta.emisionenFaktor *
				energijaParametri.nafta.konverzija) /
			energijaParametri.nafta.efikasnost;
		const paleti = (potrosuvacka) =>
			(potrosuvacka *
				energijaParametri.paleti.emisionenFaktor *
				energijaParametri.paleti.konverzija) /
			energijaParametri.paleti.efikasnost;
		const drva = (potrosuvacka) =>
			(potrosuvacka *
				energijaParametri.drva.emisionenFaktor *
				energijaParametri.drva.konverzija) /
			energijaParametri.drva.efikasnost;

			const presmetajEnergija = () => {
				let godisnaPotrosuvacka = 0;
				let strujaPotrosuvacka = 0;
				let parnoPotrosuvacka = 0;
				let naftaPotrosuvacka = 0;
				let paletiPotrosuvacka = 0;
				let drvaPotrosuvacka = 0;

				if (struja(data.energija.potrosuvacka.struja) > 0) {
					strujaPotrosuvacka =
						struja(data.energija.potrosuvacka.struja) /
						data.energija.lugjeDomakinstvo;
				}

				if (parno(data.energija.potrosuvacka.parno) > 0) {
					parnoPotrosuvacka =
						parno(data.energija.potrosuvacka.parno) /
						data.energija.lugjeDomakinstvo;
				}

				if (nafta(data.energija.potrosuvacka.nafta) > 0) {
					naftaPotrosuvacka =
						nafta(data.energija.potrosuvacka.nafta) /
						data.energija.lugjeDomakinstvo;
				}

				if (paleti(data.energija.potrosuvacka.paleti) > 0) {
					paletiPotrosuvacka =
						paleti(data.energija.potrosuvacka.paleti) /
						data.energija.lugjeDomakinstvo;
				}

				if (drva(data.energija.potrosuvacka.drva) > 0) {
					drvaPotrosuvacka =
						drva(data.energija.potrosuvacka.drva) /
						data.energija.lugjeDomakinstvo;
				}
				// const parnoPotrosuvacka = parno(data.energija.potrosuvacka.parno);
				// const naftaPotrosuvacka = nafta(data.energija.potrosuvacka.nafta);
				// const paletiPotrosuvacka = paleti(data.energija.potrosuvacka.paleti);
				// const drvaPotrosuvacka = drva(data.energija.potrosuvacka.drva);

				// console.log("struja: ", strujaPotrosuvacka);
				// console.log("parno: ", parnoPotrosuvacka);
				// console.log("nafta: ", naftaPotrosuvacka);
				// console.log("paleti: ", paletiPotrosuvacka);
				// console.log("drva: ", drvaPotrosuvacka);

				godisnaPotrosuvacka =
					strujaPotrosuvacka +
					parnoPotrosuvacka +
					naftaPotrosuvacka +
					paletiPotrosuvacka +
					drvaPotrosuvacka;

				podatoci.energija.struja = strujaPotrosuvacka;
				podatoci.energija.parno = parnoPotrosuvacka;
				podatoci.energija.nafta = naftaPotrosuvacka;
				podatoci.energija.paleti = paletiPotrosuvacka;
				podatoci.energija.drva = drvaPotrosuvacka;
				podatoci.energija.vkupno = godisnaPotrosuvacka;

				//vrednosta e vo kg CO2
				return godisnaPotrosuvacka;
			};

		const foodDiet = (dieta) => hranaParametri.foodDiet[dieta] * 365;
		const foodWaste = (waste) =>
			hranaParametri.hranaNaDenKg *
			365 *
			(waste / 100) *
			hranaParametri.foodWastePerKg;

		const presmetajHrana = () => {
			//data.hrana.dieta treba da vraka:
			//["vegan", "vegetarian", "low-meat", "medium-meat", "high-meat"]

			const diet = foodDiet(data.hrana.dieta);
			const waste = foodWaste(data.hrana.frlanjeHrana);

			const godisnaPotrosuvacka = diet + waste;
			// console.log("diet: ", diet);
			// console.log("waste: ", waste);

			podatoci.hrana.dieta = diet;
			podatoci.hrana.frlanjeHrana = waste;
			podatoci.hrana.vkupno = godisnaPotrosuvacka;

			return godisnaPotrosuvacka;
		};

		const avtomobil = (distanca, nafta, godina) => {
			const kolaPotrosuvackaModel = transportParametri.kola[godina][nafta] / 1000; //kg/km
			return distanca * kolaPotrosuvackaModel * 52;
		};
		const avtobus = (distanca) => distanca * transportParametri.avtobus * 52;
		const motor = (distanca) => distanca * transportParametri.motor * 52;

		const presmetajTransport = () => {
			const nafta = data.transport.kola.nafta;
			const godina = data.transport.kola.godina;

			const potrosuvackaKola = avtomobil(
				data.transport.distanca.avtomobil,
				nafta,
				godina
			);
			const potrosvuacAvtobus = avtobus(data.transport.distanca.avtobus);
			const potrosuvackaMotor = motor(data.transport.distanca.motor);
			const potrosuvackaVelosiped = 0;

			// console.log("Avtomobil ", potrosuvackaKola);
			// console.log("Bus ", potrosvuacAvtobus);
			// console.log("Velosiped ", potrosuvackaVelosiped);
			// console.log("Motor ", potrosuvackaMotor);

			const godisnaPotrosuvacka =
				potrosuvackaKola +
				potrosvuacAvtobus +
				potrosuvackaVelosiped +
				potrosuvackaMotor;

			podatoci.transport.avtomobil = potrosuvackaKola;
			podatoci.transport.avtobus = potrosvuacAvtobus;
			podatoci.transport.motor = potrosuvackaMotor;
			podatoci.transport.velosiped = potrosuvackaVelosiped;
			podatoci.transport.vkupno = godisnaPotrosuvacka;

			return godisnaPotrosuvacka;
		};

		const patikiCO2 = (parcinja) => parcinja * navikiParamteri.obleka.patiki;
		const maicaCO2 = (parcinja) => parcinja * navikiParamteri.obleka.maica;
		const jaknaCO2 = (parcinja) => parcinja * navikiParamteri.obleka.jakna;
		const pantaloniCO2 = (parcinja) => parcinja * navikiParamteri.obleka.pantaloni;
		const avionCO2 = (casovi) => casovi * navikiParamteri.avionNaCas;
		const otpadCO2 = (kg) => kg * navikiParamteri.otpadKg;
		const presmetajNaviki = () => {
			const patiki = patikiCO2(data.naviki.obleka.patiki);
			const maica = maicaCO2(data.naviki.obleka.maica);
			const jakna = jaknaCO2(data.naviki.obleka.jakna);
			const pantaloni = pantaloniCO2(data.naviki.obleka.pantaloni);

			const godisnoObleka = patiki + maica + jakna + pantaloni;
			const godisnoAvion = avionCO2(data.naviki.avionPatuvanja);
			const godisnoOtpad = otpadCO2(data.naviki.gjubre);

			const godisnaPotrosuvacka = godisnoObleka + godisnoAvion + godisnoOtpad;
			// console.log("Oblekla: ", godisnoObleka);
			// console.log("Avion: ", godisnoAvion);
			// console.log("Otpad: ", godisnoOtpad);

			podatoci.naviki.avion = godisnoAvion;
			podatoci.naviki.gjubre = godisnoOtpad;
			podatoci.naviki.obleka = godisnoObleka;
			podatoci.naviki.vkupno = godisnaPotrosuvacka;

			return godisnaPotrosuvacka;
		};

		const generirajStatistika = () => {
			//Hrana

			podatoci.statistika["switchToVegetarian"] = 0;
			podatoci.statistika["switchToVegan"] = 0;
			podatoci.statistika["reduceDoubleFoodWaste"] = 0;
			podatoci.statistika["removeWoodPalets"] = 0;
			podatoci.statistika["switchHalfCarForBus"] = 0;
			podatoci.statistika["switchFromBusToBike"] = 0;
			podatoci.statistika["brandNewCar2018"] = 0;
			podatoci.statistika["switchHalfFlightTime"] = 0;
			podatoci.statistika["tenPercentLessWaste"] = 0;

			if (data.hrana.dieta !== "vegan" && data.hrana.dieta !== "vegetarian") {
				podatoci.statistika["switchToVegetarian"] =
					podatoci.hrana.dieta - foodDiet("vegetarian");
			} else if (data.hrana.dieta === "vegetarian") {
				podatoci.statistika["switchToVegan"] =
					podatoci.hrana.dieta - foodDiet("vegan");
			}
			//frlanje hrana
			if (data.hrana.frlanjeHrana >= 6) {
				podatoci.statistika["reduceDoubleFoodWaste"] = podatoci.hrana.dieta / 2;
			}
			//Energija
			if (podatoci.energija.paleti >= 0 || podatoci.energija.drva >= 0) {
				podatoci.statistika["removeWoodPalets"] =
					paleti(data.energija.potrosuvacka.paleti) +
					drva(data.energija.potrosuvacka.drva);
			}
			//Transport
			//pola kola za bus
			if (podatoci.transport.avtomobil > 10) {
				podatoci.statistika["switchHalfCarForBus"] = Math.abs(
					avtomobil(
						podatoci.transport.avtomobil / 2,
						data.transport.kola.nafta,
						data.transport.kola.godina
					) -
						avtobus(
							podatoci.transport.avtobus +
								podatoci.transport.avtomobil / 2
						)
				);
			}

			//cel bus za kola
			if (podatoci.transport.avtobus >= 10) {
				podatoci.statistika["switchFromBusToBike"] = podatoci.transport.avtobus;
			}

			//da kupis nova kola
			if (data.transport.kola.godina < 2015) {
				podatoci.statistika["brandNewCar2018"] =
					podatoci.transport.avtomobil -
					avtomobil(
						data.transport.distanca.avtomobil,
						data.transport.kola.nafta,
						2018
					);
			}
			//duplo pomalku letanje
			if (data.naviki.avionPatuvanja >= 2) {
				podatoci.statistika["switchHalfFlightTime"] = Math.abs(
					podatoci.naviki.avion - avionCO2(data.naviki.avionPatuvanja / 2)
				);
			}

			//10% pomalku gjubre
			podatoci.statistika["tenPercentLessWaste"] = podatoci.naviki.gjubre * 0.1;
		};

		const finalnaPresmetka = () => {
			presmetajEnergija();
			presmetajHrana();
			presmetajTransport();
			presmetajNaviki();
			podatoci.statistika.vkupno =
				podatoci.transport.vkupno +
				podatoci.energija.vkupno +
				podatoci.naviki.vkupno +
				podatoci.hrana.vkupno;
			generirajStatistika();
			return podatoci;
		};
		let rez = finalnaPresmetka()
		console.log(rez);
		return rez
	}

}