export enum ActionType {
  INIT = 'init',
  UPDATE_PARAMS = 'update/params',
  OPEN_COLLECTION = 'open/collection',
}

export enum Switch {
  OPEN = 'open',
  CLOSE = 'close'
}

export interface State {
  collectionStatus?: string,
  dynamicComponentStatus?: string
}

export interface Action {
  type: string;
  payload: {
    data?: State;
  };
}

export interface Article {
  id: string;
  title: string;
  content: string;
  contentSize: number;
  createAt: Date,
  updateAt: Date,
  readAt: Date,
  relationNum: number;
  relationStrong: Article[];
  relationWeak: Article[];
  isTop?: boolean;
}
