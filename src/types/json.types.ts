export type JSONValue = string | number | boolean;

export interface FlatJSONObject {
  [x: string]: JSONValue;
}

export interface JSONObject {
  [x: string]: JSONValue | JSONObject;
}
