export function convertKeys(obj: object, convertFn: (key: string) => string): object {
    if(typeof obj !== 'object' || obj === null) {
      return obj;
    }
    if(Array.isArray(obj)) {
      return obj.map((item) => convertKeys(item, convertFn));
    }

    const convertedObj: Record<string, unknown> = {};
    for(const key in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, key)) {
        const convertedKey = convertFn(key);
        const value = obj[key as keyof typeof obj];

        if(typeof value === 'object' && value !== null) {
          convertedObj[convertedKey] = convertKeys(value, convertFn);
        }else {
          convertedObj[convertedKey] = value;
        }
      }
    }
    return convertedObj;
  }
export function convertToCamelCase(obj: object): object {
    return convertKeys(obj, (key) => key.replace(/_([a-z])/g, (match) => match[1].toUpperCase()));  
  }