export type Table = {
    id: number,
    name: string,
    columns: string[],
    rows: Row[]
}

export type Row = {
    id: number,
    fields: string[]
}