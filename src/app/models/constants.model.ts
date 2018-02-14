export class Constants {
    static Views = {
        NameApp: 'ToDoList',
        ToDos: 'List of ToDos',
        CreateToDo: 'Create a ToDo',
        UpdateToDo: 'Update ToDo'
    };
    static Components = {
        List: {
            TaskName: 'NAME',
            TaskStatus: 'STATUS',
            TaskStart: 'START DATE',
            TaskEnd: 'END DATE'
        }
    };
    static Status = {
        Pending: 'PENDING',
        Done: 'DONE',
        Started: 'STARTED'
    };
    static Routes = {
        empty: '',
        list: 'list',
        detail: 'todo'
    }

    static Patterns = {
        date: '/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$\g'
    };
}