import * as C from './styles';
import { Item } from '../../types/item';

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) =>{
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={80}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn >Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) =>(
                    <tr key={index}>
                        {console.log('oi' + item)}
                        <td>{item.date}</td>
                        <td>{item.category}</td>
                        <td>{item.title}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </C.Table>
    );
}