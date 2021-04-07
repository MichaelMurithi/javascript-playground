# Type Assertions
- Useful when you have information about a type that typescript doesn't know about.
- Removed by the compiler and won't affect the runtime behaviour of your code.
- The `as` keyword is used.

``` typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement

```
- They don't affect the code's runtime behavior since the're removed by the compiler.

### Impossible coercions

- Typescript only allows type assertions which convert to a more specific/ less specific version of a type.
- The rule prevents 'impossible' coercions like:

```typescript
const greeting = "hello" as number
```

### Literal Types
- Not very useful since they involve having a variable that can only have one value
- By combining literals into unions, we can express a much morer useful concept e.g functions that accept a certain set of known values


