import React, { PropsWithChildren } from 'react';
import { Column, ColumnInstance, HeaderGroup, useTable } from 'react-table';
import classnames from 'classnames';

import styles from './Table.module.scss';

interface Props<T extends object> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

const Table = <T extends object>({ columns, data, className }: PropsWithChildren<Props<T>>) => {
  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } = useTable<T>({
    columns,
    data,
  });

  return (
    <div className={classnames(styles.customTableWrapper, className)}>
      <div {...getTableProps()} className={styles.customTable}>
        <div className={styles.tableHeader}>
          {headerGroups.map((headerGroup, index) => (
            <div
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id + index}
              className={styles.tableRow}
            >
              {headerGroup.headers.map(column => (
                <div
                  {...column.getHeaderProps()}
                  key={column.id}
                  className={classnames(
                    styles.tableHeaderCell,
                    (column as HeaderGroup<T> & { className: string }).className,
                  )}
                >
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className={styles.tableBody}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} key={row.id} className={styles.tableRow}>
                {row.cells.map(cell => (
                  <div
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className={classnames(
                      styles.tableCell,
                      (cell.column as ColumnInstance<T> & { className: string }).className,
                    )}
                  >
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
