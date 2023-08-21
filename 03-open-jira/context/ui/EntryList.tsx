import { useContext, useMemo, FC } from "react";
import { Paper, List } from "@mui/material";
import { EntryCard } from ".";
import { EntryStatus } from "@/interfaces";
import { EntriesContext } from "../entries";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])



  return (
    //TODO: Aquí haremos Drop
    <div >
      <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
        {/* //TODO: Cambiara dependiendo si está haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  )
}
