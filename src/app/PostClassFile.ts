export class PostClass {
  title: string;
  content: string;
  loveIts: number;
  creationDate: Date;

  constructor(postTitle: string, postContent: string, postLoveNumber: number = 0, postCreationDate: Date = new Date() ) {
    this.title = postTitle;
    this.content = postContent;
    this.loveIts = postLoveNumber;
    this.creationDate = postCreationDate;
  }

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string {
    return this.content;
  }

  public getLoveNumber(): number {
    return this.loveIts;
  }

  public getCreationDate(): Date {
    return this.creationDate;
  }
}
