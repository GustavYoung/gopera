import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Operativo } from './operativo';

import { Responsable } from './responsable';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    let operativos = [
      { id: 11, name: 'El mirador',
       evento: 'Sequia', 
       estado: 'Tamaulipas', 
       organismo: 'Organismo de Cuenca Golfo Norte',
       advance: '113 m3',
       benefit: '1,900 habitantes',
       equip: '1 bomba de 20" ',
       personal: '2 elementos'
      },
      { id: 12, name: 'Cuatro Cienegas', 
      evento: 'Reparto de agua',
      estado: 'Coahuila', 
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

    let responsables = [
      { id: 1, name: 'CRAE 01 Vaso de Cristo ', organismo_dl: 'Gerencia de PIAE', jefebriga: 'N/D', jefecrae:'C. Facundo Gómez Muciño', teljb:'', teljc:'' },
      { id: 2, name: 'CRAE 02 Guadalajara, Jal.', organismo_dl: 'OC Lerma Santiago Pacífico', jefebriga: 'Tec. Oscar Coyt Nuño', jefecrae:'C. Cristina Isabel Sánchez Gutiérrez', teljb:'', teljc:'' },
      { id: 3, name: 'CRAE 03 Altamira., Tamps.', organismo_dl: 'OC Golfo Norte', jefebriga: 'Ing. Pablo Mota Montes', jefecrae:'C. Rubén García Delgado', teljb:'', teljc:'' },
      { id: 4, name: 'CRAE 04 Chilpancingo, Gro.', organismo_dl: 'Dirección Local Guerrero', jefebriga: 'C. Ernesto Barragán Solano', jefecrae:'C. Guillermo Melo Ortega', teljb:'', teljc:'' },
      { id: 5, name: 'CRAE 05 Cardenas, Tab.', organismo_dl: 'Dirección Local Tabasco', jefebriga: 'Ing. José Luis López Mazariego', jefecrae:'C. Alfonso García Domínguez', teljb:'', teljc:'' },
      { id: 6, name: 'CRAE 06 San José del Progreso, Oax.', organismo_dl: 'OC Pacífico Sur', jefebriga: 'Ing. Juan Manuel Villanueva Romualdo', jefecrae:'C. Francisco Acevedo Andrade', teljb:'', teljc:'' },
      { id: 7, name: 'CRAE 07 Culiacán, Sin.', organismo_dl: 'OC Pacífico Norte', jefebriga: 'Ing. Marco Antonio Gaxiola Rivera', jefecrae:'C. Roberto García Vizcarra ', teljb:'', teljc:'' },
      { id: 8, name: 'CRAE 08 La Paz, B.C.S.', organismo_dl: 'Dirección Local Baja California Sur', jefebriga: 'C. Victor Geraldo Martínez ', jefecrae:'C. Adolfo Romero Amador', teljb:'', teljc:'' },
      { id: 9, name: 'CRAE 09 Acapetahua, Chis.', organismo_dl: 'OC Frontera Sur', jefebriga: 'Ing. Francisco Javier Arreola  Cruz', jefecrae:'C. Guillermo Gómez Osorio', teljb:'', teljc:'' },
      { id: 10, name: 'CRAE 10 Veracruz, Ver.', organismo_dl: 'OC Golfo Centro', jefebriga: 'Ing. Cesar Atiel Hernández Castillo', jefecrae:'Ing. José Martín Moreno Flores', teljb:'', teljc:'' },
      { id: 11, name: 'CRAE11 Merida, Yuc.', organismo_dl: 'OC Península de Yucatán', jefebriga: 'Ing. José Rusell Jiménez Novelo', jefecrae:'C. Jorge De La Torre Orozco', teljb:'', teljc:'' },
      { id: 12, name: 'CRAE 12 San Luis Potosí', organismo_dl: 'Dirección Local San Luis Potosí', jefebriga: 'Arq. Guillermo Villanueva López', jefecrae:'C. Francisco Mendoza Torres', teljb:'', teljc:'' },
      { id: 13, name: 'CRAE 13 Reynosa, Tamps.', organismo_dl: 'OC Río Bravo', jefebriga: 'Ing. Dagoberto Moreno Santana', jefecrae:'C. José Cruz Olvera González', teljb:'', teljc:'' },
      { id: 14, name: 'CRAE 14 Campeche, Camp.', organismo_dl: 'Dirección Local Campeche', jefebriga: 'Ing. Juan de Jesus Robaldino Sánchez', jefecrae:'C. Luis Davis Queb Mena', teljb:'', teljc:'' },
      { id: 15, name: 'CRAE 15 CD. Lerdo, Dgo.', organismo_dl: 'OC Cuencas Centrales del Norte', jefebriga: 'Lic. Edmundo Illescas Romero', jefecrae:'Ing. Juan Carlos Veloz Díaz', teljb:'', teljc:'' },
      { id: 16, name: 'CRAE 16 Piedras Negras, Coah.', organismo_dl: 'Dirección Local Coahuila', jefebriga: 'C. Miguel Angel Morua Hernández', jefecrae:'C. Mauricio Tenorio Aguilar', teljb:'', teljc:'' },
      { id: 17, name: 'CRAE 17 Los Mochis, Sin.', organismo_dl: 'OC Pacífico Norte', jefebriga: 'Ing. Marco Antonio Gaxiola Rivera', jefecrae:'Ing. Julio Rodríguez German ', teljb:'', teljc:'' },
      { id: 18, name: 'CRAE 18 Cd. Obregón, Son', organismo_dl: 'OC Noroeste', jefebriga: 'Ing. Jesús Francisco Leyva Orduño', jefecrae:'C. Rafael Robles Salazar', teljb:'', teljc:'' },
      { id: 19, name: 'CRAE 19 Salamanca, Gto.', organismo_dl: 'Dirección Local Guanajuato', jefebriga: 'C. Martín Tovar Prieto', jefecrae:'C. José Pedro Romero Revilla', teljb:'', teljc:'' },
      { id: 20, name: 'CRAE 20 Texcoco, Mex.', organismo_dl: 'OC Aguas del Valle de México', jefebriga: 'Ing. Alfonso Meneses Palomares', jefecrae:'C. Alfredo Gutiérrez Badillo', teljb:'', teljc:'' },
      { id: 21, name: 'CRAE 21 Mazatlán, Sin.', organismo_dl: 'OC Pacífico Norte', jefebriga: 'Ing. Marco Antonio Gaxiola Rivera', jefecrae:'C. Hector Silvestre Cortez', teljb:'', teljc:'' },
      { id: 22, name: 'Dirección Local Hidalgo', organismo_dl: 'Dirección Local Hidalgo', jefebriga: 'C. Jesús Samperio Baños', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 23, name: 'OC Península de Baja California', organismo_dl: 'OC Península de Baja California', jefebriga: 'C. Carlos Hugo Bielma Carbajal', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 24, name: 'Dirección Local Tlaxcala', organismo_dl: 'Dirección Local Tlaxcala', jefebriga: 'Lic. José Héctor Osorio Chumacero', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 25, name: 'Dirección Local Quintana Roo', organismo_dl: 'Dirección Local Quintana Roo', jefebriga: 'C. José Santiago Tejero Aguilar', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 26, name: 'Dirección Local Estado de México', organismo_dl: 'Dirección Local Estado de México', jefebriga: 'Arq. Jaime Romero Terrón', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 27, name: 'Dirección Local Colima', organismo_dl: 'Dirección Local Colima', jefebriga: 'Ing. Alejandro Macías Ávalos', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 28, name: 'OC Golfo Centro (Coatzacoalcos)', organismo_dl: 'OC Golfo Centro (Coatzacoalcos)', jefebriga: 'Ing. Cesar Atiel Hernández Castillo', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 29, name: 'Dirección Local Chihuahua', organismo_dl: 'Dirección Local Chihuahua', jefebriga: 'Ing. Marco Antonio Bustillos  Cano', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 30, name: 'Dirección Local Puebla', organismo_dl: 'Dirección Local Puebla', jefebriga: 'C. Austreberto Flores Rodríguez', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 31, name: 'Dirección Local Aguascalientes', organismo_dl: 'Dirección Local Aguascalientes', jefebriga: 'ISC. José Angel Ledón Castillo', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 32, name: 'Dirección Local Michoacán', organismo_dl: 'Dirección Local Michoacán', jefebriga: 'C. Roberto Ramírez Tovar', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 33, name: 'OC Balsas', organismo_dl: 'OC Balsas', jefebriga: 'Ing. Humberto Hernández García', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 34, name: 'Dirección Local Nayarit', organismo_dl: 'Dirección Local Nayarit', jefebriga: 'C. Ismael García Cataño', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 35, name: 'Dirección Local Querétaro', organismo_dl: 'Dirección Local Querétaro', jefebriga: 'C. Jorge Rodríguez Castañon', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 36, name: 'Dirección Local Zacatecas', organismo_dl: 'Dirección Local Zacatecas', jefebriga: 'Ing. Martín Montellano Valdez', jefecrae:'N/A', teljb:'', teljc:'' },
      { id: 37, name: 'Dirección Local Durango', organismo_dl: 'Dirección Local Durango', jefebriga: 'Ing. Héctor Manuel Ruiz Aguirre', jefecrae:'N/A', teljb:'', teljc:'' }
    ];
    return {operativos, responsables};
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
