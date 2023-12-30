export type TSaveTranscript = {
  id: string;
  content: string;
};

export interface IModal {
  normalText: string;
  isInput: boolean;
  grayText: string;
  onClick: () => void;
  isLoadingSavedTranscript?: boolean;
}

export interface ICardHistory {
  _id: string;
  content: string;
  name: string;
  isProcessing: boolean;
  createdAt: string;
}
