class Posting {
    id: bigint | null;
    userId: bigint;
    title: string;
    content: string;
    hidden: Boolean | null = false;
    createdAt: Date | null;
    createdId: bigint | null;
    updatedAt: Date | null;
    updatedId: bigint | null;
    
    constructor(
        id: bigint | null,
        userId: bigint,
        title: string,
        content: string,
        hidden: Boolean | null = false,
        createdAt: Date | null,
        createdId: bigint | null,
        updatedAt: Date | null,
        updatedId: bigint | null
    ) {
        this.id = id || null;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.hidden = hidden;
        this.createdAt = createdAt;
        this.createdId = createdId;
        this.updatedAt = updatedAt;
        this.updatedId = updatedId;
    }
  }
  
  export default Posting;