export class Model {
    id?: number;
    otherData: any;

    clone(): this {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}