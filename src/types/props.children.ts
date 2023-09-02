// https://dev.to/maafaishal/unsafe-propswithchildren-utility-type-in-react-typescript-app-3bd3

type PropsWithChildren<P = unknown> = P & { children: React.ReactNode };

type PropsWithOptionalChildren<P = unknown> = P & {
  children?: React.ReactNode;
};

export type { PropsWithChildren, PropsWithOptionalChildren };
