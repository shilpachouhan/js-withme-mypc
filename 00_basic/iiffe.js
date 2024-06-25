// (IIFE) Immediatetly Invoked Function Expressions

(function chai(){
    console.log(`DB CONNECTED`)
})();

( (name)  => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('shilpa')