class Posting {
    id: bigint | null;
    // userId: string;
    userId: bigint;
    title: string;
    content: string;
    hidden: Boolean | null = false;
    createdAt: Date | null;
    // createdId: string | null;
    createdId: bigint | null;
    updatedAt: Date | null;
    // updatedId: string | null;
    updatedId: bigint | null;
    
    constructor(
        id: bigint | null,
        // userId: string,
        userId: bigint,
        title: string,
        content: string,
        hidden: Boolean | null = false,
        // createdAt: Date = new Date(),
        createdAt: Date | null,
        // createdId: string | null,
        createdId: bigint | null,
        // updatedAt: Date | null = new Date(),
        updatedAt: Date | null,
        // updatedAt: Date = new Date(),
        // updatedId: string | null
        updatedId: bigint | null
    ) {
        this.id = id || null;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.hidden = hidden;
        // this.createdAt = new Date();
        this.createdAt = createdAt;
        this.createdId = createdId;
        this.updatedAt = updatedAt;
        this.updatedId = updatedId;
    }
  }
  
  export default Posting;