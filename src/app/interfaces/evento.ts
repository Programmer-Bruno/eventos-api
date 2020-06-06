import { CasaShow } from './casa-show';

export interface Evento {
    codigo: number;
    nome: string;
    descricao: string;
    data: Date;
    preco: number;
    quant_ingresso: number;
    casaDeShow: CasaShow;
}
