import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Operativo } from './operativo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const operativos = [
      { id: 11, name: 'El mirador',
       evento: 'Sequia', 
       estado: 'Tamaulipas', 
       organismo: 'Organismo de Cuenca Golfo Norte',
       advance: '113 m3',
       benefit: '1,900 habitantes',
       equip: '1 bomba de 20" ',
       personal: '2 elementos'
      },
      { id: 12, name: 'Miguel Hidalgo', 
      evento: 'Reparto de agua',
      estado: 'Tamaulipas', 
      organismo: 'Organismo de Cuenca Rio Bravo',
      advance: '113,000 Lts',
      benefit: '1,900 habitantes',
      equip: '1 Camion Pipa 10,000 Lts',
      personal: '2 elementos'
     },
      { id: 13, name: 'Capital', 
      evento: 'Desazolve', 
      estado: 'Veracruz', 
      organismo: 'Organismo de Cuenca Golfo Centro',
      advance: '60,000 ml',
      benefit: '1,900 habitantes',
      equip: '1 Camion Hidroneumatico',
      personal: '2 elementos'
     },
      { id: 14, name: 'Centro', 
      evento: 'Saneamiento', 
      estado: 'Zacatecas', 
      organismo: 'Direccion Local Zacatecas',
      advance: '60,000 ml',
      benefit: '1,900 habitantes',
      equip: '1 Camion Hidroneumatico',
      personal: '2 elementos'
     },
      { id: 15, name: 'Las Mañanitas', 
      evento: 'Inundacion', 
      estado: 'Sinaloa', 
      organismo: 'Organismo de Cuenca Pacifico Norte',
      advance: '113 m3',
      benefit: '1,900 habitantes',
      equip: '1 bomba de 20" ',
      personal: '2 elementos'
     },
      { id: 16, name: 'Comunidades Rurales',
      evento: 'Energia Electrica', 
      estado: 'Guerrero', 
      organismo: 'Direccion Local Guerrero',
      advance: '48 horas',
      benefit: '1,900 habitantes',
      equip: '1 Torre de iluminación',
      personal: '2 elementos'
     },
      { id: 17, name: 'Escuela 5 de mayo',
      evento: 'Desazolve', 
      estado: 'Michoacan ', 
      organismo: 'Direccion Local Guanajuato',
      advance: '60,000 ml',
      benefit: '1,900 habitantes',
      equip: '1 Camion Hidroneumatico',
      personal: '2 elementos'
     },
      { id: 18, name: 'El dorado',
      evento: 'Sequia', 
      estado: 'Sinaloa', 
      organismo: 'Organismo de Cuenca Pacifico Norte',
      advance: '113,000 Lts',
      benefit: '1,900 habitantes',
      equip: '1 Camion Pipa 20,000 Lts',
      personal: '2 elementos'
     },
      { id: 19, name: 'Hortencias', 
      evento: 'Reparto de agua', 
      estado: 'Yucatan', 
      organismo: 'Organismo de Cuenca Peninsula de Yucatan',
      advance: '30,000 Lts',
      benefit: '1,900 habitantes',
      equip: '1 Camion Pipa 5,000 Lts',
      personal: '2 elementos'
     },
      { id: 20, name: 'Golondrinas', 
      evento: 'Reparto de agua', 
      estado: 'San Luis Potosi', 
      organismo: 'Dirección Local San Luis Potosi',
      advance: '30,000 Lts',
      benefit: '1,900 habitantes',
      equip: '1 Camion Pipa 15,000 Lts',
      personal: '2 elementos'
     }
    ];
    return {operativos};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(operativos: Operativo[]): number {
    return operativos.length > 0 ? Math.max(...operativos.map(operativo => operativo.id)) + 1 : 11;
  }

  constructor() { }
}
