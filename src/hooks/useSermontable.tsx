
import { HeaderType, FilterState, FilterAction } from "@/types/table.types";
import { Icons } from "@/components/common/SvgIcons";
import { useCallback, useEffect, useReducer, useState } from "react";
import axios from "axios";
import useIsMobile from "./useIsMobile";
export default function useSermonTable() {
  const isMobile = useIsMobile();
  const headers: HeaderType[] = isMobile ?
    [{ label: "Title" },
   { label: "Actions" },]:
    [
   { label: "Title" },
   { label: "Duration", icon: <Icons.sort /> },
   { label: "Listens", icon: <Icons.sort /> },
   { label: "Likes", icon: <Icons.sort /> },
   { label: "Date preached"},
   { label: "Status" },
   { label: "Date Added" },
   { label: "Actions" },
 ];
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleToggleExpand = (index: number | null) => {
    setExpandedRow((prevIndex) => (prevIndex === index ? null : index));
  };


const initialState: FilterState = {
  page: 1,
  searchString: "",
  searchBy: "name",
  Export: false,
};

const queryReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, [action.payload.field]: action.payload.value };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "RESET_FILTERS":
      return initialState;
    default:
      return state;
  }
};


  const [filterState, dispatch] = useReducer(queryReducer, initialState);
  const [query, setQuery] = useState<FilterState>(() => ({ ...filterState }));

  const setPage = (newPage: number) => {
    dispatch({ type: "SET_PAGE", payload: newPage });
  };

  const setFilters = useCallback((payload: { field: keyof FilterState; value: string | number | boolean }) => {
    dispatch({ type: "SET_FILTER", payload });
  }, []);

  const handleFilter = useCallback(() => {
    setQuery(filterState);
    dispatch({ type: "SET_PAGE", payload: 1 });
  }, [filterState]);

  const handleClear = () => {
    dispatch({ type: "RESET_FILTERS" });
    setQuery(initialState);
  };

  const [sermons, setSermons] = useState([]);
  const [fetching, setIsfetching] = useState(true)
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await axios.get(
          "https://api.edifyapp.co/sermon?page=1&limit=100",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSermons(response?.data?.data);
        setIsfetching(false)
      } catch (error) {
        console.error("Error fetching sermons:", error);
      }
    };

    fetchSermons();
  }, []);

return {
  headers,
  handleToggleExpand,
  expandedRow,
  query,
  setPage,
  setFilters,
  handleFilter,
  handleClear,
  sermons,
  filterState,
  fetching,
};
 }