export type Table = {
    id: number,
    name: string,
    columns: number,
    rows: Row[]
}

export type Row = {
    id: number,
    fields: string[]
}