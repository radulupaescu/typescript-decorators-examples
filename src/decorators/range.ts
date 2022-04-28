import 'reflect-metadata';

export const Range = (min, max = null) =>
    (target: Object, methodName: string, index: number) => {
        Reflect.defineMetadata(`range:${methodName}:${index}:min`, min, target);
        Reflect.defineMetadata(`range:${methodName}:${index}:max`, max, target);
    };