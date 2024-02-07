console.log(null>0);
console.log(null==0);
console.log(null>=0);

/* the reason is that an equality check and comparisions operator work differently.
Comparisions converts null to a number treating it like a 0.
That's why (3) null>=0 is true and (1) null>0 */