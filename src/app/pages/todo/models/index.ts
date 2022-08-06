export interface Todo {
  id: string;
  name: string;
  creationDate: Date;
  notes: string;
  status: boolean;
}

export interface LoadingState {
  loadInProgress: boolean,
  createInProgress: boolean,
  updateInProgress: boolean,
  deleteInProgress: boolean,
}
