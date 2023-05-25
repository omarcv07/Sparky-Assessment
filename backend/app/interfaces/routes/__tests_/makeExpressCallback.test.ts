import { MockedFunction } from 'jest-mock';
import makeExpressCallback, { ExpressCallback } from '../make-callback';

interface MockResponse extends Partial<Response> {
    send: jest.MockedFunction<any>;
    status: jest.MockedFunction<any>;
    type: jest.MockedFunction<any>;
    set: jest.MockedFunction<any>;
}

interface MockRequest extends Partial<Request> {
    body: any;
    query: any;
    params: any;
    ip: string;
    method: string;
    path: string;
    get: (headerName: string) => string;
}

describe("ExpressCallback tests", () => {
    // This test is expected to pass
    it("should return a successful response", async () => {
        const mockController: ExpressCallback = jest.fn().mockResolvedValue({ message: "success" });

        const req: MockRequest = {
            body: {},
            query: {},
            params: {},
            ip: '127.0.0.1',
            method: 'GET',
            path: '/',
            get: (headerName: string) => 'mock value',
        };
        const res: MockResponse = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis(),
            type: jest.fn().mockReturnThis(),
            set: jest.fn().mockReturnThis(),
        };
        const expressCallback = makeExpressCallback(mockController);

        await expressCallback(req as any, res as any);

        expect(res.send).toHaveBeenCalledWith({
            success: true,
            code: 200,
            data: { message: "success" },
        });
    });

    // This test is expected to fail
    it("should return an error response when controller throws", async () => {
        const mockController: ExpressCallback = jest.fn().mockRejectedValue({ message: "failed", statusCode: 400 });

        const req: MockRequest = {
            body: {},
            query: {},
            params: {},
            ip: '127.0.0.1',
            method: 'GET',
            path: '/',
            get: (headerName: string) => 'mock value',
        };
        const res: MockResponse = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis(),
            type: jest.fn().mockReturnThis(),
            set: jest.fn().mockReturnThis(),
        };
        const expressCallback = makeExpressCallback(mockController);

        await expressCallback(req as any, res as any);

        expect(res.send).toHaveBeenCalledWith({
            success: false,
            code: 400,
            error: {
                description: "failed"
            },
        });
    });
});