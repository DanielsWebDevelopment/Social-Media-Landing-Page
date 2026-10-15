import { AuthService } from './auth-service';
import {
    InMemorySessionStore,
    SessionService
} from './session-service';


export function runSessionServiceFixtureTests(): void {
    const validStore = new InMemorySessionStore();
    const validSessionService = new SessionService(validStore, () => 1000);
    const validAuthService = new AuthService(validSessionService);

    validSessionService.create('fixture-user', 1000);

    const restored = validAuthService.restoreAuthenticatedSession();

    expectEqual(
        restored.authenticated,
        true,
        'An unexpired session should be restored'
    );
    expectEqual(
        restored.userId,
        'fixture-user',
        'The restored session should retain its user ID'
    );

    const expiredStore = new InMemorySessionStore();
    const sessionCreator = new SessionService(expiredStore, () => 1000);

    sessionCreator.create('expired-user', 100);

    const expiredSessionService = new SessionService(
        expiredStore,
        () => 1200
    );
    const expiredAuthService = new AuthService(expiredSessionService);
    const expired = expiredAuthService.restoreAuthenticatedSession();

    expectEqual(
        expired.authenticated,
        false,
        'An expired session should not be restored'
    );
    expectEqual(
        expiredStore.read(),
        undefined,
        'An expired session should be removed'
    );
}
