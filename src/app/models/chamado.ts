import { Morador } from 'src/app/models/morador';
export interface Chamado{
    id?: any;
    dataEntrada?: string;
    dataSaida?: string;
    status: string;
    descricao: string;
    porteiro: string;
    morador: string;
    nomePorteiro: string;
    nomeMorador: string;

}