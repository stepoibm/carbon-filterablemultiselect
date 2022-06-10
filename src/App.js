import './App.css';
import {useEffect, useState} from "react";
import {MultiSelect} from '@carbon/react'
import FilterableMultiSelect from "@carbon/react/lib/components/MultiSelect/FilterableMultiSelect";

const items = [
  {
    id: 'downshift-1-item-0',
    text: 'Option 1'
  },
  {
    id: 'downshift-1-item-1',
    text: 'Option 2'
  },
  {
    disabled: true,
    id: 'downshift-1-item-2',
    text: 'Option 3 - a disabled item'
  },
  {
    id: 'downshift-1-item-3',
    text: 'Option 4'
  },
  {
    id: 'downshift-1-item-4',
    text: 'An example option that is really long to show what should be done to handle long text'
  },
  {
    id: 'downshift-1-item-5',
    text: 'Option 5'
  }
]

function App() {
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    setSelectedItems([
      {
        "id": "downshift-1-item-0",
        "text": "Option 1"
      },
      {
        "id": "downshift-1-item-1",
        "text": "Option 2"
      }
    ])

  }, [])

  return (
    <>
      <MultiSelect
        label=""
        id="carbon-multiselect-example-3"
        itemToString={(item) => item.text}
        items={items}
        selectedItems={selectedItems} //selectedItems works with state changes
        titleText="MultiSelect is working"
      />
      <FilterableMultiSelect
        placeholder=""
        id="carbon-multiselect-example-3"
        itemToString={(item) => item.text}
        items={items}
        initialSelectedItems={selectedItems} //this doesnt do anything
        selectedItems={selectedItems} //this doesnt do anything
        titleText="FilterableMultiSelect is not working"
      />
      <MultiSelect.Filterable
        id="carbon-multiselect-example-3"
        itemToString={(item) => item.text}
        items={items}
        initialSelectedItems={selectedItems} //this doesnt do anything
        selectedItems={selectedItems} //this doesnt do anything
        titleText="MultiSelect.Filterable is not working"
      />
    </>
  )
}

export default App;
