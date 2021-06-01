import { Uuid, UuidOptions } from 'node-ts-uuid';
export interface IUUIDoptions {
    length?: number,
    prefix?: string
}

export interface IUseUUID {
    generateUUID: (options: IUUIDoptions) => string
}
export function useUUID(): IUseUUID {
    return {
        generateUUID(options: IUUIDoptions): string {
            return Uuid.generate(options);

        }
    }
}
