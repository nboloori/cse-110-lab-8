// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("Valid phone number 1", () => {
    expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
})

test("Valid phone number 2", () => {
    expect(functions.isPhoneNumber("(098)-765-4321")).toBe(true);
})

test("Invalid phone number 1", () => {
    expect(functions.isPhoneNumber("(1234)-456-7890")).toBe(true);
})

test("Invalid phone number 2", () => {
    expect(functions.isPhoneNumber("12345")).toBe(false);
})

test("Valid email 1", () => {
    expect(functions.isEmail("name@gmail.com")).toBe(true);
})

test("Valid email 2", () => {
    expect(functions.isEmail("me@hotmail.com")).toBe(true);
})

test("Invalid email 1", () => {
    expect(functions.isEmail("name.com")).toBe(false);
})

test("Invalid email 2", () => {
    expect(functions.isEmail("@gmail.com")).toBe(false);
})

test("Valid password 1", () => {
    expect(functions.isStrongPassword("password")).toBe(true);
})

test("Valid password 2", () => {
    expect(functions.isStrongPassword("pass")).toBe(true);
})

test("Invalid password 1", () => {
    expect(functions.isStrongPassword("1password")).toBe(false);
})

test("Invalid password 2", () => {
    expect(functions.isStrongPassword("pas")).toBe(false);
})

test("Valid date 1", () => {
    expect(functions.isDate("1/2/3456")).toBe(true);
})

test("Valid date 2", () => {
    expect(functions.isDate("01/02/3456")).toBe(true);
})

test("Invalid date 1", () => {
    expect(functions.isDate("1/2/345")).toBe(false);
})

test("Invalid date 2", () => {
    expect(functions.isDate("123/2/3456")).toBe(false);
})

test("Valid color 1", () => {
    expect(functions.isHexColor("#fff")).toBe(true);
})

test("Valid color 2", () => {
    expect(functions.isHexColor("#ffffff")).toBe(true);
})

test("Invalid color 1", () => {
    expect(functions.isHexColor("#nnn")).toBe(false);
})

test("Invalid color 2", () => {
    expect(functions.isHexColor("#nnnnnn")).toBe(false);
})