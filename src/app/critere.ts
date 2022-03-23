import { Norme } from "./norme";

export interface Critere {
    critereId?: string,
    designation?: string,
    norme?:Norme,
}
