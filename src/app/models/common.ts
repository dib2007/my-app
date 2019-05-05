export interface Metric{
    name : string,
    command : string,
    output : string,
    createdBy : string,
    updatedBy : string,
    lastUpdate : string
}

export interface Server {
    ip : string,
    uName : string,
    pass : string,
    metrics: Metric[]
}

export interface Response {
    error: object;
    data?: any;
}