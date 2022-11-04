import ReactPaginate from "react-paginate";
import styles from "../styles/Pagination.module.scss";

interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
}: Pagination) {
  let pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="N"
          onPageChange={(e) => {
            console.log(e);
            paginate(e.selected + 1);
          }}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(totalItems / itemsPerPage)}
          previousLabel="P"
          containerClassName={styles.pageHold}
          activeClassName={styles.active}
          previousClassName={styles.prev}
          pageClassName={styles.disabled}
          nextClassName={styles.next}
        />
      </div>
    </div>
  );
}
