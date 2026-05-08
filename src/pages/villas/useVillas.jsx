import { useState } from "react";
import { villaRows } from "../../data/villas";

export const useVillas = () => {
  const [selectedRow, setSelectedRow] = useState(villaRows[0]);
  const [animKey, setAnimKey] = useState(0);

  const handleRowSelect = (row) => {
    setSelectedRow(row);
    setAnimKey((k) => k + 1);
  };
  return { animKey, selectedRow, handleRowSelect };
};
