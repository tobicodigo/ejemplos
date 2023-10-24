// self created promise checkUserName
const checkUserName = (username) => {
  return new Promise((resolve, reject) => {
    if (username === "tobi") {
      resolve(`name ${username} is correct (resolved)`);
    } else {
      reject(`name ${username} is incorrect (rejected)`);
    }
  });
};


// invoke checkUserName("tobi") with then/catch syntax
checkUserName("tobi")
  .then((message) => console.log("then/catch: ", message))
  .catch((message) => console.log("then/catch: ", message));


// invoke checkUserName("tobis") with async/await syntax
async function test1(username) {
  let response;
  try {
    response = await checkUserName(username);
  } catch (error) {
    response = error;
  }
  console.log("async/await: ", response);
}

test1("tobis");


// invoke fetch(url) with then/catch syntax
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log("then/catch: ", json))
  .catch((err) => console.log("then/catch: ", err));


// invoke fetch(url) with async/await syntax
async function test2() {
  let response;
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users");
    response = await response.json();
  } catch (error) {
    response = error;
  }
  console.log("async/await: ", response);
}

test2();
