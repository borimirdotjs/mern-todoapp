import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {pageNumber.map((page) => (
          <li key={page} className={styles.item}>
            <a
              onClick={() => paginate(page)}
              href="!#"
              className={styles.number}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
