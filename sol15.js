// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

try {
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Caught a TypeError:", error.message);
    } else {
      console.log("An unexpected error occurred:", error.message);
    }
  }
  