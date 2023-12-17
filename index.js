// function receivesAFunction(spy){
//   spy();
// }
let receivesAFunction = spy => spy();

function returnsANamedFunction(){
  return function named(){
    console.log('Adriano');
  }
}

function returnsAnAnonymousFunction(){
  return function (){
    console.log('Adriano');
  }
}
