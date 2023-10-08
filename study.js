// console.log 는 콘솔에 특정 내용을 출력
console.log('Hello JavaScript!');
console.log(1 + 2 + 3 + 4);

//변수와 상수 선언
let value = 1;
console.log(value);

//중복이름선언 불가
// let value = 1;
// let value = 2;

const a = 1;  //상수 값 변경 불가
//a = 2;

//var키워드는 똑같은 이름으로 여러번 선언 가능

//데이터 타입
let text = 'hello';
let name = '자바스크립트'; //큰 따옴표 작은 따옴표 둘다 사용가능

//참/거짓 (Boolean)
let good = true;
let loading = false;

//null 과 undefined

//null은 주로 값이 없다! 라고 선언할 때 사용
const friend = null; //친구가없다.

//반면 undefined는, 아직 값이 설정되지 않은 것을 의미

let criminal;
console.log(criminal);

let b = 1;
b += 3;
b -= 3;
b *= 3;
b /= 3;
console.log(b);

//AND, OR, NOT &&, ||, !
//논리연산자 순서 NOT -> AND -> OR

// ===는 두 값이 일치하는지 확인 일치한다면, True, 일치하지 않으면 false

// = 문자 2개로도 비교 가능 ==는 타입까지는 검사하지 않음.

const c = null;
const d = undefined;
const equals = c == d;
console.log(equals);

// != 타입검사 X

const e = '안녕';
const f = '하세요';
console.log(e+f);

// if (true) -> 코드 무조건 실행

//switch/case 문;

const device = 'iphone';

switch (device) {
    case 'iphone':
        console.log('아이폰!');
        break;
    default:
        console.log('모르겠네요');
}
    
//함수 

function add(a,b) {
    return a+b;
    console.log('호출이 되지 않는 코드!'); // return 이후는 호출 X
}

const sum = add(1,2);
console.log(sum);

function hello(name) {
    console.log('hello'+ name + ' ! ');
}
hello('jin');

//+를 사용해도 문제없지만 ES6의 템플릿 리터럴 (Template Literal)을 사용하면 더편하다.
//ES6은 ECMAScript6을 의미, 자바스크립트의 버전을 가르킨다.

function hello(name) {
    console.log(`Hello, ${name}!`); // 따옴표가 아닌 ` 이다 ( 키보드판 1왼쪽 )
  }
  hello('Jin');

//함수 선언은 화살표 문법도 있다.
const add2 = (a,b) => {
    return a+b;
};

console.log(add2(1,2));

//바로 return을 사용할경우 
const add3 = (a,b) => a+b;
console.log(add3(3,4));

//function 과 화살표 함수의 차이는 서로 가르키는 this 가 다르다.

// 객체
// 객체는 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣게 해준다.
// 키 : 원하는 값
// 키에 공백이 필요하면 따옴표로 감싼다.
const dog = {
    name : '멍멍이',
    age : 2
};

console.log(dog.name);
console.log (dog.age);


//함수를 만들어 만든 객체를 파라미터로 받아와 사용\

function print(animal) {
    const text = `${animal.name}(${animal.age}) 멍멍이`;
    console.log(text);
}

print(dog);

// 객체 비구조화 할당
//dog. 이 아닌 객체 비구조화 할당을 통해 보기좋게 작성 가능

function print2(animal){
    const { name, age } = animal; //객체에서 값들을 추출해서 새로운 상수로 선언
    const text = `${name}(${age}).`;
    console.log(text);
}
 
print2(dog);

// 더 나아가면 파라미터 단계에서도 객체 비구조화 할당 가능

function print3({ name, age}) { 
    const text = `${age}(${name})222`;
    console.log(text);
}

print3(dog);

//객체 안에 함수 넣기

const cat = {
    name : '냥냥이',
    sound : '녜옹!',
    say : function say() {
        console.log(this.sound);
    }
};

cat.say();

// this는 자신이 속해있는 객체를 가르킴.
// 함수를 선언할때에 이름이 없어도 된다.
// say: function say() -> say: function ()

//Getter Setter 함수

//객체를 만든후 객체 안의 값 수정 가능

const numb = {
    a: 1,
    b:2
};

numb.a =5;
console.log(numb);

//Getter 함수와 Setter 함수를 사용하면 특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 우리가 원하는 코드를
//실행 시킬 수 있다.

const numberss = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

console.log(numberss.sum);
numberss.b =5;
console.log(numberss.sum);

//numberss.sum() 이 아닌 number.sum 을 조회했는ㄴ데 함수가 실행되고 결과값이 출력됨.
//getter 함수는 특정 값을 조회할때 우리가 설정한 함수로 연산된 값을 반환

//setter 함수

const numbers2 = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a(){
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log('a가 바뀝니다.');
        this._a = value;
        this.calculate();
    },
    set b(value){
        console.log('b가 바뀝니다.');
        this._b = value;
        this.calculate();
    }
};

console.log(numbers2.sum);
numbers2.a = 5;
numbers2.b = 7;
numbers2.a = 9;

//console.log(numbers2.sum);
//console.log(numbers2.sum);
//console.log(numbers2.sum);

// 객체 안에 정의된 값을 가져올수만 있고
// 객체 밖에서 새로운 값을 set 해줄 수 없다.
// console에 출력할 때도 ()를 써야함.
// getter, setter를 이용해 해결가능
// getter : to access properties
// setter : to change(or mutate) properties

