export interface AuthenticationResponse {
    user: { _id: string; email: string };
    token: string;
}
