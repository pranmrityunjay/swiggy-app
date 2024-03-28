import  sum from "../sum"
test("Sum function",()=>{
    const res=sum(3,4);
    expect(res).toBe(7);

});