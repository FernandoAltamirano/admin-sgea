import { useEffect, useState } from "react";

export const useSearch = ({ events }) => {
  const [search, setSearch] = useState("");
  const [dataFilter, setDataFilter] = useState(events);

  useEffect(() => {
    setDataFilter(
      events?.filter((item) =>
        item.titulo.toLowerCase().includes(search.toLowerCase())
      )
    );
    return () => setDataFilter([]);
  }, [search]);

  return { search, setSearch, dataFilter, setDataFilter };
};
