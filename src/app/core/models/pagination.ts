export interface Pagination {
    first: string | null;
    next: string | null;
    last: string | null;
    prev: string | null;
}

export interface PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}
