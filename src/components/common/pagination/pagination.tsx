import React from "react";
import { PaginationProps } from "./pagination.props";
import styles from "./pagination.module.css";
import { useAppDispatch } from "../../../hooks";
import { handlePageCard } from "../../../store/cardsReducer";

const Pagination = ({ currentPage, pages }: PaginationProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ul className={styles.pagination__ul}>        
        {pages.map((page) => (
          <li
            key={"page " + page}
            onClick={() => dispatch(handlePageCard(page))}
            className={page === currentPage ? styles.active : ""}
          >
            <a>{page}</a>
          </li>
        ))}       
      </ul>
    </nav>
  );
};

export default Pagination;
