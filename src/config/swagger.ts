// import { Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// const router = Router();

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
        './src/routes/userRouter.ts',
        './src/routes/communityRouter.ts',
    ], // 라우터 파일의 경로를 지정합니다.
};

const specs = swaggerJsdoc(options);
// router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default { swaggerUi, specs };

