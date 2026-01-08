export type ContentType = "youtube" | "twitter";

export interface Content {
  _id: string;
  title: string;
  link: string;
  type: ContentType;
}
