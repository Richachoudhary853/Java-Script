function isValidVariable(variable) 
{
    // Regular expression to match valid variable names
    const validVariableRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    // Test if the variable name matches the valid variable regex
    return validVariableRegex.test(variable);
}

console.log(isValidVariable('validVariable'))
console.log(isValidVariable('123invalid'))
console.log(isValidVariable('_anotherValid'))
console.log(isValidVariable('not a variable'))
