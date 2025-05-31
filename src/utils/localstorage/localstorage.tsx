export const crearStorage = (itemName: string, data: string) => {
    localStorage.setItem(itemName, JSON.stringify(data));
}

export const removerStorage = (itemName: string) => {
    localStorage.removeItem(itemName);
}

export const usarStorage = (itemName: string) => {
    const localstorageItem = localStorage.getItem(itemName);
    return JSON.parse(localstorageItem as string) || null;
}



