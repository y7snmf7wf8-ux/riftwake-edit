export type CaptionKind = "whisper" | "impact" | "title";

export type Caption = {
  at: number;
  until: number;
  text: string;
  kind: CaptionKind;
};

export const EDIT_DURATION = 21.0;
export const DROP_AT = 8.38;

export const CAPTIONS: Caption[] = [
  { at: 1.05, until: 3.1, text: "they said the war was over", kind: "whisper" },
  { at: 6.2, until: 8.28, text: "he never got the message", kind: "whisper" },
  { at: 13.9, until: 16.1, text: "THE LAST WARDEN", kind: "impact" },
  { at: 18.62, until: 21.0, text: "RIFTWAKE", kind: "title" },
];

export const TIKTOK_CAPTION = `he was never meant to come back.\n\nTHE LAST WARDEN.\n\n#fyp #edit #cinematic #superhero #viral #xyzbca #foryou`;

export const FLASH_TIMES = [4.7, 8.38, 10.18];
