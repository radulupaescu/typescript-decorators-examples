export const Format = (regex: RegExp) =>
    (protoOrDescriptor: {} | any, name?: PropertyKey): any => {
        const descriptor = {
            get(this: any) {
                const propertyName = name !== undefined ? `_${String(name)}` : `_${protoOrDescriptor.key}`;
                return this[propertyName];
            },
            set(this, value) {
                const propertyName = name !== undefined ? `_${String(name)}` : `_${protoOrDescriptor.key}`;

                if (!regex.test(value)) {
                    throw `Cannot set ${value} on ${String(name)}. ${regex} validation failed.`;
                }

                this[propertyName] = value;
            },
            enumerable: true,
            configurable: true,
        };

        return Object.defineProperty(protoOrDescriptor, name, descriptor);
    };
