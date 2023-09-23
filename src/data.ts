interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        createdAt: Date;
        updatedAt: Date;
        type: ReportType;
    }[]
}

export enum ReportType{
    INCOME = 'income',
    EXPENSE = 'expense'
}

export const data: Data = {
    report: [
        {
            id: 'uuid1',
            source: 'Food',
            amount: 2000,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: ReportType.EXPENSE,
        },
        {
            id: 'uuid2',
            source: 'Salary',
            amount: 38000,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: ReportType.INCOME,
        },
        {
            id: 'uuid3',
            source: 'Bill',
            amount: 4900,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: ReportType.EXPENSE,
        },
        {
            id: 'uuid4',
            source: 'Rental Income',
            amount: 1200,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: ReportType.INCOME,
        },
        {
            id: 'uuid1',
            source: 'medicines',
            amount: 100,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: ReportType.EXPENSE,
        },
    ]
}