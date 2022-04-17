// UC3--- Regex experrision for email


    const reg = RegExp(/^[a-z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/);
    let result = reg.test("sahiba1214@gmail.com")
    console.log("EmailId ===>", result);
