export enum StatusToDo {
    pending,
    started,
    done
}
export class ToDo {
    constructor(public name: string, public status: StatusToDo, public startDate: Date, public endDate?: Date) {}
}