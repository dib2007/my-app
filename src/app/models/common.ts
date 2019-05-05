export interface Metric{
    name : string,
    command : string,
    output : string,
    createdBy : string,
    updatedBy : string,
    lastUpdate : string,
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