# validate.js
validate value

```js
Validate({email: "mustafauzun0@gmail.com"}, {email: Validate.Email})
//output: true

Validate({email: "mustafauzun0@gmail.com"}, {email: /^[A-Za-z]+$/})
//output: false
```
