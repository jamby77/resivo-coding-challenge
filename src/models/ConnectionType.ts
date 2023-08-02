export const ConnectionType = {
  Wired: 'wired',
  Wireless: 'wireless',
} as const;

export type ConnectionType =
  (typeof ConnectionType)[keyof typeof ConnectionType];
