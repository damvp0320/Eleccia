import SergioFajardo from "../assets/Sergio Fajardo.png";
import ClaudiaLopez from "../assets/Claudia Lopez.png";
import IvanCepeda from "../assets/Ivan Cepeda.png";
import MauricioCardenas from "../assets/Mauricio Cardenas.png";
import AbelardoEspriella from "../assets/Abelardo de la Espriella.png";

export interface Candidate {
  id: number;
  name: string;
  image: string;
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Sergio Fajardo",
    image: SergioFajardo
  },
  {
    id: 2,
    name: "Claudia López",
    image: ClaudiaLopez
  },
  {
    id: 3,
    name: "Iván Cepeda",
    image: IvanCepeda
  },
  {
    id: 4,
    name: "Mauricio Cárdenas",
    image: MauricioCardenas
  },
  {
    id: 5,
    name: "Abelardo de la Espriella",
    image: AbelardoEspriella
  }
];
