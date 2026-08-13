export const SETTINGS_PANEL_TITLE = 'Agent Settings';

export const SETTINGS_PANEL_DESCRIPTION =
    'Configure workspace access and session presentation.';

export type WorkspaceAccess = 'allowed' | 'disabled';

export interface SettingsState {
    readonly compactLayout: boolean;
    readonly showSessionHeader: boolean;
    readonly workspaceAccess: WorkspaceAccess;
}

export interface SettingsViewModel {
    readonly title: string;
    readonly description: string;
    readonly layoutLabel: string;
    readonly workspaceAccessLabel: string;
}

export function createDefaultSettings(): SettingsState {
    return {
        compactLayout: false,
        showSessionHeader: true,
        workspaceAccess: 'allowed'
    };
}

export function createSettingsViewModel(
    settings: SettingsState
): SettingsViewModel {
    return {
        title: SETTINGS_PANEL_TITLE,
        description: SETTINGS_PANEL_DESCRIPTION,
        layoutLabel: settings.compactLayout ? 'Compact' : 'Comfortable',
        workspaceAccessLabel:
            settings.workspaceAccess === 'allowed' ? 'Allowed' : 'Disabled'
    };
}

export function toggleCompactLayout(
    settings: SettingsState
): SettingsState {
    return {
        ...settings,
        compactLayout: !settings.compactLayout
    };
}
