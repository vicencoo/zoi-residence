import { useMemo, useState } from "react";
import { VILLA_ROWS } from "../../data/villas";
import { useTranslation } from "react-i18next";

export const useVillas = () => {
  const { t, i18n } = useTranslation("villas");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const villaRows = useMemo(() => VILLA_ROWS(t), [t, i18n.language]);

  const [selectedRowId, setSelectedRowId] = useState(villaRows[0].id);
  const [animKey, setAnimKey] = useState(0);

  const selectedRow =
    villaRows.find((row) => row.id === selectedRowId) || villaRows[0];

  const handleRowSelect = (row) => {
    setSelectedRowId(row.id);
    setAnimKey((k) => k + 1);
  };

  return { animKey, selectedRow, handleRowSelect, villaRows };
};
