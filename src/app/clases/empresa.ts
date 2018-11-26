import { Usuario } from "./usuario";

export class Empresa {
    id?: string;
    nombre?: string;
    ruc?: string;
    direccion: string;
    telefono?: string;
    correo?: string;
    usuarios?: Usuario[]
}
