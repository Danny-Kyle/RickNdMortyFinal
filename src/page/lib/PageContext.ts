import { createContext } from "react";

export interface PageContextState {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const PageContext = createContext<PageContextState>({
    currentPage: 1,
    setCurrentPage: () => {}
})

export default PageContext