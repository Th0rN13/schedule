export function* chunks<T>(arr: Array<T>, n: number): Generator<Array<T>> {
    for (let i = 0; i < arr.length; i += n) {
        yield arr.slice(i, i + n);
    }
}

export function getNearestMonday(today?: Date): string {
    const currentDate = today ? today : new Date();
    const day = currentDate.getDay();
    let diff = currentDate.getDate() - day + 1;
    if (day > 3) diff += 7;
    const monday = new Date(currentDate.setDate(diff));

    return monday.toISOString().split('T')[0];
}