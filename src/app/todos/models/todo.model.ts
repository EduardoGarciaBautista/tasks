export class TodoModel {
  public id: number;
  public text: string;
  public completed: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = Date.now();
    this.completed = false;
  }

}
