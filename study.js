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