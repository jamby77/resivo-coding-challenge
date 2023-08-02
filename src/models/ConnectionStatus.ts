export const ConnectionStatus = {
  Online: 'online',
  Offline: 'offline',
} as const;

export type ConnectionStatus =
  (typeof ConnectionStatus)[keyof typeof ConnectionStatus];
