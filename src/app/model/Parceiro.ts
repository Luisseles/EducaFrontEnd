import { Curso } from "./Curso";

export class Parceiro {

    public id: number;
	public nome: string;
	public foto: string;
	public cnpj: string;
	public email: string;
	public telefone: string;
	public senha: string
    public curso: Curso[];
}