"use strick";
const getDatafromApi = async () => {
  const exp1 = await fetch("https://jsonplaceholder.typicode.com/todos/");
  if (exp1.status === 200) {
    const dataExp1 = await exp1.json();
    console.log(dataExp1);
  } else {
    console.log("ddeos tao ve dc");
  }
  const exp2 = await fetch(
    "https://raw.githubusercontent.com/openai/gym/master/README.md"
  );
  if (exp2.status === 200) {
    const readata = await exp2.text();
    console.log(readata);
  } else {
    console.log("@@");
  }
};
getDatafromApi();
