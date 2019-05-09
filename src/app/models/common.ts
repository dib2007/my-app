export interface Metric{
    name : string,
    command : string,
    output : string,
    createdBy : string,
    lastUpdate : string
    updatedBy : string,
    status : string
}

export interface Server {
    name: string,
    ip : string,
    uName : string,
    pass : string,
    status : string,
    metrics: Metric[]
}

export interface Response {
    error: object;
    data?: any;
}