export interface Energy{
    potrosuvacka: {
        struja: number,
        parno: number,
        gas: number,
        peleti: number,
        drva: number
    },
    lugjeDomakinstvo: number
  }

  export interface Diet{
    dieta: string,
    frlanjeHrana: number
  }

  export interface Transportation{
    kola: {
        ima: boolean,
        tip: string,
        godina: number
    },
    distanca: {
        avtomobil: number,
        velosiped: number,
        avtobus: number,
        motor: number
    }
  }

  export interface Habits{
    avionPatuvanja: number,
    obleka: {
        patiki: number,
        maica: number,
        jakna: number,
        pantaloni: number
    },
    gjubre: number
  }