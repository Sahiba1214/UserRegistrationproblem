// UC2---password : min 1 letter caps, min 8 chars, min 1 number, min 1 special char,max 15 chars

{
    const reg = RegExp(/^(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,15}$/);
    let result = reg.test("Sahiba")
    console.log("Password ===>", result);
}