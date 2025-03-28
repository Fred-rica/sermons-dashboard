import { JSX } from "react";

export type HeaderType = string | { label: string; icon?: React.ReactNode };

export type TableProps<T> = {
  headers: HeaderType[];
  renderRow: (
    rowData: T,
    index: number,
    handleToggleExpand: (index: number) => void,
    expandedRow: number | null,
  ) => React.ReactNode;
  renderExpandedRow?: (rowData: T) => React.ReactNode;
  rowsPerPage?: number;
  currentPage: number;
  setPage: (page: number) => void;
  expandedRow: number | null;
  handleToggleExpand: (index: number) => void;
  isLoading: boolean;
  filteredData: T[];
};

export interface RowData {
  title: string;
  image_url: string;
  preacher?: {
    name: string;
  };
  duration: number;
  number_of_listens: number;
  number_of_likes: number;
  release_date: string;
  visibility: string;
  created_at: string;
  actions: JSX.Element;
  audio_download_url: string;
}

export type FilterState = {
  page: number;
  searchString: string;
};

export type FilterAction =
  | {
      type: "SET_FILTER";
      payload: { field: keyof FilterState; value: string | number | boolean };
    }
  | { type: "SET_PAGE"; payload: number }
  | { type: "RESET_FILTERS" };
