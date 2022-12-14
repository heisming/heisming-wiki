# OOP
```ts
class People {
  name: string
  ange: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eat(): void {
    alert(`${this.name} eat something`)
  }
  speak(): void {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}

```
## extends
```ts
class Student extends People {
  school: string
  constructor(name: string, age: number, school: string) {
    super(name, age)
    this.school = school
  }
  study() {
    alert(`${this.name} study`)
  }
  eat() {
    alert(`${this.name} eat apple`)
  }
}

class Teacher extends People {
  major: string
  constructor(name: string, age: number, major: string) {
    super(name, age)
    this.major = major
  }
  teach() {
    alert(`${this.name} teach ${this.major}`)
  }
}

// ..
// 可继续派生其它子类
const xiaoming = new Student('xiaoming', 10, 'Aschool')
xiaoming.study()
console.log(xiaoming.school)
const xiaohong = new Student('xiaohong', 11, 'ABschool')
xiaohong.study()
```

## 封装
高内聚，低耦合
- public 外部可访问，默认
- protected 内部或子类可访问
- private 只有内部可访问

```ts
class People {
  name: string
  ange: number
  protected weight: number = 100
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eat(): void {
    alert(`${this.name} eat something`)
  }
  speak(): void {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
}

class Student extends People {
  school: string
  private girlfriend: string
  constructor(name: string, age: number, school: string) {
    super(name, age)
    this.school = school
  }
  study() {
    alert(`${this.name} study`)
  }
  eat() {
    alert(`${this.name} eat apple`)
  }
}
```

## 多态
保证扩展性
- 重写：覆盖父组件的方法
- 重载：支持多种参数形式
```ts
interface IStyleInfo {
  [key: string]: string
}

class JQuery {
  // 函数重载
  css(key: string, value: string): void
  css(styleInfo: IStyleInfo): void
  css(keyOrStyleInfo: IStyleInfo | string, value?: string) {
    if (typeof keyOrStyleInfo === 'string'){
      // key-value形式
      const key = keyOrStyleInfo
      console.log('Set CSS', key, value);
    } else {
      // obj形式
      const styleInfo = keyOrStyleInfo
      for(const key in styleInfo) {
        const value = styleInfo[key]
        console.log('Set CSS', key, value);
      }
    }
  }
}

const j = new JQuery()
j.css('color', 'red')
j.css({ 'color': 'red', 'fontSize': '15px'})
```

