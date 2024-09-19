import React from "react";
import { PaginationProps } from "./pagination.props";
import styles from "./pagination.module.css";

const Pagination = ({
  currentPage,
  onPageChance,
  pages,
}: PaginationProps): JSX.Element => {
  return (
    <nav>
      <ul className={styles.pagination__ul}>
        <li className={styles.pagination__prev}>prev</li>
        {pages.map((page) => (
          <li
            key={"page " + page}
            onClick={() => onPageChance(page)}
            className={page === currentPage ? styles.active : ""}
          >
            <a>{page}</a>
          </li>
        ))}
        <li className={styles.pagination__right}>next</li>
      </ul>
    </nav>
  );
};

export default Pagination;
