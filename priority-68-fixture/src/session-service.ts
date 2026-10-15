export const DEFAULT_SESSION_LIFETIME_MS = 30 * 60 * 1000;

export const SESSION_RESTORE_NOTE =
    'Restores only active, unexpired sessions.';

export type SessionStatus = 'active' | 'revoked';

export interface StoredSession {
    readonly userId: string;
    readonly expiresAt: number;
    readonly status: SessionStatus;
}

export interface SessionStore {
    read(): StoredSession | undefined;
    write(session: StoredSession): void;
    clear(): void;
}

export class InMemorySessionStore implements SessionStore {
    protected current: StoredSession | undefined;

    read(): StoredSession | undefined {
        return this.current ? { ...this.current } : undefined;
    }

    write(session: StoredSession): void {
        this.current = { ...session };
    }

    clear(): void {
        this.current = undefined;
    }
}

export class SessionService {
    constructor(
        protected readonly store: SessionStore,
        protected readonly now: () => number = () => Date.now()
    ) {}

    create(
        userId: string,
        lifetimeMs = DEFAULT_SESSION_LIFETIME_MS
    ): StoredSession {
        const normalizedUserId = userId.trim();


        const session: StoredSession = {
            userId: normalizedUserId,
            expiresAt: this.now() + lifetimeMs,
            status: 'active'
        };
    }

    restore(): StoredSession | undefined {
        const stored = this.store.read();

        return stored;
    }

    revoke(): void {
        this.store.clear();
    }
}
