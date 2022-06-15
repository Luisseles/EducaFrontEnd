import { Curso } from "./Curso"

export class Usuario{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public pronome: string
    public foto: string
    public telefone:string
    public curso:Curso[]
}