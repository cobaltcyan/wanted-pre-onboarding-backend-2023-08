class PostingCreateDto {
    id: bigint | null;
    userId: bigint;
    title: string;
    content: string;
    hidden: Boolean | null;
    createdAt: Date;
    // createdId: string | null;
    createdId: bigint | null;

    constructor(
        id: bigint | null,
        userId: bigint,
        title: string,
        content: string,
        hidden: Boolean | null = false,
        createdAt: Date = new Date(),
        // createdId: string | null
        createdId: bigint | null
    ) {
        this.id = id || null;
        this.id = null;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.hidden = hidden;
        this.createdAt = new Date();
        this.createdId = createdId;
    }
  }
  
  export default PostingCreateDto;