import { Omit as LodashOmit, omit, pick } from 'lodash';
import React, { FC } from 'react';

export type Unpacked<T> = T extends (infer U)[] ? U : T;
export type ReadonlyUnpacked<T> = T extends readonly (infer U)[] ? U : T;

export type Maybe<T> = T | null;
export type NotMaybe<T> = Exclude<T, undefined | null>;
export type Compact<T extends never[] | undefined | null> = Array<NotMaybe<Unpacked<T>>>;

/**
 * Makes all fields in an object required, recursively
 */
export type Complete<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : T[P] | undefined;
};

/**
 * Adds null to all fields that may be undefined, recursively
 */
export type AddMaybeToUndefined<T> = {
  [P in keyof T]: Pick<T, P> extends Required<Pick<T, P>>
    ? AddMaybeToUndefined<T[P]>
    : AddMaybeToUndefined<T[P]> | null;
};

export type CMSComponent<T> = FC<React.PropsWithChildren<T>>;

export const isNotMaybe = <T>(el: T): el is NotMaybe<T> => el !== undefined && el !== null;

export const tsPick = <T extends {}, Picks extends Array<keyof T>>(obj: T, ...picks: Picks): Pick<T, Picks[number]> =>
  pick(obj, picks);

export const tsOmit = <T extends {}, Picks extends Array<keyof T>>(
  obj: T,
  ...picks: Picks
): LodashOmit<T, Picks[number]> => omit(obj, picks);
