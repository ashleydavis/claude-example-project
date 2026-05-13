test("1 + 1 equals 2", () => {
  // This test is broken on purpose to
  // test that Claude detects it through 
  // its stop hook.
  expect(1 + 1).toBe(3); 
});
