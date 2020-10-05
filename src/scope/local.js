function hw() {
    const hello = 'hello'
    console.log(hello);
}

hw();
console.log(hello); // no la imprimira ya que esta en un closure y esta en un scope local => not defined



/*********************** */


cons functionScope = () => {

    var scope = 'i am local';
    
    const func = () => {

        return scope 
        console.log(scope);
    };
    console.log(func);
};

functionScope()
console.log(scop);