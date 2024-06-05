function factorial(no)
{
var fact=1;
for(i=1;i<=no;i++)
    {
        fact*=i;
    }
    return fact;
}
var result=factorial(5);
console.log(result);
console.log(factorial(6));
