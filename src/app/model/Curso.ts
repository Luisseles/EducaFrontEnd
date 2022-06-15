import { Parceiro } from "./Parceiro"
import { Usuario } from "./Usuario"

export class Curso{
    public id: number;
    public titulo: string;
    public vagas: number;
    public duracao: string;
    public preco: number;
    public usuario: Usuario[];
    public parceiro: Parceiro[];

}