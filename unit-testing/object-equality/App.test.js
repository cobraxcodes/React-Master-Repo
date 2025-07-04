// 📝 Challenge 2: Object Equality
// Create a user object { name: 'Cobra' } and test if it equals { name: 'Cobra' } using .toEqual().

const obj1 = {
    name: 'Cobra'
}

const obj2={
    name: 'Cobra'
}

test('objects are equal', () =>{
    expect(obj1).toEqual(obj2)
})