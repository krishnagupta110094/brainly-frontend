export type ContentType = "youtube" | "twitter" | "others";

export interface Content {
  _id: string;
  title: string;
  link: string;
  type: ContentType;
}
