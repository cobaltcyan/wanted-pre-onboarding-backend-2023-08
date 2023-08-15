class PostingDto {
    id: bigint | null;
    userId: bigint;
    title: string;
    content: string;
    hidden: Boolean | null;
    createdAt: Date;
    createdId: string | null;
    updatedAt: Date;
    updatedId: string | null;
    
    constructor(
        //   id: string | null,
        userId: bigint,
        title: string,
        content: string,
        hidden: Boolean | null,
        createdAt: Date = new Date(),
        createdId: string | null,
        updatedAt: Date | null = new Date(),
        updatedId: string | null,
    ) {
        // this.id = id || null;
        this.id = null;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.hidden = hidden;
        this.createdAt = new Date();
        this.createdId = createdId;
        this.updatedAt = new Date() || null;
        this.updatedId = updatedId || null;
    }
  }
  
  export default PostingDto;