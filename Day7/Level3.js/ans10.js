function isEmpty(value) 
{
    return value === null || value === undefined ||
           (typeof value === 'string' && value.trim() === '') ||
           (Array.isArray(value) && value.length === 0) ||
           (typeof value === 'object' && Object.keys(value).length === 0);
}

console.log(isEmpty(null));
console.log(isEmpty(undefined));
console.log(isEmpty(''));
console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty('Hello')); 
console.log(isEmpty([1, 2, 3])); 
console.log(isEmpty({ name: 'John' })); 