// getter 사용법
const person = {
    firstName: "Hong",
    lastName: "Gildong",
    get fullName(){
      return `${person.firstName} ${person.lastName}`;
    }
  };
  
  console.log(person.fullName);

  //setter 사용법
  const person2 = {
    firstName: "Hong",
    lastName: "Gildong",
    get fullName(){
      return `${person2.firstName} ${person2.lastName}`;
    },
    set fullName(value){
      const parts = value.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1]
    }
  };
  
  person2.fullName = 'James Bond'
  console.log(person2.fullName);

  //getter setter은 객체 지향 프로그래밍. 일종의 메서드라고 보면된다.
  //Getter 객체송성을 반환 Setter는 객체 속성 값을 설정.
  // 바로접근하는게 아닌 get (), set () 메서드를 통해 경유해서 설정하도록 하는 기법
  // 객체 내부 속성에 직접 접근하지 않아 객체의 정보 은닉을 가능하게 해줌.
  // 코드의 안전성 유지보수성 높일 수 있다는 장점.
  // 옳지않은 값 넣으려고 할때 이를 미연에 방지.
  

  // 배열
  const objects = [{ name: '멍멍스' }, { name : '야옹스'}];


  objects.push({
    name: '멍뭉멍뭉'
  });

  console.log(objects);
  console.log(objects[0]);
  console.log(objects[1]);

  console.log(objects.length);

  // 반복문

  for (let i = 0 ; i < 10 ; i ++ ){
    console.log(i);
  }

  //배열과 for
  
  for (let i = 0; i < objects.length; i++){

    console.log(objects[i]);
  }

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//for...of 문은 배열에 관한 반복문을 돌리기 위한것


let matrix = [10, 20, 30, 40, 50];
for (let number of matrix) {
  console.log(number);
}

//객체의 정보를 배열 형태로 받아올 수 있는 함수

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
  };
  
  console.log(Object.entries(doggy)); // -> [[키,값]. [키, 값]] 형태로 변환
  console.log(Object.keys(doggy));
  console.log(Object.values(doggy));

  for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
  }

  for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // 다음 루프를 실행
    console.log(i);
    if (i === 5) break; // 반복문을 끝내기
  }

  // i 가 2일땐 continue 를 하여 원래 console.log 를 해야하지만 스킵하고 3으로 넘아감.

  // 배열을 파라미터로 받아서 총합 구하는 함수만들기!!!!!!

  function MatrixSum(numbers2){
    let sum = 0;
    for (i = 0 ; i < numbers2.length ; i ++) {
        sum += numbers2[i];
    }
return sum;
}
const result = MatrixSum([1,2,3,4,5]);
console.log(result);

// 배열 내장함수

//for each -> 우리가 배웠던 for 문을 대체 시킬 수 있다.`

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i]);
  }

superheroes.forEach(hero => { // hero는 각 원소를 기리킨다.
    console.log(hero);
  });
  //콜백함수라고 부른다.

const array = [1, 2, 3, 4, 5, 6, 7, 8]; // map은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과장에서 새로운 배열이 만들어진다.
//각 숫자 제곱
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
console.log(squared);

//forEach 사용

const squared2 = [];

array.forEach(n => {
  squared2.push(n * n);
});

console.log(squared2);

//map 함수 사용 

const square = n => n * n;
const squared_map = array.map(square);
console.log(squared_map);

//map 함수의 파라미터로는 변화를 주는 함수를 전달
// 이름을 붙여서 선언 할 필요는 없다
//const squared = array.map(n => n * n);
//console.log(squared); 

// indoxOf 원하는 항목이 몇번째 원소인지 찾아준다.
const index = superheroes.indexOf('토르');
console.log(index);

// 배열 안에 있는 값이 객체이거나, 배열일때 findIndex

const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];

const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);
const todo = todos.find(todo => todo.id ===3); //find 값 자체를 가져옴
console.log(todo);
const tasksNotDone = todos.filter(todo => todo.done === false); //특정 조건을 만족하는 값만 추출 (todo => !todo.done);도 가능
console.log(tasksNotDone);

// splice 몇번째 index인지 확인 후 항목 제거

superheroes.splice(index, 1); // 토르를 지움
console.log(superheroes);

//slice는 배열을 잘라내지만 기본 배열은 건들지 않는다
const sliced = superheroes.slice(0,2);

console.log(sliced);
console.log(superheroes);

const numbers3 = [10, 20, 30, 40];
const value2 = numbers3.shift(); // 첫번째 원소를 배열에서 추출 ( 추출하는 과정에서 원소 사라진다.)
console.log(value2);
console.log(numbers3);

const value3 = numbers3.pop(); //맨 마지막 항목 추출
console.log(value3);
console.log(numbers3);

// unshift 새원소 추가
numbers3.unshift(5);
console.log(numbers3);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2); // 여러개의 배열을 하나의 배열로 합침

console.log(concated);
// join 은 배열 안의 값들을 문자열 형태로 합쳐줌
console.log(arr1.join()); // 1,2,3,4,5
console.log(arr1.join(' ')); // 1 2 3 4 5
console.log(arr1.join(', ')); // 1, 2, 3, 4, 5

//reduce 함수에는 두개의 파라미터를 전달
//첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수
//두번째 파라미터는 reduce 함수에서 사용 할 초깃값입니다.
//여기서 accumulator 는 누적된 값을 의미합니다.

const numbers4 = [1, 2, 3, 4, 5];
let sum2 = numbers4.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum2);
