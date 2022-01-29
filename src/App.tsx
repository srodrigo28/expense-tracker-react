import { useState, useEffect } from 'react';
import * as C from './App.styles';

//import { Category } from './types/Category'
//import { categories } from './data/categories'
import { Item } from './types/Item'
import { items } from './data/items'
import { getCurrentMonth, FilterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { TableItem  } from './components/TableItem'



const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* Área de informações */}

        {/* Áarea de inservação */}

        {/* Área de itens */}
        <TableArea list={filteredList}/>

        
      </C.Body>
    </C.Container>    
  );
}

export default App;