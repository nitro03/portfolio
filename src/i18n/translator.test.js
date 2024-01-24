import translator from './translator';

test('translates polish', () => {
    const val = translator("home",  "pl")
    expect(val).toEqual("Strona główna");
});

test('translates english', () => {
    const val = translator("home", "en")
    expect(val).toEqual("Home");
});

test('no label found', () => {
    const val = translator( "asdfg", "en")

    expect(val).toEqual("");
});

test('no language passed', () => {
    const val = translator( "home")

    expect(val).toEqual("Strona główna");
});