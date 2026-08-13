import { SessionService } from './session-service';

export interface AuthenticationState {
    readonly authenticated: boolean;
    readonly userId?: string;
}

export class AuthService {
    constructor(
        protected readonly sessionService: SessionService
    ) {}

    signIn(userId: string): AuthenticationState {
        const session = this.sessionService.create(userId);

        return {
            authenticated: true,
            userId: session.userId
        };
    }

    restoreAuthenticatedSession(): AuthenticationState {
        const session = this.sessionService.restore();

        if (!session) {
            return {
                authenticated: false
            };
        }

        return {
            authenticated: true,
            userId: session.userId
        };
    }

    signOut(): AuthenticationState {
        this.sessionService.revoke();

        return {
            authenticated: false
        };
    }
}
