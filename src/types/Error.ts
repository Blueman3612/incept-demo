export interface ApiError extends Error {
    code?: string;
    status?: number;
    data?: unknown;
}

export type ErrorWithMessage = {
    message: string;
    [key: string]: unknown;
} 