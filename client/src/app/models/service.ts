
export enum ServiceStatus {
    OK,
    WARNING,
    ERROR
}
export class Service {

    private _name: string
    private _url: string;
    private _status: ServiceStatus;

    constructor(name: string, url: string) {
        this._name = name;
        this._url = url;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get status(): ServiceStatus {
        return this._status;
    }

    set status(value: ServiceStatus) {
        this._status = value;
    }
}
