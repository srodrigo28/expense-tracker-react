import { useState, useEffect } from 'react';
import * as C from './App.styles';

import { Category } from './types/Category';
import { Item } from './types/item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea'

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMoth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMoth) );
  }, [list, currentMoth] );

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* Área de informações */}

        {/* Áarea de inservação */}

        {/* Área de itens */}

        <TableArea list={filteredList} />

        
      </C.Body>
    </C.Container>    
  );
}

export default App;