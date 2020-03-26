function data(){
    return {a:2, b:3, c:[1,2,7], d:{e:10,f:23},g:9,}
}
//if the source and the target are the same name, it is listed once.
//Where the var keyword is not available, the block is wrapped in parethesis to avoid confusion with a blog
 var {
     a:first,
     b:second,
     c:third,
     d:{
         e:fourth,
         f:fifth
     } = {},
     ...sixth
  } = data() || {};
console.log(third);
console.log(fourth);