export const LogAccess = () =>
    (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = function (...args) {
            console.log(`Method ${propertyKey} has been accessed.`);
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
