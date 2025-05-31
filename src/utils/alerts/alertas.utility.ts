import { toast } from 'react-toastify';

export const alertSucces = ({ text }: { text: string }) => {
    toast.success(text);
}

export const alertError = ({ text }: { text: string }) => {
    toast.error(text);
}

export const alertWarning = ({ text }: { text: string }) => {
    toast.warn(text);
}