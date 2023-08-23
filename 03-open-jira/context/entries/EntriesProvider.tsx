import { FC, ReactNode, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis facere",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "En Progreso: Atque perferendis facere",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Terminadas: Lorem ipsum dolor sit amet consectetur. Atque perferendis facere",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
}

interface Prop {
  children: ReactNode;
}


export const EntriesProvider: FC<Prop> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = ( description: string ) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    }

    dispatch({ 
      type: '[Entry] - Add-Entry', 
      payload: newEntry 
    });
  }

  const updateEntry = ( entry: Entry ) => {
    dispatch({
      type: '[Entry] - Entry-Updated',
      payload: entry
    });
  };

  return (
    <EntriesContext.Provider value={{
      ...state,

      // Methods
      addNewEntry,
      updateEntry,
    }}>
      {children}
    </EntriesContext.Provider>
  )
}