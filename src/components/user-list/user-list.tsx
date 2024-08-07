import React, { useRef, useState } from 'react';
import { useUsers } from '../../hooks/use-users';
import { Footer } from './footer';
import { Header } from './header';
import { UserTable } from './user-table';
import { calcOffset, calcPageCount } from './utils';

export function UserList() {
  const ref = useRef<HTMLDivElement>(null);

  const [usersGetParams, setUsersGetParams] = useState({
    _start: '0',
    _limit: '20',
  });

  const {
    data: users,
    totalCount,
    isLoading,
    isFetching,
  } = useUsers(usersGetParams, () => {
    ref.current?.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });

  const [pageIndex, setPageIndex] = useState(0);

  const handlePageChange = (selectedPageIndex: number) => {
    setPageIndex(selectedPageIndex);

    setUsersGetParams((prev) => ({
      ...prev,
      _start: calcOffset(selectedPageIndex, prev._limit).toString(),
    }));
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageIndex(0);
    setUsersGetParams({ _start: '0', _limit: event.target.value });
  };

  return (
    <div>
      <Header />
      <UserTable
        isLoading={isLoading}
        isFetching={isFetching}
        users={users}
        ref={ref}
      />
      <Footer
        isLoading={isLoading}
        totalCount={totalCount}
        pageCount={calcPageCount(totalCount, usersGetParams._limit)}
        pageIndex={pageIndex}
        limit={Number(usersGetParams._limit)}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
      />
    </div>
  );
}
