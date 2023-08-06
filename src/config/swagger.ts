import { Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
const swaggerRouter = Router();

const options = {
    swaggerDefinition: {
    openapi: '3.0.0',
    info: {
        title: '원티드 백엔드 인턴십 사전과제',
        version: '1.0.0',
        description: '원티드 백엔드 인턴십 사전과제 관련  API 문서입니다.',
    },
    servers: [
            {
                url: `http://localhost:${process.env.PORT}`,
                description: "dev Server",
            },
        ],
    },
    apis: [
        '../routes/userRouter.ts',
        '../routes/communityRouter.ts',
    ],
};

const specs = swaggerJsdoc(options);
swaggerRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// export { swaggerUi, specs };
export default swaggerRouter;