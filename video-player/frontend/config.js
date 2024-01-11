export const server = import.meta.env.VITE_BACKEND_URL;

export const videoUploadHeader = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
}