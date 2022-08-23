# YeFidel Beteseb (የፊደል ቤት)

A package to get the letter families of geez characters.

የግእዝ ፊደላት ቤተሰቦችን ሚዘረዝር ጥቅል።


## How to use (የአጠቃቀም መመሪያ)

First install the package:

```bash
npm install yefidel-beteseb --save
```

then

```js
import getBet from 'yefidel-beteseb';

console.log(getBet('ህ')); // ['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ', 'ሇ']
```


### For development

Clone this repository, modify the code and run the tests:

```bash
npm run test
```