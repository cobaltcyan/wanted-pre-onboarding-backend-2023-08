class Community {
    id: bigint | null;
    userId: string;
    title: string;
    content: string;
    attachmentId: string | null;
    hidden: Boolean | null;
    createdAt: Date;
    createdId: string | null;
    updatedAt: Date;
    updatedId: string | null;
    deletedAt: Date | null;
    deletedId: string | null;
    
    constructor(
        id: bigint | null,
        userId: string,
        title: string,
        content: string,
        attachmentId: string | null,
        hidden: Boolean | null,
        createdAt: Date = new Date(),
        createdId: string | null,
        updatedAt: Date | null = new Date(),
        updatedId: string | null,
        deletedAt: Date | null = new Date(),
        deletedId: string | null
    ) {
        this.id = id || null;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.attachmentId = attachmentId;
        this.hidden = hidden;
        this.createdAt = new Date();
        this.createdId = createdId;
        this.updatedAt = new Date() || null;
        this.updatedId = updatedId || null;
        this.deletedAt = new Date() || null;
        this.deletedId = deletedId || null;
    }
  }
  
  export default Community;
  
  