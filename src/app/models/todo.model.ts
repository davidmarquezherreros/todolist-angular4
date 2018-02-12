export enum StatusToDo {
    pending,
    started,
    done
}
export class ToDo {
    constructor(public id: number, public name: string, public status: StatusToDo, public startDate: Date, public endDate?: Date) {}
}