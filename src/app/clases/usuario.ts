import { Empresa } from "./empresa";

export class Usuario {
    id?: string;
    nombre?: string;
    correo?: string;
    password?: string;
    empresas?: Empresa[]
}
