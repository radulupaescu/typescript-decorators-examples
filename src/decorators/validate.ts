export const Validate = () =>
    (target: Object, methodName: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = function (...args) {
            for (let index = 0; index < args.length; index++) {
                let min = Reflect.getMetadata(`range:${methodName}:${index}:min`, target);
                let max = Reflect.getMetadata(`range:${methodName}:${index}:max`, target);

                if (min !== null && min !== undefined && args[index] < min) {
                    throw `Argument ${args[index]} is less than the minimum [${min}] value allowed.`;
                }

                if (max !== null && max !== undefined && args[index] > max) {
                    throw `Argument ${args[index]} is greater than the maximum [${max}] value allowed.`;
                }
            }

            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
