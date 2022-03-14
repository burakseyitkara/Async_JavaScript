const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
// .then(getPosts)
// .catch(err => console.log(err));


//Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

// function getDataApi(url) {
//   return fetch(url).then(data => data.json());
// }
// getDataApi("https://jsonplaceholder.typicode.com/photos").then(data => console.log(data)).catch(err => console.log(err));

// function getTextFile(url) {
//   return fetch(url).then(data => data.text());
// }
//     getTextFile("yeni 1.txt")
//         .then(data => console.log(data))
//         .catch(err => console.log(err));

//Async / Await / Fetch 

// async function fetchUsers(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
// }
// fetchUsers();

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then( responses => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.statusText}`);
//     }
//   })
//   .catch( error => {
//     console.error(`Failed to fetch: ${error}`)
//   });

function addStrings(previous, current) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(previous +" "+ current);
        }, Math.floor(Math.random() * 100)+1);
    });
    }

function addAll(){
    addStrings("","A")
        .then((result) => {
            return addStrings(result, "B");
        })
        .then((result) => {
            return addStrings(result, "C");
        })
        .then((result) => {
            console.log(result);
        })
        .catch(err => console.log(err));
}

addAll();

// Diğer kısma geçmeden önce promise yapısı ile ilgili promise.all( ) ve 
//promise.race( ), promise.allSettled( ) ve promise.any( ) özelliklerinden de bahsetmek istiyorum.
// Promise.all( ), birden fazla promise tek bir then( ) ve catch( ) ile yazılabiliyor. 
//Promise’lerden biri reject( ) olursa direk catch( )’e girer. Tüm Promise başarıyla tamamlanmasını
// bekler.
// Promise.race( ), ise promiselerden en önce hangi promise tamamlanırsa onun sonucunu alır.
// Promise.allSettled( ), tüm Promise başarılı, başarısız işletimleri bitince sonuçlarını status leri 
//ile birlikte geriye döner.
// Promise.any( ), bu yöntem, yerine getiren ilk promisi döndürmek için kullanışlıdır. 
//Bir promise yerine getirildikten sonra kısa devre yapar, bu nedenle bir resolve olmuş bir promise 
//bulduktan sonra diğer promiselerin tamamlanmasını beklemez.


// async function fetchUsers(){
//         const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await res.json();
//         const data2 = await res2.json();
//         console.log(data);
//         console.log(data2);
//     }
//     fetchUsers();


//RASTGELE ALIYOR BELLI BIR SIRAYLA DEGIL ASYNC AWAIT YAPISIYLA SIRASINI BELIRLEYEBILIRIZ.
function getDataApi(url) {
  return fetch(url).then(data => data.json());
}
getDataApi("https://jsonplaceholder.typicode.com/posts").then(data => console.log(data)).catch(err => console.log(err));
getDataApi("https://jsonplaceholder.typicode.com/posts/1").then(data => console.log(data)).catch(err => console.log(err));