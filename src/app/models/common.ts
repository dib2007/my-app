export interface Metric {
    id?: number
    name?: string,
    command?: string,
    output?: string,
    createdby?: string,
    lastUpdate?: string
    lastupdatetime?: string,
    laststatus?: string
}

export interface Server {
    name: string,
    ip: string,
    username: string,
    password: string,
    status?: string,
    metrics?: Metric[]
}

export var PORT = 8409
export var domain = "http://localhost"

export interface Response {
    error: object;
    data?: any;
}