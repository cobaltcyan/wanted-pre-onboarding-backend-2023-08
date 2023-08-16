class PostingCreateDto {
    id: bigint | null;
    userId: bigint;
    title: string;
    content: string;
    createdAt: Date | null;
    createdId: bigint | null;

    constructor(
        id: bigint | null,
        userId: bigint,
        title: string,
        content: string,
        createdAt: Date | null,
        createdId: bigint
    ) {
        this.id = id || null;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.createdId = createdId;
    }
}
  
export default PostingCreateDto;